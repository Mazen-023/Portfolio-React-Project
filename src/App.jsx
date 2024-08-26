import Header from "./Components/1-Header/header";
import Hero from "./Components/2-Hero/Hero";
import About from "./Components/3-About/About";
import Skills from "./Components/4-Skills/Skills";
import Prortfolio from "./Components/5-Portfolio/Portfolio";
import Footer from "./Components/6-Footer/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Prortfolio />
      <Footer />
    </div>
  );
}

export default App;
