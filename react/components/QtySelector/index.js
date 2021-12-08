import React, { Component } from 'react'
import styles from "./qtyselect.css";


 class index extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:1
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }

	increment() {
        this.setState(prevState=>({
            count: prevState.count + 1
        }) )
        console.log(this.state.count)
    }
    
    decrement() {
        this.setState(prevState=>({
            count: prevState.count - 1
        }) )
        console.log(this.state.count)
    }
    render() {
        return (
            <div className={styles.qtyInputBlock} >
<div className={styles.rowPDP} >   
<div className={styles.qtytext}>
<span>Qty</span>
</div>
<div className={styles.decBtn} >
<button onClick={this.decrement}  className={styles.btn} >-</button>
</div>
<div className={styles.inputblock} >
<input className={styles.formControl} value={this.state.count} type="text" />
</div>
<div className={styles.incBtn} >
<button onClick={this.increment} className={styles.btn} >+</button>
</div>
</div>
</div>
        )
    }
}

export default index
