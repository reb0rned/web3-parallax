import "./Hero.css";
import GradientBorderButton from "../GradientBorderButton/GradientBorderButton";

const Hero = () => (
  <header className="hero">
    <div className="main-text">
      <img
        src="/logos/main-text.png"
        alt="A new economic primitive for funding decentralized AI"
      />
    </div>
    <p className="subtitle">
      We track, rank and pay for the best open source decentralized LLMs to
      compete against OpenAI
    </p>
    <div className="hero-actions">
      <GradientBorderButton className="btn-lg">
        Buy Salt AI
      </GradientBorderButton>

      <button className="secondary-btn">Try Now</button>
    </div>
  </header>
);

export default Hero;
