import React from "react";
import { electronics } from "./data";
import styles from "./Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL } from "../../Conflicts/url";

const Electronics = () => {
  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img src={homeIcon} alt="home-icon" className={styles.breadcrumbIcon} />
        </a>
        {/* <p style={{paddingTop:"16px",color:"#dadada"}}>Electronics</p> */}
      </div>
      <h2 className={styles.textAlignment}>Electronics</h2>
      <div className={styles.row}>
        {electronics.map((electronic) => {
          return (
            <div key={electronic.id} className={styles.imgPadding}>
              <a href={electronic.url}>
                <img
                  src={electronic.img}
                  alt="department image"
                  className={styles.imgSize}
                />
                <h2 className={styles.textAlignment}>{electronic.name}</h2>
              </a>
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default Electronics;
