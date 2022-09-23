function Faq() {
  return (
    <section className="faq">
      <h1 className="faq__title">Часто задаваемые вопросы</h1>
      <p className="faq__subtitle>">Ответы на ваши часто задаваемые вопросы</p>
      <div className="faq__content">
        <ul className="faq__questions">
          <li className="faq__question-content">
            <div className="faq__question">
              <p className="faq__question">Как происходит оплата?</p>
              <button
                className="faq__answer-button"
                area-label="Ответ на вопрос"
              ></button>
            </div>
            <p className="faq__answer">
              Оплата делится на две части, первая – предоплата, вносится при
              заключении договора, и вторая – доплата вносится после выполнения
              монтажных работ, либо по приему готового изделия в офисе.
            </p>
          </li>
          <li className="faq__question-content">
            <div className="faq__question">
              <p className="faq__question">Как долго стоит памятник?</p>
              <button
                className="faq__answer-button"
                area-label="Ответ на вопрос"
              ></button>
            </div>
            <p className="faq__answer">
              Памятники из гранита отличаются своей долговечностью, и даже в
              наших суровых погодных условиях сохраняют свои свойства и формы
              веками.
            </p>
          </li>
          <li className="faq__question-content">
            <div className="faq__question">
              <p className="faq__question">
                Какой материал выбрать для памятника - гранит или мрамор?
              </p>
              <button
                className="faq__answer-button"
                area-label="Ответ на вопрос"
              ></button>
            </div>
            <p className="faq__answer">
              Гранит более практичен и долговечен, так же требует меньшего ухода
            </p>
          </li>
          <li className="faq__question-content">
            <div className="faq__question">
              <p className="faq__question">
                Могу ли я самостоятельно установить купленнный у вас памятник?
              </p>
              <button
                className="faq__answer-button"
                area-label="Ответ на вопрос"
              ></button>
            </div>
            <p className="faq__answer">
              Да, конечно, но стоит помнить о том, что гранит имеет высокую
              плотность, следовательно – большой вес. Вес комплекта гранитного
              памятника около 220 кг
            </p>
          </li>
          <li className="faq__question-content">
            <div className="faq__question">
              <p className="faq__question">
                Даете ли вы гарантию на гранитные памятники?
              </p>
              <button
                className="faq__answer-button"
                area-label="Ответ на вопрос"
              ></button>
            </div>
            <p className="faq__answer">
              Да, гарантия на гранитные памятники в нашей мастерской составляет
              20 лет
            </p>
          </li>
        </ul>
        <button className="faq__feedback-button">Заказать</button>
      </div>
    </section>
  );
}

export default Faq;
