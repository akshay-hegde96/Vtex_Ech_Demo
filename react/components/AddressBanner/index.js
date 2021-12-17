import React, { useState } from "react";
import styles from "./Tony-Address-Banner.css";
const AddressBanner = (props) => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        {/* <img
        // style={{ width: "615px" }}
        src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/D65287B2-E276-4715-97D4-49C7ABAD845A.png"
      /> */}
        <div className={styles.rightContainer}>
          <h4 className={styles.headings}>{props.name}</h4>
          <p className={styles.address}>
            <img
              className={styles.locationIcon}
              src="https://i.pinimg.com/originals/b7/02/af/b702afc7b811840ebc49037cdc98bc45.jpg"
            />
            {/* 94-1299 KA UKA BLVD,WAIPAHU,HI 96797 */}
            {props.address}
          </p>
          <div className={styles.inputsContainer}>
            {/* <input className={styles.inputBox} type="text" value="(808)680-7140"/>
        <input className={styles.inputBox} type="text" value="EMAIL US"/> */}

            <h5 className={styles.inputBox}>
              {/* (808)680-7140 */}
              {props.phone}
            </h5>

            <a href="mailto:nissanparts@tonygroup.com">
              <h5 className={styles.inputBox}>EMAIL US</h5>
            </a>
          </div>
          <h4 className={styles.headings}>Policies & Information</h4>
          <a href="/privacyPolicy">
            <h4 className={styles.returnPolicy}>
              RETURN POLICY
              <img
                className={styles.caretIcon}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY9SF7DQiLkkMxXxU5iX90MOCJb9JFdlmTdPuwx5nH2vKA_4eejy-L8SAQsty2FwKsI5Y&usqp=CAU"
              />
            </h4>
          </a>
          <h5 className={styles.acceptedPayments}>ACCEPTED PAYMENTS</h5>
          <div className={styles.acceptedPaymentsImgs}>
            <img
              className={styles.acceptedPaymentsIcons}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2EjhRqvnQyU5aLp18VW8qw_tktVLgpV7CAz_5VeKaXhAR3AtIftgDkyFoh-GgHvb_nOE&usqp=CAU"
            />
            <img
              className={styles.acceptedPaymentsIcons}
              src="https://img.favpng.com/0/12/17/mastercard-credit-card-payment-visa-nyse-ma-png-favpng-n2pqLqnZWVqJSFS9UmqsPydSN.jpg"
            />
            <img
              className={styles.acceptedPaymentsIcons}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDVLPvTMIPCXzyIiVsRXPDCgBoZHI6ZNlD5mCKRvJzuLDryQtkQOtTP2lsjeMsgg1P9aQ&usqp=CAU"
            />
            <img
              className={styles.acceptedPaymentsIcons}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHbzdfPV1WD8oiuH6B_9b3moJpwPKY16uVIk_tlMMTJDGW2F8U7-oiDrXmINqb1P2OXic&usqp=CAU"
            />
            <img
              className={styles.acceptedPaymentsIcons}
              src="https://p.kindpng.com/picc/s/44-440826_chad-hurley-paypal-logo-hd-png-download.png"
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default AddressBanner;
