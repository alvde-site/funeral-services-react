function Advertisement() {
  function handleOpenFeedback() {
    console.log("Открыть форму")
  }

  return (
    <section className="advertisement">
      <div className="advertisement__content">
        <h1 className="advertisement__title">
          Изготовление и установка памятников в Могилеве
        </h1>
        <p className="advertisement__subtitle">За 7 дней от 250 BYN</p>
        <div className="advertisement__info">
          <button
            className="advertisement__feedback"
            onClick={handleOpenFeedback}
          >
            Заказать
          </button>
          <h2 className="advertisemet__info-title">
            Изделия из камня любой сложности
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Advertisement;
