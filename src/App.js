import "./sass/style.css";
import Header from "./components/Header";
import ContentSection from "./components/ContentSection";

function App() {
  return (
    <div className="App">
      <div className="container">
        {/* Hero section */}
        <Header />
        <ContentSection />
      </div>
    </div>
  );
}

export default App;
