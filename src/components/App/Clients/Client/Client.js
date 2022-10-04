import {useState} from "react";

function Client({client}) {
  const [isClientOpen, setIsClientOpen] = useState(false);
  function handleClick() {
    setIsClientOpen(!isClientOpen);
  }
  return (
    <li className="clients__item">
      <div className="clients__data">
        <p className="clients__email">{client.email}</p>
        <p className="clients__phone">{client.phone}</p>
        <p className="clients__status">{client.status}</p>
        <button
          className={`clienst__edit-button`}
          area-label="Редактировать"
          type="button"
        >
          &#10140;
        </button>
        <button
          className={`clienst__more-button ${isClientOpen ? "clienst__more-button_active": ""}`}
          area-label="Комментарии к клиенту"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
      </div>
      <p className={`clients__description ${isClientOpen ? "clients__description_active": ""}`}>{client.description}</p>
    </li>
  );
}

export default Client;
