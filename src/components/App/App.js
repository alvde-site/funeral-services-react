import { useState } from "react";
import Header from "./Header/Header";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";
import { useFormWithValidation } from "../../utils/formValidator";
import {portfolioImages, questionsDataList} from "../../utils/constants";

function App() {
  const [isToggleBurger, setIsToggleBurger] = useState(false);
  const [isOpenFeedBack, setIsOpenFeedBack] = useState(false);
  const { values, checks, handleChange, errors, isValid, /*setIsValid*/ } =
    useFormWithValidation();
  const [selectedImage, setSelectedImage] = useState({});

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
