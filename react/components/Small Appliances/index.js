import React, { useState, useEffect } from "react";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../utills/httpCall"

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
      <div className={styles.row}>
        {smallAppliancesDatas.filter(smallAppliancesDatas => smallAppliancesDatas.id === 102).map((smallAppliance) => {
          return (
            <div key={smallAppliance.id}>
              <h2>{smallAppliance.name}</h2>
              {smallAppliance.children.map(ak => {
                return <h2>{ak.name}</h2>
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default SmallAppliances;
