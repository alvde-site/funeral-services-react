function Header(props) {
  function handleOpenFeedback() {
    props.onOpenFeedback();
  }
  return (
    <header className="header" id="header">
      <div className="header__logo">
        <div className="header__logo-image"></div>
        <a href="#!" className="header__logo-link">
          Ритуальное агентство
        </a>
      </div>
      <ul className="contacts">
        <li className="contacts__item">
          <h3 className="contacts__title">Режим работы:</h3>
          <p className="contacts__hours">Пн-пт с 00:00 до 00:00</p>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Почта:</h3>
          <a href="mailto:testform@sitepro.by" className="contacts__email">
            alvde@yandex.ru
          </a>
        </li>
        <li className="contacts__item">
          <h3 className="contacts__title">Телефон:</h3>
          <a href="tel:+375000000000" className="contacts__tel">
            +375(00) 000-00-00
          </a>
        </li>
      </ul>
      <button className="header__feedback" onClick={handleOpenFeedback}>Заказать звонок</button>
    </header>
  );
}

export default Header;
