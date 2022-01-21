import React, { useState, useEffect } from "react";
import styles from "./vipform.css";
import { makeAPICall } from "../../Utils/httpCall";
const FormHandles = ({
  FirstName,
  LastName,
  Email,
  Year,
  Model,
  Drive,
  Vin,
  Trim,
  Password,
  Confirmpw,
  Vipcheckbox,
  Formbutton,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLasttName] = useState("");
  const [email, setEmail] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [vin, setVin] = useState("");
  const [driveLine, setDrive] = useState("");
  const [trimLevel, setTrim] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpw] = useState("");
  const [nissanAgreement, setNissanAgreement] = useState(false);

  // state for api
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    year: "",
    model: "",
    driveLine: "",
    trimLevel: "",
    vin: "",
    password: "",
    confirmPassword: "",
    nissanAgreement: "",
  });
  //   Error messages
  const [firstNameError, setfirstNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [yearError, setYearError] = useState("");
  const [modelError, setModelError] = useState("");
  const [vinError, setVinError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confpwdError, setConfpwdError] = useState("");
  const [agreementError, setAgreementError] = useState("");

  // Regex patterns
  const alphabetPattern = /^[A-Za-z]+$/;
  const alphabetResult = alphabetPattern.test(firstName);

  const emailPattern =
    /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,15}[\.][a-z]{2,5}/g;
  const emailResult = emailPattern.test(email);

  const yearPattern = /^[12][0-9]{3}$/;
  const yearResult = yearPattern.test(year);

  // ==================================================

  const handleLogin = async () => {
    if (alphabetResult == false) {
      setfirstNameError(
        "First Name is required and should contain alphabets only."
      );
    } else if (emailResult == false) {
      setEmailError("Please enter valid email.");
    } else if (yearResult == false) {
      setYearError("Please enter a valid year.");
    } else if (model == "") {
      setModelError("Model is required.");
    } else if (vin == "") {
      setVinError("VIN is required.");
    } else if (password == "") {
      setPasswordError("Password is required.");
    } else if (confirmPassword !== password) {
      setConfpwdError("Passwords not matching.");
    } else if (nissanAgreement == false) {
      setAgreementError("Please accept the agreement to continue");
    }
    // else {
    //   console.log({
    //     firstName: firstName,
    //     lastName: lastName,
    //     email: email,
    //     model: model,
    //     year: year,
    //     vin: vin,
    //     driveLine: driveLine,
    //     trimLevel: trimLevel,
    //     password: password,
    //     confirmPassword: confirmPassword,
    //     nissanAgreement: nissanAgreement,
    //   });
    // }
    else {
      data.firstName = firstName;
      data.lastName = lastName;
      data.email = email;
      data.year = year;
      data.model = model;
      data.driveLine = driveLine;
      data.trimLevel = trimLevel;
      data.vin = vin;
      data.password = password;
      data.confirmPassword = confirmPassword;
      data.nissanAgreement = nissanAgreement;

      const submittedData = await makeAPICall(
        // "api/dataentities/NV/schemas/person",
        "api/dataentities/NV/documents?_schema=person",
        "PUT",
        data
      );
      console.log({ submittedData });

      // const resData = await makeAPICall(
      //   "api/dataentities/NV/search?_fields=_all&_schema=person",
      //   "GET"
      // );
      // console.log({ resData });
    }
  };

  return (
    <form>
      <h3>Don't have an account? Sign Up Now</h3>

      <h4>User Information</h4>
      <div className={styles.formRow}>
        <div className={styles.formColumn}>
          <FirstName onChange={(e) => setFirstName(e.target.value)} />
          <span style={{ color: "red" }}>{firstNameError}</span>
        </div>
        <div className={styles.formColumn}>
          <LastName onChange={(e) => setLasttName(e.target.value)} />
        </div>
      </div>

      <Email onChange={(e) => setEmail(e.target.value)} />
      <span style={{ color: "red" }}>{emailError}</span>

      <h4>Vehicle Information</h4>
      <div className={styles.formRow}>
        <div className={styles.formColumn}>
          <Year onChange={(e) => setYear(e.target.value)} />
          <span style={{ color: "red" }}>{yearError}</span>
        </div>

        <div className={styles.formColumn}>
          <Model onChange={(e) => setModel(e.target.value)} />
          <span style={{ color: "red" }}>{modelError}</span>
        </div>
      </div>
      <div className={styles.formRow}>
        <div className={styles.formColumn}>
          <Drive onChange={(e) => setDrive(e.target.value)} />
        </div>
        <div className={styles.formColumn}>
          <Trim onChange={(e) => setTrim(e.target.value)} />
        </div>
      </div>
      <div>
        <Vin onChange={(e) => setVin(e.target.value)} />
        <span style={{ color: "red" }}>{vinError}</span>
      </div>
      <h4>Create Password</h4>
      <div className={styles.formRow}>
        <div className={styles.formColumn}>
          <Password onChange={(e) => setPassword(e.target.value)} />
          <span style={{ color: "red" }}>{passwordError}</span>
        </div>

        <div className={styles.formColumn}>
          <Confirmpw onChange={(e) => setConfirmpw(e.target.value)} />
          <span style={{ color: "red" }}>{confpwdError}</span>
        </div>
      </div>
      <div className={styles.formRow}>
        {/* <Vipcheckbox onChange={(e) =>setNissanAgreement(e.target.checked)}/> */}
        <input
          type="checkbox"
          onChange={(e) => setNissanAgreement(e.target.checked)}
        />
        <label>
          "By clicking Submit below, I authorize Nissan, its affiliates, and its
          dealers to contact me by mail or email for marketing purposes. I
          understand that my consent is not a condition to purchase any product
          or service and that I may revoke my consent at any time. Please visit
          Nissans Privacy Policy for information about how we collect, use and
          protect your data."
        </label>
      </div>
      <div style={{ color: "red" }}>{agreementError}</div>
      <div className={styles.formButton}>
        <Formbutton onClick={handleLogin} />
      </div>
    </form>
  );
};
export default FormHandles;
