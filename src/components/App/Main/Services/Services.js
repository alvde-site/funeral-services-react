import rectangle from "../../../../images/rectangle.png";
import rectangle1 from "../../../../images/rectangle1.png";
import rectangle2 from "../../../../images/rectangle2.png";
import rectangle3 from "../../../../images/rectangle3.png";
import rectangle4 from "../../../../images/rectangle4.png";
import rectangle5 from "../../../../images/rectangle5.png";

function Services(props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }
  return (
    <section className="services" id={"services"}>
      <h2 className="services__title">Каталог памятников</h2>
      <p className="services__subtitle">Поможем вам с любой задачей</p>
      <ul className="services__catalog">
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle}
            alt="Вертикальные"
          ></img>
          <h3 className="services__card-title">Вертикальные</h3>
          <p className="services__desc">
            Вертикальные памятники - классический вариант могильных надгробий
          </p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle1}
            alt="Горизонтальные"
          ></img>
          <h3 className="services__card-title">Горизонтальные</h3>
          <p className="services__desc">
            Чаще всего устанавливается для двух, трех и более надгробий
          </p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle2}
            alt="С крестом"
          ></img>
          <h3 className="services__card-title">С крестом</h3>
          <p className="services__desc">
            Используются разные виды крестов, которые имеют разный смысл
          </p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle3}
            alt="Двойные"
          ></img>
          <h3 className="services__card-title">Двойные</h3>
          <p className="services__desc">
            Двойной памятник на могилу - для парных и семейных захоронений
          </p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle4}
            alt="Комбинированные"
          ></img>
          <h3 className="services__card-title">Комбинированные</h3>
          <p className="services__desc">
            Изготавливаются из 2-х или более видов камня
          </p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
        <li className="services__card">
          <img
            className="services__image"
            src={rectangle5}
            alt="Вертикальные"
          ></img>
          <h3 className="services__card-title">В форме сердца</h3>
          <p className="services__desc">Красивое выражение любви и скорби</p>
          <p className="services__price-text">
            от <span className="service__price">300 BYN</span>
          </p>
          <button className="services__feedback" onClick={handleOpenFeedback}>
            Заказать
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Services;
