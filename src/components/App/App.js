import { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
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
import EditClientPopup from "./EditClientPopup/EditClientPopup";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import success from "../../images/success.png";
import fail from "../../images/fail.png";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  // const [isInvalidToken, setIsInvalidToken] = useState(false);
  const [token, setToken] = useState("");
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const {
    values,
    setValues,
    checks,
    handleChange,
    errors,
    isValid /*setIsValid*/,
  } = useFormWithValidation();
  const [selectedImage, setSelectedImage] = useState({});
  const [clients, setClients] = useState([]);
  const [isEditClientFormOpen, setIsEditClientFormOpen] = useState(false);
  const [openedClientData, setOpenedClientData] = useState({});
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [isDeleteClient, setIsDeleteClient] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isInfoTooltipData, setIsInfoTooltipData] = useState({});
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
              setClients(res.reverse());
              setSubmitError("");
            }
          })
          .catch((err) => {
            if (err === "Ошибка 401") {
              setLoggedIn(false);
              setSubmitError("Неверный логин или пароль");
            }
            console.log(`${err}`);
          });
      }
    }
  }

  useEffect(() => {
    if (loggedIn) {
      navigate("/clients");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    tokenCheck();
  }, [loggedIn]);

  function handleLogin({ password, email }) {
    setIsLoading(true);
    setSubmitError("");
    MainApiSet.login({ email, password })
      .then((res) => {
        if (res.message) {
          setSubmitError(res.message);
          return;
        }
        if (res.token) {
          localStorage.setItem("token", res.token);
          setToken(res.token);
          //  setIsInvalidToken(false);
          return res;
        } else {
          return;
        }
      })
      .then((res) => {
        if (res.token) {
          setSubmitError("");
          setLoggedIn(true);
          navigate("/clients");
        }
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          setSubmitError("Неверный логин или пароль");
        }
        console.log("err", err);
      })
      .finally(() => {
        setIsLoading(false);
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
    setIsEditClientFormOpen(false);
    setIsConfirmationPopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
  }

  function handleCreateClient({ email, phone }) {
    MainApiSet.createClient({ email, phone })
      .then((newClient) => {
        setClients((clients) => [newClient, ...clients]);
        closeAllPopups();
        setIsInfoTooltipPopupOpen(true);
        setIsInfoTooltipData({
          image: success,
          title: "Спасибо за заявку",
          subtitle: "Менеджер обработает её в течение 30 минут и перезвонит!",
        });
      })
      .catch((err) => {
        if (err === "Ошибка 401") {
          setSubmitError("Неверный логин или пароль");
          setIsInfoTooltipData({
            image: fail,
            title: "Что-то пошло не так",
            subtitle: "Попробуйте еще раз",
          });
        }
        console.log("err", err);
      })
      .finally(() => {
        setIsLoading(false);
      });
      // Отправка сообщние в бот Telegram
      MainApiSet.sendTelegramMsg({ email, phone })
      .then((res) => {
        console.log("Успешно", res);
      })
      .catch((err) => {
        console.log("err", err);
      })
  }

  function handleImageClick(imageSrc) {
    imageSrc.isOpen = true;
    setSelectedImage(imageSrc);
  }

  function handleOpenEditClientForm(clientData) {
    setIsEditClientFormOpen(true);
    setOpenedClientData(clientData);
  }

  function handleEditClient({ email, phone, status, description, id }) {
    setIsLoading(true);
    MainApiSet.updateClient({ email, phone, status, description, id }, token)
      .then((updatedClient) => {
        setIsEditClientFormOpen(false);
        const newClients = clients.map((c) =>
          c._id === updatedClient._id ? updatedClient : c
        );
        setClients(newClients);
        setValues({});
        setOpenedClientData({});
      })
      .catch((err) => {
        if (err) {
          setSubmitError("При обновлении профиля произошла ошибка");
        }
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handlePopupWithConfirmation(client) {
    //Настраивает открытие попапа подтверждения удаления
    setIsConfirmationPopupOpen(true);
    setIsDeleteClient(client);
  }

  function handleConfirmClientDelete() {
    //Удаление карточки через ConfirmPopup
    setIsLoading(true);
    MainApiSet.deleteClient(isDeleteClient._id, token)
      .then((deletedClient) => {
        setClients((state) => state.filter((c) => c._id !== deletedClient._id));
        console.log(deletedClient);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleSignout() {
    setIsLoading(true);
    MainApiSet.signout(token)
      .then(() => {
        setLoggedIn(false);
        localStorage.removeItem("token");
        navigate("/");
      })
      .catch((err) => {
        if (err) {
          setSubmitError("Что-то пошло не так");
        }
        console.log(`${err}`);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  function handleEditClientInputChange(e) {
    handleChange(e);
    if (e.target.value === "") {
      handleEmptyEditClentValue(e.target.id);
    }
  }

  function handleEmptyEditClentValue(id) {
    switch (id) {
      case "clientemail":
        setOpenedClientData((state) => {
          return { ...state, email: "" };
        });
        break;
      case "clientphone":
        setOpenedClientData((state) => {
          return { ...state, phone: "" };
        });
        break;
      case "clientdescription":
        setOpenedClientData((state) => {
          return { ...state, description: "" };
        });
        break;
      default:
        setOpenedClientData(openedClientData);
    }
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
          element={
            !loggedIn ? (
              <Login
                onInputChange={handleChange}
                values={values}
                errors={errors}
                isValid={isValid}
                onLogin={handleLogin}
                submitError={submitError}
                isLoading={isLoading}
              />
            ) : (
              <Navigate to="/clients" />
            )
          }
        ></Route>
        <Route element={<ProtectedRoute loggedIn={loggedIn} />}>
          <Route
            exact
            path="/clients"
            element={
              <Clients
                clients={clients}
                onOpenEditClient={handleOpenEditClientForm}
                onConfirmation={handlePopupWithConfirmation}
                onSignout={handleSignout}
              />
            }
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
      <EditClientPopup
        isEditClientFormOpen={isEditClientFormOpen}
        onClose={closeAllPopups}
        openedClientData={openedClientData}
        onInputChange={handleEditClientInputChange}
        values={values}
        errors={errors}
        isValid={isValid}
        isLoading={isLoading}
        onEditClient={handleEditClient}
      />
      <ImagePopup
        portfolioImage={selectedImage}
        onClose={closeAllPopups}
        name="image-viewing"
      />
      <PopupWithConfirmation
        isOpen={isConfirmationPopupOpen}
        onClose={closeAllPopups}
        onConfirmDelete={handleConfirmClientDelete}
        isLoading={isLoading}
      />
      <InfoTooltip
        name="infotooltip"
        isOpen={isInfoTooltipPopupOpen}
        isInfoData={isInfoTooltipData}
        onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
