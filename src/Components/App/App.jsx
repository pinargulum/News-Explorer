import "../App/App.css";
import { useState } from "react";
import Header from "../Header/Header";
import Search from "../Search/Search";
import About from "../About/About";
import SigninModal from "../SigninModal/SigninModal";
import SignupModal from "../SignupModal/SignupModal";
import Footer from "../Footer/Footer";

function App() {
  const [activeModal, setActiveModal] = useState("");
  const signinModal = () => {
    setActiveModal("signin");
  };
  const signupModal = () => {
    setActiveModal("signup");
  };
  const closeActiveModal = () => {
    setActiveModal("");
  };
  return (
    <div className="page">
      <div className="page__content">
        <Header signinModal={signinModal} />
        <Search />
        <About />
        <SigninModal
          isOpen={activeModal === "signin"}
          onClose={closeActiveModal}
          signupModal={signupModal}
        />
        <SignupModal
          isOpen={activeModal === "signup"}
          onClose={closeActiveModal}
          signinModal={signinModal}
        />
        <Footer />
      </div>
    </div>
  );
}
export default App;
