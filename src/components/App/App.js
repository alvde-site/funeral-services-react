import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  function handleToggleBurger() {
    setIsToggleBurger(!isToggleBurger);
  }

  return (
    <div className="page">
      <Header />
      <Main isToggleBurger={isToggleBurger} onToggleBurger={handleToggleBurger}/>
      <Footer />
      <HandleFeedbackPopup />
      <ImagePopup />
      <PopupWithConfirmation />
    </div>
  );
}

export default App;
