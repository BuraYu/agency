import "../sass/style.css";

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
    </section>
  );
}

export default Header;
