import React, { useState } from "react";
import "../styles/signup.css";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const Signup = () => {
  const formTitles = ["Basic Info", "Contact Info", "DOB", "Login Details"];
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    "firstName": "aaa",
    "lastName": "bbb",
    "email":"aa",
    "phoneNumber":"123",
    "Date":"",
    "Gender":"",
    "userName":"",
    "password":""

  })

  const handleNext = () => {
    setStep((currStep) => Math.min(currStep + 1, formTitles.length - 1));
  };

  const handlePrevious = () => {
    setStep((currStep) => Math.max(currStep - 1, 0));
  };

  const stepDisplay = () => {
    switch (step) {
      case 0:
        return <Step1 formData={formData} setFormData={setFormData}/>;
      case 1:
        return <Step2 formData={formData} setFormData={setFormData}/>;
      case 2:
        return <Step3 formData={formData} setFormData={setFormData}/>;
      case 3:
        return <Step4 formData={formData} setformData={setFormData}/>;
      default:
        return null;
    }
  };
  return (
    <div>
      <div className="container">
        <header>Signup</header>
        <div className="progress-bar">
          {/* <div className="step">
            <p>Name</p>
            <div className="bullet">
              <span>1</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="step">
            <p>Contact</p>
            <div className="bullet">
              <span>2</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="step">
            <p>Birth</p>
            <div className="bullet">
              <span>3</span>
            </div>
            <div className="check fas fa-check"></div>
          </div>
          <div className="step">
            <p>Submit</p>
            <div className="bullet">
              <span>4</span>
            </div>
            <div className="check fas fa-check"></div>
          </div> */}
        </div>
        <div className="form-outer">
          <form action="#">
            <div className={`page slide-page ${step === 1 ? "active" : ""}`}>
              <div className="title">{formTitles[step]}</div>
              {stepDisplay()}
            </div>
          </form>
        </div>
        <footer>
          <div className="field btns">
            <button
              className="prev"
              onClick={handlePrevious}
              disabled={step == 0}
            >
              Previous
            </button>
            <button
              className="next"
              onClick={handleNext}
              disabled={step == formTitles.length - 1}
            >
              Next
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Signup;
