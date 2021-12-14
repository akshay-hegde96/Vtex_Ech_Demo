import React, { useState, useEffect } from "react";
import { makeAPICall } from "../../Utils/httpCall";
import { storeURL,dealersListURL } from "../../Config/url";
// import AddressBanner  from "../../AddressBanner";
import styles from "./pickup.css";


function index() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const getdealers = async () => {
      const search = window.location.search;
        const seller = new URLSearchParams(search).get('seller');
        console.log("seller",seller);
      const responseData = await makeAPICall(dealersListURL, "GET", "0-100");
       console.log("responseData",responseData);
      var selectedDealer = responseData.filter((dealer)=>{
        return( dealer.name == seller);
        
      });
      var dealerObj={};
      if(selectedDealer.length){
        dealerObj= selectedDealer[0];
      }else{
        dealerObj= responseData[0];
      }
     setData(dealerObj);

    //console.log("responseData",responseData);
    };
    getdealers();
  }, []);
    return (
        <div className={styles.pickupInfoBlock} >
<div className={styles.pickupPadding} >
<span className={styles.pd_radioButton} >
<input id="radio_pickup" type="radio" name="radio_shipping" value="cb_pickup" />
</span>
<span className={styles.pd_installText} >Local Pickup</span>
</div>
<div className={styles.pickupRadioBlock} >
<div className={styles.addressTony} >{data.name}</div>
<div className={styles.addressTony} >{data.address}</div>
</div>
</div>
    )
}

export default index
