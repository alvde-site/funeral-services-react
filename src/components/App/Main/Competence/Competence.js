function Competence() {
  return (
    <section className="competence">
      <ul className="competence__content">
        <li className="competence__card">
          <img className="competence__icon" src="https://0622203.demo1.siteimperium.com/images/design/bless-1.png" alt="Полный комплекс услуг" />
          <div className="competence__desc">
            <h3 className="competence__title">Полный комплекс услуг</h3>
            <p className="compentence__text">Берем на себя все заботы с доставкой, установкой и благоустройством территории</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src="https://0622203.demo1.siteimperium.com/images/design/graveyard-1.png" alt="Бесплатный дизайн-макет" />
          <div className="competence__desc">
            <h3 className="competence__title">Бесплатный дизайн-макет</h3>
            <p className="compentence__text">Создаем макет памятника с расположением портрета на камне, подбираем шрифты, надписи, оформление</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src="https://0622203.demo1.siteimperium.com/images/design/location-1.png" alt="Работаем в регионах" />
          <div className="competence__desc">
            <h3 className="competence__title">Работаем в регионах</h3>
            <p className="compentence__text"><div class="sppb-addon-text">Принимаем заказы по Зельвенскому, Мостовскому, Свислочскому районах</div></p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Competence;
