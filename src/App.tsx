import MainHeader from "./components/header/header";
import Introducing from "./components/Intro/intro";
import MiddlePart from "./components/inf/Inf";
import Closing from "./components/closing/closing";
import Footer from "./components/footer/footer";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <MainHeader/>
      <Introducing/>
      <MiddlePart/>
      <Closing
        title="Free, open, simple"
        content="  Blogr is a free and open source application backed by a large community of helpful developers. It supports 
  features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, 
  and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        tooling="Powerful Tooling"
        toolingContent="  Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
        capable of producing even the most complicated sites."
      />
      <Footer
        links={[
          { text: "Home", href: "#" },
          { text: "Product", 
            href: "#" },
          { text: "Company", href: "#" },
          { text: "Contact", href: "#" },
        ]}
      />
    </div>
  );
};

export default App;
