import React, { Component } from 'react'
import styles from "./pickup.css";

 class index extends Component {
    render() {
        return (
            <div className={styles.pickupInfoBlock} >
<div className={styles.pickupPadding} >
<span className={styles.pd_radioButton} >
<input id="radio_pickup" type="radio" name="radio_shipping" value="cb_pickup" />
</span>
<span className={styles.pd_installText} >Local Pickup</span>
</div>
<div className={styles.pickupRadioBlock} >
<div className={styles.addressTony} >Tony Nissan</div>
<div className={styles.addressTony} >94-1299 KA UKA BLVD, WAIPAHU, HI 96797</div>
</div>
</div>
        )
    }
}

export default index
