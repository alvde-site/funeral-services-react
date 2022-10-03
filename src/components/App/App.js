import { useState, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Footer from "./Footer/Footer";
import Clients from "./Clients/Clients";
import { MainApiSet } from "../../utils/MainApi";
import Login from "./Login/Login";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";
import { useFormWithValidation } from "../../utils/formValidator";
import { portfolioImages, questionsDataList } from "../../utils/constants";
import ScrollUp from "./ScrollUp/ScrollUp";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isInvalidToken, setIsInvalidToken] = useState(false);
  const [token, setToken] = useState("");
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const { values, checks, handleChange, errors, isValid /*setIsValid*/ } =
    useFormWithValidation();
  const [selectedImage, setSelectedImage] = useState({});
  const [clients, setClients] = useState([]);

  const navigate = useNavigate();

  function tokenCheck() {
    // если у пользователя есть токен в localStorage,
    // эта функция проверит, действующий он или нет
    if (localStorage.getItem("token")) {
      const jwt = localStorage.getItem("token");
      setToken(jwt);
      // здесь будем проверять токен
      if (jwt) {
        // проверим токен
        MainApiSet.getContent(jwt)
          .then((res) => {
            if (res) {
              setLoggedIn(true);
              setClients(res);
              // setSubmitError("");
              // setIsInvalidToken(false);
            }
          })
          .catch((err) => {
            if (err === "Ошибка 401") {
              setLoggedIn(false);
              // setSubmitError("Неверный логин или пароль");
              // setIsInvalidToken(true);
            }
            console.log(`${err}`);
          });
      }
    }
  }

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function handleLogin({ password, email }) {
    // setIsLoading(true);
    // setSubmitError("");
    MainApiSet.login({ email, password })
      .then((res) => {
        if (res.message) {
          // setSubmitError(res.message);
          return;
        }
        if (res.token) {
          localStorage.setItem("token", res.token);
          // setToken(res.token);
          //  setIsInvalidToken(false);
          return res;
        } else {
          return;
        }
      })
      .then((res) => {
        if (res.token) {
          // setSubmitError("");
          setLoggedIn(true);
          navigate("/clients");
        }
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          // setSubmitError("Неверный логин или пароль");
        }
        console.log("err", err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }

  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  function handleOpenFeedbackForm() {
    setIsOpenFeedBack(true);
  }

  function closeAllPopups() {
    setIsOpenFeedBack(false);
    setSelectedImage(false);
  }

  function handleCreateClient({ email, phone }) {
    MainApiSet.createClient({ email, phone }, token)
      .then((res) => {
        console.log(res);
        closeAllPopups();
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          // setSubmitError("Неверный логин или пароль");
        }
        console.log("err", err);
      })
      .finally(() => {
        // setIsLoading(false);
      });
  }

  function handleImageClick(imageSrc) {
    imageSrc.isOpen = true;
    setSelectedImage(imageSrc);
  }

  return (
    <div className="page">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header onOpenFeedback={handleOpenFeedbackForm} />
              <Main
                isToggleBurger={isToggleBurger}
                onToggleBurger={handleToggleBurger}
                onOpenFeedback={handleOpenFeedbackForm}
                portfolioImages={portfolioImages}
                questionsDataList={questionsDataList}
                onImageClick={handleImageClick}
              />
              <Footer />
              <ScrollUp />
            </>
          }
        ></Route>
        <Route
          exact
          path="/signin"
          element={!loggedIn ?
                <Login
                  onInputChange={handleChange}
                  values={values}
                  errors={errors}
                  isValid={isValid}
                  onLogin={handleLogin}
                  // submitError={submitError}
                  // isLoading={isLoading}
                />
              : <Navigate to="/clients"/> }
        ></Route>
        <Route element={<ProtectedRoute loggedIn={loggedIn}/>}>
          <Route
            exact
            path="/clients"
            element={<Clients clients={clients} />}
          />
        </Route>
      </Routes>
      <HandleFeedbackPopup
        isOpenFeedBack={isOpenFeedBack}
        onClose={closeAllPopups}
        onInputChange={handleChange}
        values={values}
        checks={checks}
        errors={errors}
        isValid={isValid}
        onCreateClient={handleCreateClient}
      />
      <ImagePopup
        portfolioImage={selectedImage}
        onClose={closeAllPopups}
        name="image-viewing"
      />
      <PopupWithConfirmation />
    </div>
  );
}

export default App;
