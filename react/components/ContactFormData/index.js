import React, { useEffect, useState } from "react";
import { makeAPICall } from "../../Utils/httpCall";
import { contactUsURL } from "../.././Config/url";
import styles from "./ContactFormData.css";

const ContactFormData = () => {
  const [list, setList] = useState([]);
  const [data, setData] = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: { streetNumber: 0, streetAddress: "", streetType: "" },
    createdBy_USER: { Login: "" },
    agreement: false,
  });
  const [showdetails, setShowdetails] = useState(false);
  useEffect(() => {
    const contactDataCall = async () => {
      const responseData = await makeAPICall(contactUsURL, "GET");
      //console.log({ responseData });
      setList(responseData);
    };

    contactDataCall();
  }, []);

  const showDetailsHandler = (userData) => {
    //console.log(userData);
    setData(userData);
    setShowdetails(!showdetails);
  };

  const details = (
    <div className={styles.detail}>
      <p> Name : {`${data.firstName} ${data.lastName}`}</p>
      <p>
        Address :{" "}
        {`street no. ${data.address.streetNumber}, ${data.address.streetAddress}, ${data.address.streetType} `}
      </p>
      <p>UserId : {data.id}</p>
      <p>Email : {data.createdBy_USER.Login}</p>
      <p>Agreement : {data.agreement ? "Yes" : "No"}</p>
    </div>
  );

  return (
    <div style={{ marginBottom: "1rem" }}>
      <div className={styles.fd_title}>
        <h3>Contact-Us History</h3>
      </div>
      <div>
        {list.map((user, i) => {
          let userData = user;
          return (
            <div key={user.id} className={styles.container}>
              <div
                className={styles.card}
                onClick={() => showDetailsHandler(userData)}
              >
                <p style={{ margin: "13px" }}>{`${i + 1}. ${user.firstName} ${
                  user.lastName
                }`}</p>
              </div>
              {showdetails && user.id === data.id && details}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ContactFormData;
