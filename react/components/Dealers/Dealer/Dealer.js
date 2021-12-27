import React, { useState, useEffect } from "react";
import styles from "./Dealer.css";
//import {zip} from "../Dealer-PDP/index"
import location_image from "../../../../assets/location.png";
import { makeAPICall } from "../../../Utils/httpCall";
import { dealersListURL } from "../../../Config/url";

const Dealer = (props) => {
  const [data, setData] = useState([]);
  // const [zipUrl, setzipUrl] = useState([]);
  // const [productName, setProductName] = useState("");

  useEffect(() => {
    const getdealers = async () => {
      const responseData = await makeAPICall(dealersListURL, "GET", "0-100");
      setData(responseData);
    };
    getdealers();
  }, []);

  // useEffect(() => {
  //   const getZipCode = () => {
  //     var zipData = data && window.location.href;
  //     var zipdataFirst;
  //     console.log(zipData);
  //     if (zipData.includes("?")) {
  //       zipdataFirst = zipData.split("?")[1].split("=")[1];
  //     } else zipdataFirst = "";
  //     setzipUrl(zipdataFirst);

  //     let productData =
  //       zipData.includes("&") && zipData.split("&")[1].split("=")[1];

  //     setProductName(productData);
  //   };
  //   getZipCode();
  // }, []);
  // const test = data.filter( (dealer) => dealer.zipNo == zipUrl)
  // console.log(test)
  //===============================
  // const filterZipData = data
  //   .filter((dealer) => dealer.zipNo == zipUrl)
  //   .map((dealer, i) => {
  //     return (
  //       <div key={dealer.name} className={styles.card}>
  //         <div className={styles.cont1}>
  //           <div className={styles.location_img}>
  //             <img
  //               src={location_image}
  //               style={{ width: "150px", height: "150px" }}
  //               alt="location"
  //             />
  //           </div>
  //         </div>
  //         <div className={styles.cont2}>
  //           <div className={styles.details}>
  //             <h3>{`${i + 1}. ${dealer.name}`}</h3>
  //             <p>{dealer.address}</p>
  //             <p>{dealer.phone}</p>
  //             {/* <p>{dealer.hostURL}</p> */}
  //             {/* <p>Zip code: {dealer.zipNo}</p> */}
  //           </div>
  //         </div>

  //         <div className={styles.link}>
  //           <a
  //             href={
  //               dealer.hostURL &&
  //               `${dealer.hostURL}/${props.productName}/p?seller=${dealer.name}`
  //             }
  //           >
  //             SELECT THIS DEALER
  //           </a>
  //         </div>
  //       </div>
  //     );
  //   });
  // console.log(filterZipData);

  //================================
  const list = props.zipCode.trim()
    ? data
        // .filter( (dealer) => dealer.zipNo == zipUrl)
        .filter((dealer) => dealer.zipNo == props.zipCode)
        .map((dealer, i) => {
          return (
            <div key={dealer.name} className={styles.card}>
              <div className={styles.cont1}>
                <div className={styles.location_img}>
                  <img
                    src={location_image}
                    style={{ width: "150px", height: "150px" }}
                    alt="location"
                  />
                </div>
              </div>
              <div className={styles.cont2}>
                <div className={styles.details}>
                  <h3>{`${i + 1}. ${dealer.name}`}</h3>
                  <p>{dealer.address}</p>
                  <p>{dealer.phone}</p>
                  {/* <p>{dealer.zipNo}</p> */}
                  {/* <p>{dealer.hostURL}</p> */}
                </div>
              </div>

              <div className={styles.link}>
                <a
                  href={
                    dealer.hostURL &&
                    `${dealer.hostURL}/${props.productName}/p?seller=${dealer.name}`
                  }
                >
                  SELECT THIS DEALER
                </a>
              </div>
            </div>
          );
        })
    : data.map((dealer, i) => {
        return (
          <div key={dealer.name} className={styles.card}>
            <div className={styles.cont1}>
              <div className={styles.location_img}>
                <img
                  src={location_image}
                  style={{ width: "150px", height: "150px" }}
                  alt="location"
                />
              </div>
            </div>
            <div className={styles.cont2}>
              <div className={styles.details}>
                <h3>{`${i + 1}. ${dealer.name}`}</h3>
                <p>{dealer.address}</p>
                <p>{dealer.phone}</p>
                {/* <p>{dealer.zipNo}</p> */}
                {/* <p>{dealer.hostURL}</p> */}
              </div>
            </div>

            <div className={styles.link}>
              <a
                href={
                  dealer.hostURL &&
                  `${dealer.hostURL}/${props.productName}/p?seller=${dealer.name}`
                }
              >
                SELECT THIS DEALER
              </a>
            </div>
          </div>
        );
      });
  console.log(list);

  // const renderData = () => {
  //   if (zipUrl) {
  //     return filterZipData;
  //   } else if (zipUrl == "") {
  //     return list;
  //   } else if (zipUrl == undefined) {
  //     return list;
  //   }
  // };
  return (
    <div className={styles.list}>
      <div className={styles.list_name}>
        <h2>Your Nearest Dealers</h2>
      </div>
      {list}
    </div>
  );
};

export default Dealer;
