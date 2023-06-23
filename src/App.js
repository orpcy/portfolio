import Header from "./Components/Header";
import "./App.css";
import Socials from "./Components/Socials";
import { BsDashLg } from "react-icons/bs";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

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
              Engineer and UI/UX Designer, weaving innovation into every line of
              code and pixel of design. With a passion for seamless user
              experiences and sleek interfaces, I bring ideas to life with
              creativity and technical finesse. Let's create something
              extraordinary together.
            </p>
          </div>
          <div className="view-start">
            <a href="#web_projects">VIEW MY PROJECTS</a>
            <a href="#contact">START A PROJECT</a>
          </div>
        </div>

        <Skills />
        <Projects />
        <Contact />
      </div>
      <Footer />

      <Socials />
    </div>
  );
}

export default App;
