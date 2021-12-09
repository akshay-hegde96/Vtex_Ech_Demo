import React, { useState, useEffect } from "react";
import styles from "./Dealer-PDP.css";
import { makeAPICall } from "../../../Utils/httpCall";
import { sellerList } from "../../../Config/url";
import { nissanSellerSiteUrl } from "../../../Config/url";
//import useProduct from "vtex.product-context/useProduct";
import { useProduct } from "vtex.product-context";

const DealerList_PDP = () => {
  const productContextValue = useProduct();
  console.log(productContextValue.product.cacheId);

  const [sellers, setSellers] = useState([]);
  useEffect(() => {
    const getSellerAPICall = async () => {
      const data = await makeAPICall(sellerList, "GET");
      console.log({ data });
      setSellers([...data]);
    };
    getSellerAPICall();
  }, []);

  const list = sellers.map((seller, i) => {
    return (
      <div key={i} className={styles.card}>
        <div className={styles.details}>
          <h3>{seller.Name}</h3>
          <p>8892556743</p>
        </div>

        <a
          className={styles.links}
          href={`https://demo--tonynissan.myvtex.com/${productContextValue?.product?.cacheId}/p`}
        >
          SHOP NOW
        </a>
      </div>
    );
  });
  return (
    <div className={styles.list}>
      <div className={styles.list_name}>
        <h2>Please select a dealer to view local pricing.</h2>
      </div>
      {list}

      <div className={styles.search_link}>
        <input
          className={styles.search}
          type="text"
          title="Enter Your Zip Code"
          placeholder="52211"
        />
        <a
          className={styles.link}
          href="/dealers"
          title="Shop your Local 2018 Nissan Altima Parts Dealer"
        >
          VIEW MORE DEALERS
        </a>
      </div>
    </div>
  );
};

export default DealerList_PDP;

// import useProduct from 'vtex.product-context/useProduct'

// import productReleaseDate from '../../queries/productReleaseDate.graphql'

// const CountdownCustom = () => {
//    const { product } = useProduct();
//    console.log("Product context ---",product);
//  const { data, loading, error } = useQuery(productReleaseDate, {
//    variables: {
//      slug: product?.linkText
//    },
//    ssr: false
//  });
