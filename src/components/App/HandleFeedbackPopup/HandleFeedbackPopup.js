function HandleFeedbackPopup(props) {
  function handleSubmit(e) {
    e.preventDefault();
    let email = `${props.values["feedbackemail"] || ""}`;
    let phone = `${props.values["feedbacktel"] || ""}`;
    props.onCreateClient({ email, phone });
  }

  function handleClosePopup() {
    props.onClose();
  }

  function handleInputChange(e) {
    props.onInputChange(e);
  }

  return (
    <div
      className={`popup popup_handle_feedback ${
        props.isOpenFeedBack ? "popup_opened" : ""
      }`} onClick={props.onOverlayClose}
    >
      <div className="popup__container">
        <button
          className="popup__close"
          type="button"
          aria-label="Закрыть"
          onClick={handleClosePopup}
        >
          &#10006;
        </button>
        <form
          action="#"
          name="feedbackform"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="form__title">Заказать звонок</h2>
          <label htmlFor="feedbackemail" className="form__field">
            <input
              id="feedbackemail"
              type="email"
              className="form__input form__input_add_name"
              name="feedbackemail"
              placeholder="Введите e-mail адрес"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
              value={props.values["feedbackemail"] || ""}
              onChange={handleInputChange}
            />
            <span id="error-email" className="form__input-error">
              {props.errors["feedbackemail"] || ""}
            </span>
          </label>
          <label htmlFor="feedbacktel" className="form__field">
            <input
              id="feedbacktel"
              type="text"
              className="form__input form__input_add_link"
              name="feedbacktel"
              placeholder="+375221112233"
              required
              pattern="\+375[0-9]{9}"
              value={props.values["feedbacktel"] || ""}
              onChange={handleInputChange}
            />
            <span id="error-tel" className="form__input-error">
              {props.errors["feedbacktel"] || ""}
            </span>
          </label>
          <button
            className={`form__submit ${
              !props.isValid ? "form__submit_disabled" : ""
            }`}
            type="submit"
            disabled={!props.isValid}
          >
            <span
              className={`form__submit-text ${
                props.isValid ? "form__submit-text_hover" : ""
              }`}
            >
              <span className="form__submit-icon form__submit-icon_type_hidden">
                &#10148;
              </span>
              <span className="form__submit-icon">Бесплатная консультация</span>
            </span>
          </button>
          <label
            htmlFor="feedbackconditions"
            className="form__field form__field_type_row"
          >
            <input
              className="form__checkbox"
              id="feedbackconditions"
              name="feedbackconditions"
              type="checkbox"
              required
              onChange={handleInputChange}
              defaultChecked={props.checks["feedbackconditions"] || false}
            ></input>
            <span className="form__checkbox-item">&#10004;</span>
            <span className="form__conditions">Принимаю соглашение о </span>
            <a
              className="form__conditions-link"
              href="https://0622203.demo1.siteimperium.com/privacy"
              rel="noreferrer"
              target="_blank"
            >
              персональных данных
            </a>
            <span id="error-conditions" className="form__input-error">{props.checks["feedbackconditions"] ? `${props.errors["feedbackconditions"]}` : "Чтобы продолжить, установите этот флажок."}</span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default HandleFeedbackPopup;
