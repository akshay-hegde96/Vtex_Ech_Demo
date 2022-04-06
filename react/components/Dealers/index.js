import React, { useState } from "react";
import styles from "./dealers.css";
import Dealer from "./Dealer/Dealer";

const DealersList = (props) => {
  const [pinInput, setpinInput] = useState("");
  const [pin, setPin] = useState("");
  const urlData = props.query.zip;

  const productName = props.query.product;
  console.log(urlData);
  console.log(props);

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
            <input
              className={styles.search}
              type="text"
              placeholder={urlData ? urlData : pin}
              onChange={(e) => {
                setpinInput(e.target.value);
              }}
            />
            <button
              className={styles.buttn}
              type="button"
              onClick={() => {
                setPin(pinInput);
                pin && console.log(pin);
              }}
            >
              GO
            </button>
          </div>
        </div>
      </div>
      <Dealer zipCode={urlData} productName={productName} pinCode={pin} />
    </div>
  );
};

export default DealersList;
