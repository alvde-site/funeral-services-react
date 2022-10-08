import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer" id={"footer"}>
      <div className="footer__content">
        <ul className="footer__contacts">
          <li className="footer__item">
            <div className="footer__logo" src="" alt=""></div>
          </li>
          <li className="footer__item">
            <p className="footer__hours">Пн-пт с 00:00 до 00:00</p>
          </li>
          <li className="footer__item">
            <a
              href="mailto:testform@sitepro.by"
              className="footer__email"
            >
              alvde@yandex.ru
            </a>
          </li>
          <li className="footer__item">
            <a href="tel:+375000000000" className="footer__tel">
              +375(00) 000-00-00
            </a>
          </li>
        </ul>
        <nav>
          <h3 className="footer__links-title">Навигация</h3>
          <ul className="footer__links">
            <li>
              <a href="/#services" className="footer__link">
                Каталог
              </a>
            </li>
            <li>
              <a href="/#portfolio" className="footer__link">
                Портфолио
              </a>
            </li>
            <li>
              <a href="/#working" className="footer__link">
                Этапы работы
              </a>
            </li>
            <li>
              <a href="/#faq" className="footer__link">
                Вопрос-ответ
              </a>
            </li>
            <li>
              <a href="/#about" className="footer__link">
                О компании
              </a>
            </li>
            <li>
              <a href="/#footer" className="footer__link">
                Контакты
              </a>
            </li>
            <li>
              <Link to="/signin" className="footer__link">
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <a href="https://github.com/alvde-site" target="_blank" rel="noreferrer" className="footer__copyright">© 2022. Демиденко Александр</a>
    </footer>
  );
}

export default Footer;
