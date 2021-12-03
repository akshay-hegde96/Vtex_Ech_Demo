import React, { useState, useEffect } from "react";
import styles from "./Dealer.css";
import location_image from "../../../../assets/location.png";
import { makeAPICall } from "../../../Utils/httpCall";
import { dealersListURL } from "../../../Config/url";

const Dealer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getdealers = async () => {
      const responseData = await makeAPICall(dealersListURL, "GET", "0-100");
      setData(responseData);
    };
    getdealers();
  }, []);

  const list = data.map((dealer, i) => {
    return (
      <div key={dealer.name} className={styles.card}>
        <div className={styles.cont1}>
          <div className={styles.location_img}>
            <img
              src={location_image}
              style={{ width: "150px", height: "150px" }}
              alt="location"
            />
          </div>
        </div>
        <div className={styles.cont2}>
          <div className={styles.details}>
            <h3>{`${i + 1}. ${dealer.name}`}</h3>
            <p>{dealer.address}</p>
            <p>{dealer.phone}</p>
          </div>
        </div>

        <div className={styles.link}>
          <a href="#">SELECT THIS DEALER</a>
        </div>
      </div>
    );
  });
  return (
    <div className={styles.list}>
      <div className={styles.list_name}>
        <h2>Your Nearest Dealers</h2>
      </div>
      {list}
    </div>
  );
};

export default Dealer;
