import React, { useState, useEffect } from "react";
import styles from "./ContactFormData.css";
import Table from "./Table/Table";
import { makeAPICall } from "../../Utils/httpCall";
import { contactUsURL } from "../.././Config/url";

const ContactFormData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const contactDataCall = async () => {
      const responseData = await makeAPICall(contactUsURL, "GET");
      // console.log({ responseData });
      setData(responseData);
    };

    contactDataCall();
  }, []);

  return (
    <React.Fragment>
      <div>
        <a className={styles.back_link} href="/contact-us">
          ⬅ Back
        </a>
      </div>

      <div className={styles.fd_title}>
        <h3>Contact Us History</h3>
      </div>

      <main className={styles.container}>
        <div className={styles.wrapper}>
          <Table data={data} rowsPerPage={6} />
        </div>
      </main>
    </React.Fragment>
  );
};

export default ContactFormData;
