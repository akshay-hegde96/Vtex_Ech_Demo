import React, { useState } from "react";
import styles from "./MultiStepForm.css";
const MultiStepForm = ({
  MultiFirstName,
  MultiLastName,
  MultiNext,
  MultiPrev,
  MultiSubmit,
  MultiEmail,
  MultiNumber,
  MultiPassword,
}) => {
  const [currentStep, setCurrentStep] = useState(1);

  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    pwd: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const Step1 = () => {
    if (currentStep !== 1) {
      return null;
    }
    return (
      <div>
        <MultiFirstName
          name="firstName"
          value={inputs.firstName}
          onChange={handleChange}
        />
        <MultiLastName
          name="lastName"
          value={inputs.lastName}
          onChange={handleChange}
        />
      </div>
    );
  };
  const Step2 = () => {
    if (currentStep !== 2) {
      return null;
    }
    return (
      <div>
        <MultiEmail name="email" value={inputs.email} onChange={handleChange} />
        <MultiNumber
          name="number"
          value={inputs.number}
          onChange={handleChange}
        />
      </div>
    );
  };
  const Step3 = () => {
    if (currentStep !== 3) {
      return null;
    }
    return (
      <div>
        <MultiPassword
          name="pwd"
          value={inputs.password}
          onChange={handleChange}
        />
      </div>
    );
  };

  // =================Buttons=======
  const previousButton = () => {
    if (currentStep !== 1) {
      return <MultiPrev onClick={() => setCurrentStep(currentStep - 1)} />;
    }
    return null;
  };

  const nextButton = () => {
    if (currentStep < 3) {
      return <MultiNext onClick={() => setCurrentStep(currentStep + 1)} />;
    }
    return null;
  };
  const submitButton = () => {
    if (currentStep == 3) {
      return (
        <MultiSubmit
          onClick={() =>
            console.log({
              FirstName: inputs.firstName,
              LastName: inputs.lastName,
              Email: inputs.email,
              PhoneNumber: inputs.number,
              Password: inputs.pwd,
            })
          }
        />
      );
    }
    return null;
  };
  //   =======================================
  return (
    <React.Fragment>
      <div className={styles.multiFormContainer}>
        <h3>Multi Step Form</h3>
        <h4>Step {currentStep}</h4>

        <div>
          <form>
            {Step1()}
            {Step2()}
            {Step3()}
            <div className={styles.buttonAlignments}>
              {previousButton()}
              {nextButton()}
              {submitButton()}
            </div>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MultiStepForm;
