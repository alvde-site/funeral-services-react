function EditClientPopup(props) {

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    let email = `${props.values["clientemail"] || props.openedClientData.email}`;
    let phone = `${props.values["clientphone"] || props.openedClientData.phone}`;
    let status = `${props.values["clientstatus"] || props.openedClientData.status}`;
    let description = `${props.values["clientdescription"] || props.openedClientData.description}`;
    let id = props.openedClientData.id;
    props.onEditClient({ email, phone, status, description, id });
  }

  function handleInputChange(e) {
    props.onInputChange(e);
  }

  function handleClosePopup() {
    props.onClose();
  }

  return (
    <div
      className={`popup popup_handle_client ${
        props.isEditClientFormOpen ? "popup_opened" : ""
      }`}
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
          name="editclientform"
          className="form"
          noValidate
          onSubmit={handleSubmit}
        >
          <h2 className="form__title">Редактировать данные клиента</h2>
          <label htmlFor="clientemail" className="form__field">
            <input
              id="clientemail"
              type="email"
              className="form__input form__input_add_email"
              name="clientemail"
              placeholder="Введите e-mail адрес"
              required
              minLength="2"
              maxLength="30"
              pattern="[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}"
              value={props.values["clientemail"] || props.openedClientData.email || ""}
              onChange={handleInputChange}
            />
            <span id="error-email" className="form__input-error">
              {/* {props.errors["clientmail"] || ""} */}
            </span>
          </label>
          <label htmlFor="clientphone" className="form__field">
            <input
              id="clientphone"
              type="text"
              className="form__input form__input_add_link"
              name="clientphone"
              placeholder="+375221112233"
              required
              pattern="\+375[0-9]{9}"
              value={props.values["clientphone"] || props.openedClientData.phone || ""}
              onChange={handleInputChange}
            />
            <span id="error-tel" className="form__input-error">
              {/* {props.errors["clientphone"] || ""} */}
            </span>
          </label>
          <label htmlFor="clientstatus" className="form__field">
            <input
              id="clientstatus"
              type="text"
              className="form__input form__input_add_link"
              name="clientstatus"
              required
              minLength="2"
              value={props.values["clientstatus"] || props.openedClientData.status || ""}
              onChange={handleInputChange}
            />
            <span id="error-descrioption" className="form__input-error">
              {/* {props.errors["clientstatus"] || ""} */}
            </span>
          </label>
          <label htmlFor="clientdescription" className="form__field">
            <input
              id="clientdescription"
              type="text"
              className="form__input form__input_add_link"
              name="clientdescription"
              required
              minLength="2"
              value={props.values["clientdescription"] || props.openedClientData.description || ""}
              onChange={handleInputChange}
            />
            <span id="error-descrioption" className="form__input-error">
              {/* {props.errors["clientdescription"] || ""} */}
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
              <span className="form__submit-icon">Сохранить</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditClientPopup;
