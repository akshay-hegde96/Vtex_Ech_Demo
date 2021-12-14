import React, { useState, useEffect } from "react";
import { makeAPICall } from "../../../Utils/httpCall";
import { dealersListURL } from "../../../Config/url";
import AddressBanner  from "../../AddressBanner";


function index() {
    const [data, setData] = useState([]);

  useEffect(() => {
    const getdealers = async () => {
      const search = window.location.search;
        const seller = new URLSearchParams(search).get('seller');
        console.log("seller",seller);
      const responseData = await makeAPICall("https://tonynissanworkspace--tonynissan.myvtex.com/api/dataentities/DealerList/search?_schema=dealer&_fields=name,address,phone", "GET", "0-100");
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
        <div>
            <AddressBanner 
            name={data.name}
            address={data.address}
            phone={data.phone}
            />
        </div>
    )
}

export default index
