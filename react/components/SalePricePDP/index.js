import React, { Component } from 'react'
import styles from "./SalePrice.css";


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
			<div className={styles.container} >

<div className={styles.rowPDP} >

<div className={styles.nissanSaleBlock} >
<div className={styles.saleRow} >
<div className={styles.col6PDP} >
<span className={styles.salePrice} >Sale Price</span>
</div>
<div className={styles.colRight6} >
<span className={styles.priceText} >$ 1,317.50</span>
</div>
<div className={styles.limitedBlock} >
<img className={styles.limitedImg} src="https://www.tonynissanparts.com/images/productTags/you-saved.png" alt="you-saved"/>
<span className={styles.limitedText} >Limited Time Sale: 2021 December Holiday Haul Parts & Accessory Event</span>

</div>
<div className={styles.discountBlock} >
<span className={styles.discountText} >All Discounts:$ 232.50 (15% off)</span>
</div>
<div className={styles.discountPriceBlock} >
<span className={styles.discountPriceText} >MSRP: $ 1,550.00</span>
</div>
</div>

<div className={styles.shippingInfoBlock} >
<div className={styles.ffBlock} >
<span className={styles.ffText} >Fulfillment Options</span>
</div>
<div className={styles.shippingOptionBlock} >
<div className={styles.shippingRadioBlock} >
<span className={styles.pd_radioButton} >
<input id="radio_shipping" type="radio" name="radio_shipping" value="cb_shipping" checked="checked" />
</span>
<span className={styles.pd_installText} >Shipping</span>
</div>

<div className={styles.colRight6} >
<span id="btnestimateShippingWrapper" className={styles.btnestimateShippingWrapper} >
<input type="submit" name="cestimateShipping" value="ESTIMATE COST" id="cestimateShipping" className={styles.cestimateShipping} />
</span>
</div>
</div>
<div className={styles.pickupInfoBlock} >
<div className={styles.pickupPadding} >
<span className={styles.pd_radioButton} >
<input id="radio_pickup" type="radio" name="radio_pickup" value="cb_pickup" />
</span>
<span className={styles.pd_installText} >Local Pickup</span>
</div>
<div className={styles.pickupRadioBlock} >
<div className={styles.addressTony} >Tony Nissan</div>
<div className={styles.addressTony} >94-1299 KA UKA BLVD, WAIPAHU, HI 96797</div>
</div>
</div>
</div>

<div className={styles.qtySelectorBlock} >
<div className={styles.qtyInputBlock} >
<div className={styles.rowPDP} >
<div className={styles.decBtn} >
<button onClick={this.decrement}  className={styles.btn} >-</button>
</div>
<div className={styles.col6PDP} >
<input className={styles.formControl} value={this.state.count} type="text" />
</div>
<div className={styles.incBtn} >
<button onClick={this.increment} className={styles.btn} >+</button>
</div>
</div>
</div>
<div className={styles.cartBtnBlock} >
<button className={styles.PrimaryBtn} > ADD TO CART </button>
</div>
</div>

<div className={styles.ratingBlock} >
<div className={styles.col8PDP} >
<div className={styles.rateTxt} >
<span className={styles.ratingText} >Dealer Rating: <b>5.0/5</b> </span>
<span className={styles.ratingIcon} >
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png"></img>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Star_icon_stylized.svg/1024px-Star_icon_stylized.svg.png"></img>
</span>
</div>
<div className={styles.rateTxt} ><span className={styles.reviews} >7 reviews</span></div>
</div>
<div className={styles.seeReviewBlock} >
<a className={styles.seeReviews} href="https://www.tonynissanparts.com/testimonials.aspx">SEE REVIEWS</a>
</div>
</div>

</div>
</div>
</div>
		)
	}
}

export default index
