import {useState} from "react";

function Client({client}) {
  const [isQuestionOpen, setIsQuestionOpen] = useState(false);
  function handleClick() {
    setIsQuestionOpen(!isQuestionOpen);
  }
  return (
    <li className="faq__question-content">
      <div className="faq__question">
        <p className={`faq__question-text ${isQuestionOpen ? "faq__question-text_active": ""}`}>{client.email}</p>
        <button
          className={`faq__answer-button ${isQuestionOpen ? "faq__answer-button_active": ""}`}
          area-label="Ответ на вопрос"
          type="button"
          onClick={handleClick}
        >
          &#10140;
        </button>
      </div>
      <p className={`faq__answer ${isQuestionOpen ? "faq__answer_active": ""}`}>{client.phone}</p>
    </li>
  );
}

export default Client;
