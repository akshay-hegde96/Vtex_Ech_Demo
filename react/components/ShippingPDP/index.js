import React, { Component } from 'react'
import styles from "./shipping.css";

 class index extends Component {
    render() {
        return (
           
<div className={styles.shippingRadioBlock} >
<span className={styles.pd_radioButton} >
<input id="radio_shipping" type="radio" name="radio_shipping" value="cb_shipping" checked="checked" />
</span>
<span className={styles.pd_installText} >Shipping</span>
</div>

        )
    }
}

export default index
