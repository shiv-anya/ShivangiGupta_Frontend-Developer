import logo from "../assets/spacex-logo.png";
import classes from "./Banner.module.css";

const Banner = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.navbar}>
        <img src={logo} alt="space x logo" />
      </nav>
      <div>
        <h1>Making Dreams Reality</h1>
        <p>
          SpaceX dream is to build a fully reusable transportation system
          designed to carry both crew and cargo to Earth orbit, the Moon, Mars
          and beyond.
        </p>
        <button>Get Started</button>
      </div>
    </header>
  );
};

export default Banner;
