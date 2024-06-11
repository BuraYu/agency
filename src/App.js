import "./sass/style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Hero section */}
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
      </div>
    </div>
  );
}

export default App;
