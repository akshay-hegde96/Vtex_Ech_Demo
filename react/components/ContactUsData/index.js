import React, { useState } from "react";
import { makeAPICall } from "../../Utils/httpCall";
import { contactUsURL } from "../.././Config/url";
import styles from "./ContactUsData.css";

const ContactUsData = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const contactData = async () => {
    const resData = await makeAPICall(contactUsURL, "GET");
    //console.log({ resData });
    setName(resData[resData.length - 1].firstName);
    setEmail(resData[resData.length - 1].createdBy_USER.Login);

    setShow(true);
  };
  const display = (
    <p>
      Thanks {name}, we will get in touch with you at "{email}".
    </p>
  );

  return (
    <div className={styles.container}>
      <button onClick={() => contactData()} className={styles.button}>
        View Details
      </button>
      {show && <div className={styles.feedback}>{display}</div>}
    </div>
  );
};

export default ContactUsData;
