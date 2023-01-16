import counseling from "../../../../images/counseling.png";
import cemetery from "../../../../images/cemetery.png";
import church from "../../../../images/church.png";
import angel from "../../../../images/angel.png";

function Working() {
  return (
    <section className="working" id={"working"}>
      <h1 className="working__title">Как мы работаем</h1>
      <ul className="working__content">
        <li className="working__item">
          <img
            className="working__icon"
            src={counseling}
            alt="Заявка"
          ></img>
          <h3 className="working__item-title">ШАГ 1</h3>
          <p className="working__item-subtitle">Отправьте вашу заявку</p>
          <p className="working__item-desc">
            Выезд специалиста на замеры при необходимости
          </p>
        </li>
        <li className="working__item">
          <img
            className="working__icon"
            src={cemetery}
            alt="Заявка"
          ></img>
          <h3 className="working__item-title">ШАГ 2</h3>
          <p className="working__item-subtitle">Выбор памятника</p>
          <p className="working__item-desc">
            Заключение договора. Внесение предоплаты
          </p>
        </li>
        <li className="working__item">
          <img
            className="working__icon"
            src={church}
            alt="Заявка"
          ></img>
          <h3 className="working__item-title">ШАГ 3</h3>
          <p className="working__item-subtitle">Изготовление</p>
          <p className="working__item-desc">Монтаж в оговоренные сроки</p>
        </li>
        <li className="working__item">
          <img
            className="working__icon"
            src={angel}
            alt="Заявка"
          ></img>
          <h3 className="working__item-title">ШАГ 4</h3>
          <p className="working__item-subtitle">Прием изделия</p>
          <p className="working__item-desc">Подписание акта и гарантии</p>
        </li>
      </ul>
    </section>
  );
}

export default Working;
