import { Link } from "react-router-dom";
import { heroimage } from "../../assests";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="landing-page-container">
        <div className="intro-container">
          <h1>SimpleNotes</h1>
          <div>
            <h2>Meet your Simple </h2>
            <h2> Note taking App</h2>
            <p className="intro-detail">
              Manage your daily tasks and workflow <br /> in a simple way and
              boost your efficiency <br /> without any efforts.
            </p>
          </div>
          <div className="primary-cta">
            <Link to={"signup"}>
              <button className="btn">Join Now</button>
            </Link>
            <Link to={"login"}>Already have an account?</Link>
          </div>
        </div>
        <img src={heroimage} alt="Girl taking Notes" className="hero-image" />
      </div>
    </>
  );
};

export { LandingPage };
