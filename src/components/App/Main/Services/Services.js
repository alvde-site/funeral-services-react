function Services (props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }
  return (<section className="services">
    <h2 className="services__title">Каталог памятников</h2>
    <p className="services__subtitle">Поможем вам с любой задачей</p>
    <ul className="service__catalog">
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69.png" alt="Вертикальные"></img>
        <h3 className="service__card-title">Вертикальные</h3>
        <p className="service__card">Вертикальные памятники - классический вариант могильных надгробий</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-1.png" alt="Горизонтальные"></img>
        <h3 className="service__card-title">Горизонтальные</h3>
        <p className="service__card">Чаще всего устанавливается для двух, трех и более надгробий</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-2.png" alt="С крестом"></img>
        <h3 className="service__card-title">С крестом</h3>
        <p className="service__card">Используются разные виды крестов, которые имеют разный смысл</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-3.png" alt="Двойные"></img>
        <h3 className="service__card-title">Двойные</h3>
        <p className="service__card">Двойной памятник на могилу - для парных  и семейных захоронений</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-4.png" alt="Комбинированные"></img>
        <h3 className="service__card-title">Комбинированные</h3>
        <p className="service__card">Изготавливаются из 2-х или более видов камня</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
      <li className="service__card">
        <img className="service__image" src="https://0622203.demo1.siteimperium.com/images/2021/04/28/rectangle-69-5.png" alt="Вертикальные"></img>
        <h3 className="service__card-title">В форме сердца</h3>
        <p className="service__card">Красивое выражение любви и скорби</p>
        <p className="service__price-text">от <span className="service__price">300 BYN</span></p>
        <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
      </li>
    </ul>
  </section>)
}

export default Services;
