import { useState } from "react";

function Client(props) {
  const [isClientOpen, setIsClientOpen] = useState(false);
  function handleClick() {
    setIsClientOpen(!isClientOpen);
  }

  function handleOpenEditClient() {
    const clientData = {
      email: props.client.email,
      phone: props.client.phone,
      status: props.client.status,
      description: props.client.description,
      id: props.client._id,
    };
    props.onOpenEditClient(clientData);
  }

  function handleDeleteClient() {
    props.onConfirmation(props.client); //Настраивает открытие попапа подтверждения удаления
  }

  const statusColor = (status) => {
    switch(status) {
      case "Новый клиент":
        return "clients__data-item_type_new";
      case "В работе":
        return "clients__data-item_type_working";
      case "Заказ завершен":
        return "clients__data-item_type_end";
      default:
        return "clients__data-item_type_new";
    }
  }

  return (
    <li className="clients__item">
      <div className="clients__data">
        <p className="clients__data-item">{props.client.email}</p>
        <p className="clients__data-item">{props.client.phone}</p>
        <p className={`clients__data-item ${statusColor(props.client.status)}`}>
          {props.client.status}
        </p>
        <button
          className="clients__edit-button"
          area-label="Редактировать"
          type="button"
          onClick={handleOpenEditClient}
        ></button>
        <button
          className="clients__remove-button"
          area-label="Удалить"
          type="button"
          onClick={handleDeleteClient}
        ></button>
        <button
          className={`clients__more-button ${
            isClientOpen ? "clients__more-button_active" : ""
          }`}
          area-label="Комментарии к клиенту"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
      </div>
      <p
        className={`clients__description ${
          isClientOpen ? "clients__description_active" : ""
        }`}
      >
        {props.client.description}
      </p>
    </li>
  );
}

export default Client;
