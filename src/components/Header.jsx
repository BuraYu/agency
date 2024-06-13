import "../sass/style.css";
import arrowDown from "../img/icon-arrow-down.svg";

function Header() {
  return (
    <section className="hero">
      <div className="header-bar">
        <span className="logo">sunnyside</span>
        <nav className="navigation">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Projects</a>
            </li>
            <li className="contact-list">
              <a href="#" className="contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="title">
        <h1>WE ARE CREATIVES</h1>
        <img src={arrowDown} alt="an arrow pointing down" />
      </div>
    </section>
  );
}

export default Header;
