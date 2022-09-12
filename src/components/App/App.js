import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";
import { useFormWithValidation } from "../../utils/formValidator";

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const { values, checks, handleChange, errors, isValid, /*setIsValid*/ } =
    useFormWithValidation();

  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  function handleOpenFeedbackForm() {
    setIsOpenFeedBack(true);
  }

  function closeAllPopups() {
    setIsOpenFeedBack(false);
  }

  function handleRegister({ value }) {
    console.log(value);
  }

  return (
    <div className="page">
      <Header onOpenFeedback={handleOpenFeedbackForm} />
      <Main
        isToggleBurger={isToggleBurger}
        onToggleBurger={handleToggleBurger}
       // getTopPosition={getTopnavTopPosition}
      />
      <Footer />
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
      <ImagePopup />
      <PopupWithConfirmation />
    </div>
  );
}

export default App;
