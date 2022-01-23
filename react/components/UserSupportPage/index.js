import React from "react";
import styles from "./UserSupportPage.css";

const UserSupport = () => {
  return (
    <React.Fragment>
      <a className={styles.back_link} href="/account">
        ⬅ RETURN
      </a>
      <div className={styles.support}>
        <h1>User Support</h1>
        <div>How can I help you today?</div>
      </div>
    </React.Fragment>
  );
};

export default UserSupport;

//style={{ marginLeft: "3rem", paddingTop: "2rem" }}
