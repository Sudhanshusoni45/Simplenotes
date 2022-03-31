import { heroimage } from "../../assests";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <>
      <div className="container">
        <div className="intro-container">
          <h1>SimpleNotes</h1>
          <h2>Meet your Simple note taking App</h2>
          <p>
            Manage your daily tasks and workflow in a simple way and boost your
            efficiency without any efforts.
          </p>
          <button>Join Now</button>
          <small>Already have an account?</small>
        </div>
        <img src={heroimage} alt="Girl taking Notes" />;
      </div>
    </>
  );
};

export { LandingPage };
