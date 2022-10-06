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
  return (
    <li className="clients__item">
      <div className="clients__data">
        <p className="clients__data-item">{props.client.email}</p>
        <p className="clients__data-item">{props.client.phone}</p>
        <p className="clients__data-item clients__data-item_type_new">
          {props.client.status}
        </p>
        <button
          className={`clients__edit-button ${
            isClientOpen ? "clienst__more-button_active" : ""
          }`}
          area-label="Комментарии к клиенту"
          type="button"
          onClick={handleOpenEditClient}
        ></button>
        <button
          className={`clients__more-button ${
            isClientOpen ? "clients__more-button_active" : ""
          }`}
          area-label="Редактировать"
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
