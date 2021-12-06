import React from "react";
import styles from "./DropdownInput.css";
import { EXPERIMENTAL_Select } from "vtex.styleguide";
import { Input } from "vtex.styleguide";
import { models, years, TrimLevels, driveline } from "../../Config/url";

const DropdownInputBox = () => {
  return (
    <React.Fragment>
      {/* <div className={styles.barRow}>
    <p className={styles.bar}>Select Your Vehicle</p>
    <button className={styles.buttonBox}><img src="https://cdn3.iconfinder.com/data/icons/action-states-vol-3-flat/48/Action___States_-_Vol._3-16-512.png" alt=""/></button>
   </div>
    */}
      <div className={styles.layoutWidth}>
          {/* <h5 className={styles.modalheader}>ADD VEHICLE TO GARAGE</h5> */}
        <h3>Select Your Vehicle Below:</h3>
        <div className={styles.selectMargin}>
          <EXPERIMENTAL_Select options={models} multi={false} placeholder="Select a Model"/>
        </div>
        <div className={styles.selectMargin}>
          <EXPERIMENTAL_Select options={years} multi={false} placeholder="Select a Year"/>
        </div>
        <div className={styles.selectMargin}>
          <EXPERIMENTAL_Select options={TrimLevels} multi={false} placeholder="Select a Trim Level"/>
        </div>
        <div className={styles.selectMargin}>
          <EXPERIMENTAL_Select options={driveline} multi={false} placeholder="Select a Driveline"/>
        </div>
        <hr />
        <div style={{ display: "flex" }}>
          <Input placeholder="Quick add vehicle by VIN" size="regular" />
          <button className={styles.buttonBox}>GO</button>
        </div>
        <a href="/" className={styles.modalFooterText}>Need helf finding your VIN?</a>
      </div>
    </React.Fragment>
  );
};
export default DropdownInputBox;
