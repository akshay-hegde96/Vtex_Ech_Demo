import React, { useState, useEffect } from "react";
import styles from "../Electronics/Electronics.css";
import homeIcon from "../../../assets/breadcrumb.png";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall"

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
      <h2 className={styles.textAlignment}>Department Major Appliances</h2>
      {majorAppliancesDatas.filter(majorAppliancesDatas => majorAppliancesDatas.id === 101).map((majorAppliance) => {
        return (
          <div key={majorAppliance.id} className={styles.row}>
            {majorAppliance.children.map((category, i) => {
              return (
                <div key={category.id}>
                  <a href={category.url}>
                    {i === 0 && (
                      <img
                        src="https://images.samsung.com/is/image/samsung/in-rf9500kf-akg-rf28n9780sg-tl-lperspectiveblack-107074167?$720_576_PNG$"
                        className={styles.imgSize}
                      />
                    )}
                    {i === 1 && (
                      <img
                        src="https://www.thespruce.com/thmb/sSFBSZmaY_0IwXEn94EsKueVY7c=/1000x1000/smart/filters:no_upscale()/SamsungNX58R5601SS-7c085f060046411e9c867583ffab5276.jpg"
                        className={styles.imgSize}
                      />
                    )}
                    {i === 2 && (
                      <img
                        src="https://images.thdstatic.com/productImages/c640d979-f4b5-4b58-91a9-2f588db4ce64/svn/white-maytag-front-load-washers-mhw6630hw-40_600.jpg"
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
export default MajorAppliances;