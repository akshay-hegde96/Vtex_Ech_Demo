import React, { useState, useEffect } from "react";
import styles from "./Dealer-PDP.css";

import { makeAPICall } from "../../../Utils/httpCall";
import { dealersListURL } from "../../../Config/url";

const DealerList_PDP = () => {
  const [data, setData] = useState([
    { name: "TONY NISSAN", phone: "889298397" },
    { name: "NEW NISSAN", phone: "889298397" },
    { name: "GATE NISSAN", phone: "889298397" },
  ]);

  // useEffect(() => {
  //   const getdealers = () => {
  //     const responseData = makeAPICall(dealersListURL, "GET", "0-100");
  //     setData(responseData);
  //   };
  //   getdealers();
  // }, []);
  // console.log(data);

  const list = data.map((dealer, i) => {
    return (
      <div key={i} className={styles.card}>
        <div className={styles.details}>
          <h3>{dealer.name}</h3>
          <p>{dealer.phone}</p>
        </div>

        <a className={styles.links} href="/">
          SHOP NOW
        </a>
      </div>
    );
  });
  return (
    <div className={styles.list}>
      <div className={styles.list_name}>
        <h2>Please select a dealer to view local pricing.</h2>
      </div>
      {list}

      <div className={styles.search_link}>
        <input
          className={styles.search}
          type="text"
          title="Enter Your Zip Code"
          placeholder="52211"
        />
        <a
          className={styles.link}
          href="/dealers"
          title="Shop your Local 2018 Nissan Altima Parts Dealer"
        >
          VIEW MORE DEALERS
        </a>
      </div>
    </div>
  );
};

export default DealerList_PDP;
