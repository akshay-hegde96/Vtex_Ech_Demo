import React, { useState, useEffect } from 'react'
import { makeAPICall } from "../../Utils/httpCall";

const ContactUsForm = ({ Heading, Name, Email, PhoneNumber, Question, Subject, RadioUs, Checkbox, Submit, Dropdown }) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [question, setQuestion] = useState("");
    const [subject, setSubject] = useState("");
    const [checkbox, setCheckbox] = useState([]);
    const [radio, setRadio] = useState([]);
    const [dropdown, setDropdown] = useState([]);
    const [applicationSubmission, setApplicationSubmission] = useState("");
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        question: "",
        subject: ""
    });

    // Data Patterns
    const emailpattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,20}[\.][a-z]{2,5}/g;
    const emailresult = emailpattern.test(email);
    const phoneNumberpattern = /[0-9]{3}-[0-9]{2}-[0-9]{3}/g;
    const phoneNumberresult = phoneNumberpattern.test(phoneNumber);

    // Error Messages State
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [questionError, setQuestionError] = useState("");
    const [subjectError, setSubjectError] = useState("");
    const [checkboxError, setCheckboxError] = useState("");
    const [radioError, setRadioError] = useState("");
    const [dropdownError, setDropdownError] = useState("");

    // Event Handler
    const handleNameChange = (e) => { setName(e.target.value); };
    const handleEmailChange = (e) => { setEmail(e.target.value); };
    const handlePhoneNumberChange = (e) => { setPhoneNumber(e.target.value); };
    const handlequestionChange = (e) => { setQuestion(e.target.value); };
    const handleSubjectChange = (e) => { setSubject(e.target.value); };
    const handleCheckboxChange = (e) => { setCheckbox(e.target.value); };
    const handleRadioChange = (e) => { setRadio(e.target.value); };
    const handleDropdownChange = (e) => { setDropdown(e.target.value); };
    const handleSubmit = async (e) => {
        if (name.length == 0) { setNameError(" Name is required and should contain alphabets only."); }
        else if (emailresult == false) { setEmailError("Please enter valid email."); }
        else if (phoneNumberresult == false) { setPhoneNumberError("Please enter a valid PhoneNumber."); }
        else if (subject == "") { setSubjectError("Subject is required."); }
        else if (question == "") { setQuestionError("Question is required."); }
        else if (checkbox == "") { setCheckboxError("Select atleast one checkbox."); }
        else if (radio == "") { setRadioError("Select atleast one radio button."); }
        else if (dropdown == "") { setDropdownError("Select atleast one option from dropdown."); }
        else {
            data.name = name;
            data.question = question;
            data.subject = subject;
            data.email = email;
            data.phone = phoneNumber;

            console.log("Followings are selected : ");
            console.log(dropdown);
            console.log(radio);
            console.log(checkbox);

            const putData = await makeAPICall("api/dataentities/ContactUs/schemas/user", "PUT", data);
            console.log({ putData });

            //const resData = await makeAPICall("api/dataentities/ContactUs/search?_fields=_all&_schema=user", "GET");
            //console.log({ resData });

            setApplicationSubmission(name + ", Your request is submitted successfully. We will contact you soon.");
        }
    };

    return (
        <div>
            <Heading />
            <Name onChange={handleNameChange} />
            <span style={{ color: "darkred" }}>{nameError}</span>
            <Email onChange={handleEmailChange} />
            <span style={{ color: "darkred" }}>{emailError}</span>
            <PhoneNumber onChange={handlePhoneNumberChange} />
            <span style={{ color: "darkred" }}>{phoneNumberError}</span>
            <Subject onChange={handleSubjectChange} />
            <span style={{ color: "darkred" }}>{subjectError}</span>
            <Question onChange={handlequestionChange} />
            <span style={{ color: "darkred" }}>{questionError}</span>
            <Dropdown onChange={handleDropdownChange} />
            <span style={{ color: "darkred" }}>{dropdownError}</span>
            <RadioUs onClick={handleRadioChange} />
            <span style={{ color: "darkred" }}>{radioError}</span>
            <Checkbox onClick={handleCheckboxChange} />
            <span style={{ color: "darkred" }}>{checkboxError}</span>
            <Submit onClick={handleSubmit} />
            <span style={{ color: "darkred" }}>{applicationSubmission}</span>
        </div>
    )
}

export default ContactUsForm