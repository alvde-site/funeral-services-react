import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/signin" style={{color: "white", fontSize: "25px"}}>Войти</Link>
    </footer>
  );
}

export default Footer;
