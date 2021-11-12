import React, { useState, useEffect } from "react";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall"

const SmallAppliances = () => {
  let data;
  const [smallAppliancesDatas, setsmallAppliancesDatas] = useState([]);

  useEffect(() => {
    const makeSmallAppliancesAPICall = async () => {
      data = await makeAPICall(deparmentURL, 'GET');
      console.log({ data });
      setsmallAppliancesDatas([...data]);
    };

    makeSmallAppliancesAPICall();
  }, []);

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img src={homeIcon} alt="home-icon" className={styles.breadcrumbIcon} />
        </a>
      </div>
      <h2 className={styles.textAlignment}>Small Appliances</h2>
      {smallAppliancesDatas.filter(smallAppliancesDatas => smallAppliancesDatas.id === 102).map((smallAppliance) => {
        return (
          <div key={smallAppliance.id} className={styles.row}>
            {smallAppliance.children.map((category, i) => {
              return (
                <div key={category.id}>
                  <a href={category.url}>
                    {i === 0 && (
                      <img
                        src="https://m.media-amazon.com/images/I/71sBEW6MKbS._SL1500_.jpg"
                        className={styles.imgSize}
                      />
                    )}
                    {i === 1 && (
                      <img
                        src="https://m.media-amazon.com/images/I/41-IxPVRxLL._AC_SX466_.jpg"
                        className={styles.imgSize}
                      />
                    )}
                    {i === 2 && (
                      <img
                        src="https://m.media-amazon.com/images/I/61HtW9Fk5NL._SX425_.jpg"
                        className={styles.imgSize}
                      />
                    )}
                    {i === 3 && (
                      <img
                        src="https://static6.depositphotos.com/1103953/594/i/600/depositphotos_5941364-stock-photo-power-finger-is-charging-corcuit.jpg"
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
export default SmallAppliances;