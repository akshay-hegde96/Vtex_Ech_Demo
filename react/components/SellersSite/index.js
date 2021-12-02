import React, { useState, useEffect } from "react";
import { makeAPICall } from "../../Utils/httpCall";
import { sellerList } from "../../Config/url";
import { sellerSiteUrl } from "../../Config/url";
const SellersSite = () => {
  const [sellers, setSellers] = useState([]);
  let data;
  useEffect(() => {
    const getSellerAPICall = async () => {
      data = await makeAPICall(sellerList, "GET");
      console.log({ data });
      setSellers([...data]);
    };
    getSellerAPICall();
  }, []);
  // ============================

  return (
    <React.Fragment>
      <div style={{ border: "1px solid black", textAlign: "center" }}>
        <h2
          style={{
            backgroundColor: "#cacbcc",
            margin: "0px",
            padding: "10px 0px",
            color: "#5b5b5c",
          }}
        >
          Visit Sellers Site by clicking on seller name below:
        </h2>
        {sellers.map((seller, index) => {
          return (
            <div key={seller.SellerId}>
              <a style={{textDecoration:"none"}} href={sellerSiteUrl.filter((sellerurl, i) => i === index)}>
                <h4>{seller.Name}</h4>
              </a>
              {/* { seller.Name==="ECHNissan"?<a href="https://www.nissanusa.com/"> <h4>{seller.Name}</h4> </a> : <a href="https://echidna.co"> <h4>{seller.Name}</h4> </a>} */}
            </div>
          );
        })}
      </div>
    </React.Fragment>
  );
};
export default SellersSite;
