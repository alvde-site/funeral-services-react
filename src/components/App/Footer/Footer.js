import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content"><ul className="footer__contacts">
        <li className="footer__contacts-item">
          <p className="footer__contacts-hours">Пн-пт с 00:00 до 00:00</p>
        </li>
        <li className="footer__contacts-item">
          <a
            href="mailto:testform@sitepro.by"
            className="footer__contacts-email"
          >
            alvde@yandex.ru
          </a>
        </li>
        <li className="footer__contacts-item">
          <a href="tel:+375000000000" className="footer__contacts-tel">
            +375(00) 000-00-00
          </a>
        </li>
      </ul>
      <nav>
        <ul className="contacts__links">
          <li>
            <a href="/#services" className="contacts__link">
              Каталог
            </a>
          </li>
          <li>
            <a href="/#advantages" className="contacts__link">
              Преимущества
            </a>
          </li>
          <li>
            <a href="/#portfolio" className="contacts__link">
              Портфолио
            </a>
          </li>
          <li>
            <a href="/#working" className="contacts__link">
              Этапы работы
            </a>
          </li>
          <li>
            <a href="/#faq" className="contacts__link">
              Вопрос-ответ
            </a>
          </li>
          <li>
            <a href="#id" className="contacts__link">
              О компании
            </a>
          </li>
          <li>
            <a href="#id" className="contacts__link">
              Контакты
            </a>
          </li>
          <li>
            <Link to="/signin" className="contacts__link">
              Войти
            </Link>
          </li>
        </ul>
      </nav></div>
      <p class="footer__copyright">© 2020. Демиденко Александр</p>
    </footer>
  );
}

export default Footer;
