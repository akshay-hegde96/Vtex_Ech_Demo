import React, { useState, useEffect } from "react";
import styles from "./Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall";

const Electronics = () => {
  const [elect, setElect] = useState([]);
  let data;
  useEffect(() => {
    const makeElectronicsAPICall = async () => {
      data = await makeAPICall(deparmentURL, "GET");
      console.log({ data });
      setElect([...data]);
    };

    makeElectronicsAPICall();
  }, []);

  // ===================================

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img
            src={homeIcon}
            alt="home-icon"
            className={styles.breadcrumbIcon}
          />
        </a>
      </div>

      <h2 className={styles.textAlignment}> Department Electronics</h2>
      {elect
        .filter((elect) => elect.id === 103)
        .map((electronic) => {
          return (
            <div key={electronic.id} className={styles.row}>
              {electronic.children.map((category, i) => {
                return (
                  <div key={category.id}>
                    <a href={category.url}>
                      {i === 0 && (
                        <img
                          src="https://www.bajajfinserv.in/Image_LED_TV_1_LED_354x202_desktop.jpg"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 1 && (
                        <img
                          src="https://cdn.thewirecutter.com/wp-content/media/2020/09/businesslaptops-2048px-9820.jpg"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 2 && (
                        <img
                          src="https://m.media-amazon.com/images/I/51+7Guk8aGL._SY450_.jpg"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 3 && (
                        <img
                          src="https://alexnld.com/wp-content/uploads/2017/09/PC0702.jpg"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 4 && (
                        <img
                          src="https://subcontracteu.com/uploads/pages/535eee07e8fd4c9fabc377cd464c1d74.png"
                          className={styles.imgSize}
                        />
                      )}
                      <h3>{category.name}</h3>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default Electronics;
