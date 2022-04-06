import React, { useState, useEffect } from "react";
import styles from "./Dealer.css";
import location_image from "../../../../assets/location.png";
import { makeAPICall } from "../../../Utils/httpCall";
import { dealersListURL } from "../../../Config/url";

const Dealer = (props) => {
  const [data, setData] = useState([]);
  const [dealerList, setDealerList] = useState([]);

  useEffect(() => {
    const getdealers = async () => {
      const responseData = await makeAPICall(dealersListURL, "GET", "0-100");
      setData(responseData);
    };
    getdealers();
  }, []);

  //================================
  let list;

  // case 1: if user is redirected from PDP-------------------------------------------------------
  if (props.productName) {
    list = props.zipCode.trim() //if user enters zipNo
      ? data
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
      : props.pinCode.trim()
      ? data
          .filter((dealer) => dealer.zipNo == props.pinCode) //filter by zipNo if user redirected from pdp enters zipNo in dealers page
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
                  {/* if user is coming from PDP , redirecting user to hostURL PDP  */}
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
          //show all dealers if user coming from pdp does not enter zipNo
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
                {/* if user is coming from PDP , redirecting user to hostURL PDP  */}
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
  }

  // case 2: if user is redirected from other page except PDP------------------------------------
  else
    list = props.pinCode.trim()
      ? data
          .filter((dealer) => dealer.zipNo == props.pinCode) //filter by zipNo if user enters zipNo

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
                  {/* if user is coming from any other page, redirecting user to hostURL main site  */}
                  <a href={dealer.hostURL}>SELECT THIS DEALER</a>
                </div>
              </div>
            );
          })
      : data.map((dealer, i) => {
          //show all dealers if user enters no zipNo
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
                {/* if user is coming from any other page, redirecting user to hostURL main site  */}
                <a href={dealer.hostURL}>SELECT THIS DEALER</a>
              </div>
            </div>
          );
        });

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
