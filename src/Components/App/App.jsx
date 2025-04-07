import "../App/App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import About from "../About/About";
import Footer from "../Footer/Footer"

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Search />
        <About />
        <Footer />
      </div>
    </div>
  );
}
export default App;
