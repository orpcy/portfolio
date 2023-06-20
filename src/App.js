import Header from "./Components/Header";
import "./App.css";
import Socials from "./Components/Socials";
import { BsDashLg } from "react-icons/bs";
import Skills from "./Components/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="intro">
          <h6>Hello there, I am</h6>
          <h2>SOFIYULLAHI JAMIU</h2>
          <h4>Software Engineer and UI/UX Designer</h4>
          <div className="more-intro">
            <BsDashLg size={26} />
            <p>
              In a digital realm where imagination takes shape, I am a Software
              Developer and UI/UX Designer, weaving innovation into every line
              of code and pixel of design. With a passion for seamless user
              experiences and sleek interfaces, I bring ideas to life with
              creativity and technical finesse. Let's create something
              extraordinary together.
            </p>
          </div>
          <div className="view-start">
            <button>VIEW MY PROJECTS</button>
            <button>START A PROJECT</button>
          </div>
        </div>

        <div>
          <Skills />
        </div>
      </div>

      <Socials />
    </div>
  );
}

export default App;
