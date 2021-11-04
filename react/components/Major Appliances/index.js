import React, { useState, useEffect } from "react";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../utills/httpCall"

const MajorAppliances = ({ }) => {

  let data;
  const [majorAppliancesDatas, setmajorAppliancesDatas] = useState([]);

  useEffect(() => {
      const makeMajorAppliancesAPICall = async () => {
      data = await makeAPICall(deparmentURL, 'GET');
      console.log({ data });
      setmajorAppliancesDatas([...data]);
    };

    makeMajorAppliancesAPICall();
  }, []);

  return (
    <React.Fragment>
      <div style={{ display: "flex" }}>
        <a href={storeURL}>
          <img src={homeIcon} alt="home-icon" className={styles.breadcrumbIcon} />
        </a>
      </div>
      <h2 className={styles.textAlignment}>Major Appliances</h2>
      <div className={styles.row}>
        {majorAppliancesDatas.filter(majorAppliancesDatas => majorAppliancesDatas.id === 101).map((majorAppliance) => {
          return (
            <div key={majorAppliance.id}>
              <h2>{majorAppliance.name}</h2>
              {majorAppliance.children.map(ak => {
                return <h2>{ak.name}</h2>
              })}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default MajorAppliances;