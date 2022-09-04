import Header from "./Header/Header";
import Topnav from "./Topnav/Topnav";
import Main from "./Main/Main";
import Footer from "./Footer/Footer";
import HandleFeedbackPopup from "./HandleFeedbackPopup/HandleFeedbackPopup";
import ImagePopup from "./ImagePopup/ImagePopup";
import PopupWithConfirmation from "./PopupWithConfirmation/PopupWithConfirmation";

function App() {
  return (
    <div className="page">
      <Header />
      <Topnav />
      <Main />
      <Footer />
      <HandleFeedbackPopup />
      <ImagePopup />
      <PopupWithConfirmation />
    </div>
  );
}

export default App;
