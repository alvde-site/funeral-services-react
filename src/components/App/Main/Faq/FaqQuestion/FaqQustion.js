function FaqQuestion({questionData}) {
  return (
    <li className="faq__question-content">
      <div className="faq__question">
        <p className="faq__question-text">{questionData.question}</p>
        <button
          className="faq__answer-button"
          area-label="Ответ на вопрос"
          type="button"
        >
          &#10140;
        </button>
      </div>
      <p className="faq__answer">{questionData.answer}</p>
    </li>
  );
}

export default FaqQuestion;
