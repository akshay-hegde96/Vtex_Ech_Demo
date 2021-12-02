import React from "react";
import styles from "./dealers.css";
import Dealer from "./Dealer/Dealer";

const DealersList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container1}>
        <div className={styles.container_input}>
          <div className={styles.container_name}>
            <h2>Select A Dealer</h2>
          </div>
          <div className={styles.lable}>
            <label>Enter Your Zip Code</label>
          </div>
          <div>
            <input className={styles.search} type="text" placeholder="522511" />
            <input className={styles.buttn} type="submit" value="GO" />
          </div>
        </div>
      </div>
      <Dealer />
    </div>
  );
};

export default DealersList;
