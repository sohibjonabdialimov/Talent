import "./App.css";
import Blog from "./components/blog/Blog";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Parthners from "./components/parthners/Parthners";
import Specialist from "./components/specialist/Specialist";
import Talent from "./components/talent/Talent";

function App() {
  return (
    <>
      <div className="main">
        <div className="home">
          <Header />
          <Hero />
        </div>
        <Talent />
        <Specialist />
        <Experience />
        <Blog />
        <Parthners />
        <Work />
        <Footer />
      </div>
    </>
  )
}

export default App;
