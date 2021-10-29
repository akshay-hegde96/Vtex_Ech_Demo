import React from "react";
import { smallAppliances } from "../Electronics/data";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL } from "../../Conflicts/url";

const SmallAppliances = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img src={homeIcon} alt="home-icon" className={styles.breadcrumbIcon} />
        </a>
        {/* <p style={{paddingTop:"16px",color:"#dadada"}}>Electronics</p> */}
      </div>
      <h2 className={styles.textAlignment}>Small Appliances</h2>
      <div className={styles.row}>
        {smallAppliances.map((smallAppliance) => {
          return (
            <div key={smallAppliance.id} className={styles.imgPadding}>
              <a href={smallAppliance.url}>
                <img
                  src={smallAppliance.img}
                  alt="department image"
                  className={styles.imgSize}
                />
                <h2 className={styles.textAlignment}>{smallAppliance.name}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default SmallAppliances;
