import {useState} from "react";

function Client({client}) {
  const [isClientOpen, setIsClientOpen] = useState(false);
  function handleClick() {
    setIsClientOpen(!isClientOpen);
  }
  return (
    <li className="clients__item">
      <div className="clients__data">
        <p className="clients__data-item">{client.email}</p>
        <p className="clients__data-item">{client.phone}</p>
        <p className="clients__data-item clients__data-item_type_new">{client.status}</p>
        <button
          className={`clients__more-button ${isClientOpen ? "clients__more-button_active": ""}`}
          area-label="Редактировать"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
        <button
          className={`clients__edit-button ${isClientOpen ? "clienst__more-button_active": ""}`}
          area-label="Комментарии к клиенту"
          type="button"
        >
        </button>
      </div>
      <p className={`clients__description ${isClientOpen ? "clients__description_active": ""}`}>{client.description}</p>
    </li>
  );
}

export default Client;
