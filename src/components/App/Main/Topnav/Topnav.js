import { useEffect, useRef } from "react";
import { handleTopnavTopPosition } from "../../../../utils/utils";

function Topnav(props) {
  const topnav = useRef();

  useEffect(() => {
    window.addEventListener("scroll", getTopPosition);
  }, [])

  function getTopPosition() {
    const timer = setTimeout(() => {
      handleTopnavTopPosition(topnav.current);
    }, 100);
    return () => clearTimeout(timer);
  }

  function handleToggleBurger() {
    props.onToggleBurger();
  }



  return (
    <section className="topnav" ref={topnav}>
      <nav className="topnav__content">
        <ul className="contacts topnav__contacts">
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
        <div className="topnav__smallscreen-item">
          <a href="mailto:testform@sitepro.by" className="topnav__email">
            alvde@yandex.ru
          </a>
          <a href="tel:+375000000000" className="topnav__tel">
            +375(00) 000-00-00
          </a>
        </div>
        <div className="topnav__links-wrapper">
          <div
            className={`burger-menu topnav__burger ${
              props.isToggleBurger ? "open" : ""
            }`}
            onClick={handleToggleBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul
            className={`topnav__links ${
              props.isToggleBurger ? "topnav__links_opened" : ""
            }`}
          >
            <li>
              <a href="/#services" className="topnav__link" onClick={handleToggleBurger}>
                Каталог
              </a>
            </li>
            <li>
              <a href="/#advantages" className="topnav__link" onClick={handleToggleBurger}>
                Преимущества
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="topnav__link" onClick={handleToggleBurger}>
                Портфолио
              </a>
            </li>
            <li>
              <a href="/#working" className="topnav__link" onClick={handleToggleBurger}>
                Этапы работы
              </a>
            </li>
            <li>
              <a href="/#faq" className="topnav__link" onClick={handleToggleBurger}>
                Вопрос-ответ
              </a>
            </li>
            <li>
              <a href="#about" className="topnav__link" onClick={handleToggleBurger}>
                О компании
              </a>
            </li>
            <li>
              <a href="#id" className="topnav__link" onClick={handleToggleBurger}>
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
}

export default Topnav;
