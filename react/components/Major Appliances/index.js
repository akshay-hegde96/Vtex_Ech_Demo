import React from "react";
import { majorAppliances } from "../Electronics/data";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL } from "../../Config/url";

const MajorAppliances = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img src={homeIcon} alt="home-icon"  className={styles.breadcrumbIcon} />
        </a>
        {/* <p style={{paddingTop:"16px",color:"#dadada"}}>Electronics</p> */}
      </div>
      <h2 className={styles.textAlignment}>Major Appliances</h2>
      <div className={styles.row}>
        {majorAppliances.map((majorAppliance) => {
          return (
            <div key={majorAppliance.id} className={styles.imgPadding}>
              <a href={majorAppliance.url}>
                <img
                  src={majorAppliance.img}
                  alt="department image"
                  className={styles.imgSize}
                />
                <h2 className={styles.textAlignment}>{majorAppliance.name}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default MajorAppliances;
