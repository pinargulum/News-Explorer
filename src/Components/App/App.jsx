import "../App/App.css";
import Header from "../Header/Header";
import Search from "../Search/Search";
import About from "../About/About";

function App() {
  return (
    <div className="page">
      <div className="page__content">
        <Header />
        <Search />
        <About />
      </div>
    </div>
  );
}
export default App;
