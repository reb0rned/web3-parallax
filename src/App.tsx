import Hero from "./components/Hero/Hero";
import Partners from "./components/Partners/Partners";
import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import Background from "./components/Background/Background";

function App() {
  return (
    <div className="main-content">
      <Navbar />
      <Hero />
      <Partners />
      <Background />
      <div className="showcase">
        <h2>Showcase</h2>
      </div>
    </div>
  );
}

export default App;
