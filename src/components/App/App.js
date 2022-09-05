import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  function handleOpenFeedbackForm() {
    setIsOpenFeedBack(true);
  }

  function closeAllPopups() {
    setIsOpenFeedBack(false);
  }

  return (
    <div className="page">
      <Header onOpenFeedback={handleOpenFeedbackForm}/>
      <Main isToggleBurger={isToggleBurger} onToggleBurger={handleToggleBurger}/>
      <Footer />
      <HandleFeedbackPopup  isOpenFeedBack={isOpenFeedBack} onClose={closeAllPopups}/>
      <ImagePopup />
      <PopupWithConfirmation />
    </div>
  );
}

export default App;
