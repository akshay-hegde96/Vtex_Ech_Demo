import React, { useState, useEffect } from "react";
import styles from "./Dealer-PDP.css";
import { makeAPICall } from "../../../Utils/httpCall";
import {
  // sellerList,
  dealerstoreURL,
  dealersListURL,
  storeURL,
} from "../../../Config/url";
import { nissanSellerSiteUrl } from "../../../Config/url";
//import useProduct from "vtex.product-context/useProduct";
import { useProduct } from "vtex.product-context";
import AddressBanner from "../../AddressBanner/index";
const DealerList_PDP = ({ VtexComp, Shipping }) => {
  const [show, setShow] = useState(true);
  const [dealer, setDealer] = useState(null);
  const [sellers, setSellers] = useState([]);
  const [zip, setZip] = useState("");
  const [estimate, setEstimate] = useState(false);
  const [ele, setEle] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const productContextValue = useProduct();
  console.log(productContextValue.product.cacheId);

  useEffect(() => {
    const getSellerAPICall = async () => {
      const data = await makeAPICall(dealersListURL, "GET");
      console.log({ data });
      setSellers([...data]);
      // setZip([...data]);
    };
    getSellerAPICall();
  }, []);

  const list = sellers
    .filter(
      (seller) =>
        seller &&
        (seller.name === "Tony Nissan" ||
          seller.name === "New City Nisaan" ||
          seller.name === "Nissan")
    )
    // filter the store dealer with dealer name to show on pdp

    .map((seller, i) => {
      let sellerHost =
        seller && seller.hostURL ? seller.hostURL : dealerstoreURL;
      let sellerUrl =
        sellerHost &&
        `${sellerHost}/${productContextValue?.product?.cacheId}/p?seller=${seller.name}`;

      return (
        <div key={i} className={styles.card}>
          <div className={styles.details}>
            <h3>{seller.name}</h3>
            <p>{seller.phone}</p>
            <p>{seller.zipNo}</p>
            {/* <p>{seller.hostURL}</p> */}
          </div>

          <a
            className={styles.links}
            //onClick={() => showDealer(i)}
            // href={`https://tonydemo--nissan.myvtex.com/${productContextValue?.product?.cacheId}/p?seller=${seller.Name}`}
            //onClick={() => showDealer(i)}
            href={`${sellerUrl}`}
          >
            SHOP NOW
          </a>
        </div>
      );
    });

  //---------------------------

  const showDealer = (i) => {
    setShow(!show);

    const dealer = (
      //---------------selected dealer-------------------------
      <div>
        <div className={styles.formShipping}>
          <span>
            <input type="radio" value="Shipping" name="shipping_method" />
            <label>Shipping</label>
          </span>

          <div className="shipping">{ele}</div>
        </div>
        <div className={styles.pickup}>
          <input type="radio" value="Pickup" name="shipping_method" />
          <label>Local Pickup</label>
        </div>
        <div className={styles.address_dealer}>
          <p>{sellers[i].name}</p>
          <p>{sellers[i].phone}</p>
        </div>
        <div className={styles.insta}>
          <span>Installation</span>
        </div>
        <div className={styles.instaDet}>
          <p>
            Installation at {sellers[i].name} by a certified Nissan Technician
            at a time of your choosing. Installed price does not include local
            taxes. Due to different vehicle options avtend configurations,
            installation may require additional labor. Please contact your
            dealer to verify installation charges.
          </p>
        </div>
        <hr style={{ marginTop: "15px", marginBottom: "15px" }} />
      </div>
    );

    setDealer(dealer);

    const DealerDetails = (
      <AddressBanner
        name={sellers[i].name}
        address={sellers[i].address}
        phone={sellers[i].phone}
        zipCode={sellers[i].zipNo}
      />
    );

    setSelectedDealer(DealerDetails);
  };

  return (
    <React.Fragment>
      <div style={{ display: "flex", flexFlow: "column" }}>
        {/* ---------Renders Deales List -------- */}
        {show && (
          <div className={styles.list}>
            <div className={styles.list_name}>
              <h2>Please select a dealer to view local pricing.</h2>
            </div>
            {list}
            <div className={styles.search_link}>
              <input
                className={styles.search}
                type="text"
                // title="Enter Your Zip Code"
                onChange={(e) => setZip(e.target.value)}
                placeholder="Enter your zip code"
              />

              <a
                className={styles.link}
                href={`/dealers?zip=${zip}&product=${productContextValue?.product?.cacheId} `}
                title="Shop your Local 2018 Nissan Altima Parts Dealer"
              >
                VIEW MORE DEALERS
              </a>
            </div>
          </div>
        )}

        {/* ---------Renders Form -------- */}
        {!show && (
          <div>
            <span
              style={{ cursor: "pointer", fontSize: "14px", fontWeight: "600" }}
              onClick={showDealer}
            >
              ⬅ BACK
            </span>
            {/* form */}
            {dealer}
            <VtexComp />
            {selectedDealer}
          </div>
        )}
      </div>
    </React.Fragment>
  );
};

export default DealerList_PDP;
