import MainHeader from "./components/header/header";
import Introducing from "./components/Intro/intro";
import MiddlePart from "./components/inf/Inf";
import ClosingTag from "./components/closing/closing";
import FooterLinksDisplay from "./components/footer/footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <MainHeader/>
      <Introducing/>
      <MiddlePart/>
      <ClosingTag/>
      <FooterLinksDisplay/>
    </div>
  );
};

export default App;
