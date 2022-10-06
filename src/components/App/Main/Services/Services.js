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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69.png"
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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-1.png"
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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-2.png"
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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-3.png"
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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-4.png"
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
            src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-5.png"
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
