import GradientBorderButton from "../GradientBorderButton/GradientBorderButton";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-content">
      <a href="#how-it-works" className="navbar-link">
        How It Works
      </a>
      <GradientBorderButton className="btn-sm">
        Buy Salt AI
      </GradientBorderButton>
    </div>
  </nav>
);

export default Navbar;
