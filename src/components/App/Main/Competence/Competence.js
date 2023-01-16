import bless from "../../../../images/bless.png";
import graveyard from "../../../../images/graveyard.png";
import location from "../../../../images/location.png";

function Competence() {
  return (
    <section className="competence">
      <ul className="competence__content">
        <li className="competence__card">
          <img className="competence__icon" src={bless} alt="Полный комплекс услуг" />
          <div className="competence__desc">
            <h3 className="competence__title">Полный комплекс услуг</h3>
            <p className="compentence__text">Берем на себя все заботы с доставкой, установкой и благоустройством территории</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src={graveyard} alt="Бесплатный дизайн-макет" />
          <div className="competence__desc">
            <h3 className="competence__title">Бесплатный дизайн-макет</h3>
            <p className="compentence__text">Создаем макет памятника с расположением портрета на камне, подбираем шрифты, надписи, оформление</p>
          </div>
        </li>
        <li className="competence__card">
          <img className="competence__icon" src={location} alt="Работаем в регионах" />
          <div className="competence__desc">
            <h3 className="competence__title">Работаем в регионах</h3>
            <p className="compentence__text">Принимаем заказы по Зельвенскому, Мостовскому, Свислочскому районах</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Competence;
