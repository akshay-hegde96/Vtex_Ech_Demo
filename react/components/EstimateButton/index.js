import React, { useState } from "react";
import styles from "./estimateBtn.css";


// function Toggle() {
    /*const [show, setShow] = useState(false);

    return (
        <div>
                <span id="btnestimateShippingWrapper" className={styles.btnestimateShippingWrapper} >
<input type="submit" onClick={()=>setShow()}  name="cestimateShipping" value="ESTIMATE COST" id="cestimateShipping" className={styles.cestimateShipping} />
</span>
<span>

</span>
        </div>
    )
}*/
const Toggle = ({Shipping}) => {


    // const [show, setShow] = useState(false);
    // const [hidebtn , setHidebtn] = useState(true);
    // const [loader , setLoader] = useState(false);

    // const toggleShow=()=>{
    //     setLoader(true);
    //     setTimeout(()=>{
    //         setShow(true);
    //         setHidebtn(false);
    //         setLoader(false);
    //     },2000) 
    // }

    // return (
    //   <div>
    //       {hidebtn && !loader && <button className={styles.cestimateShipping} onClick={toggleShow }>ESTIMATE COST</button> }
           
    //     {show &&  !loader &&  <div className={styles.text}>Free</div>}
    //     {loader &&  <div className={styles.spinner}></div>}
    //   </div>
    // )

    return(
<React.Fragment>
  <Shipping/>

</React.Fragment>
    )
  }
  


export default Toggle

