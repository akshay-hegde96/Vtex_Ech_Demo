import React, { Component } from 'react'
import styles from "./estimateBtn.css";


export class index extends Component {
    render() {
        return (
            <div>
                <span id="btnestimateShippingWrapper" className={styles.btnestimateShippingWrapper} >
<input type="submit" name="cestimateShipping" value="ESTIMATE COST" id="cestimateShipping" className={styles.cestimateShipping} />
</span>
            </div>
        )
    }
}

export default index
