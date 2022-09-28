import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import { MainApiSet } from "../../utils/MainApi";
import Login from "./Login/Login";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";
import { useFormWithValidation } from "../../utils/formValidator";
import { portfolioImages, questionsDataList } from "../../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isInvalidToken, setIsInvalidToken] = useState(false);
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const { values, checks, handleChange, errors, isValid /*setIsValid*/ } =
    useFormWithValidation();
  const [selectedImage, setSelectedImage] = useState({});

  const history = useNavigate();

  useEffect(() => {
    if (isInvalidToken) {
      history.push("/signin");
    }
  }, [isInvalidToken, history]);

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
         setIsInvalidToken(false);
          return res;
        } else {
          return;
        }
      })
      .then((res) => {
        if (res.token) {
          // setSubmitError("");
          setLoggedIn(true);
          // history.push("/movies");
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

  function handleRegister({ value }) {
    console.log(value);
  }

  function handleImageClick(imageSrc) {
    imageSrc.isOpen = true;
    setSelectedImage(imageSrc);
  }

  return (
    <div className="page">
      <Routes>
        <Route exact path="/">
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
        </Route>
        <Route exact path="/signin">
          {loggedIn ? (
            <Navigate to="/" />
          ) : (
            <Login
              onInputChange={handleChange}
              values={values}
              errors={errors}
              isValid={isValid}
              onLogin={handleLogin}
              // submitError={submitError}
              // isLoading={isLoading}
            />
          )}
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
        onRegister={handleRegister}
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
