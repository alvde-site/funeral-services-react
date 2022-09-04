function HandleFeedbackPopup() {
  return (
    <div className="popup popup_handle_feedback">
      <div className="popup__container">
        <button className="popup__close" type="button" aria-label="Закрыть">
          &#10006;
        </button>
        <form action="#" name="feedbackform" className="form" noValidate>
          <h2 className="form__title">Заказать звонок</h2>
          <label htmlFor="email" className="form__field">
            <input
              id="email"
              type="email"
              className="form__input form__input_add_name"
              name="email"
              placeholder="Введите e-mail адрес"
              required
              minLength="2"
              maxLength="30"
            />
            <span id="error-email" className="form__input-error"></span>
          </label>
          <label htmlFor="tel" className="form__field">
            <input
              id="tel"
              type="text"
              className="form__input form__input_add_link"
              name="tel"
              placeholder="+375221112233"
              required
              pattern="\+375[0-9]{9}"
            />
            <span id="error-tel" className="form__input-error"></span>
          </label>
          <button className="form__submit" type="submit">
            <span className="form__submit-text">
              <span className="form__submit-icon form__submit-icon_type_hidden">
                {`&#10148`}
              </span>
              <span className="form__submit-icon">Бесплатная консультация</span>
            </span>
          </button>
          <label htmlFor="conditions" className="form__field form__field_type_row">
            <input
              className="form__checkbox"
              id="conditions"
              type="checkbox"
              required
            ></input>
            <span className="form__checkbox-item">&#10004;</span>
            <span className="form__conditions">Принимаю соглашение о </span>
            <a
              className="form__conditions-link"
              href="https://0622203.demo1.siteimperium.com/privacy"
            >
              персональных данных
            </a>
            <span id="error-conditions" className="form__input-error"></span>
          </label>
        </form>
      </div>
    </div>
  );
}

export default HandleFeedbackPopup;
