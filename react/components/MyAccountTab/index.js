import React, { Component } from 'react'
import styles from './Myaccount.css'
// import myAcIcon from '../../../assets/my-account.svg'
const Menu = ({ children }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [head, ...tail] = React.Children.toArray(children);

    return (
        <div className={styles.menu} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            {head} {isOpen && <div className={styles.open}>{tail}</div>}
        </div>
    );
};

const Item = ({ children, link }) => {
    return (
        <div className={styles.item}>
            <a className={styles.a} href={link}>{children}</a>
        </div>
    );
};

export class Myaccount extends Component {

    render() {
        return (
            <div>
                <Menu>
                    <Item link="/account"><img src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/561DC964-C331-436E-A1E8-D45C286AB76D.svg" style={{paddingRight:"6px"}}/>My Account</Item>
                    {/* <Item link="/wishlist">My Wishlist</Item> */}
                    <Item link="/checkout">My Cart</Item>
                    <Item link="/checkout">Checkout</Item>
                    {/* <Item link="/login">Register</Item> */}
                    <Item link="/login">Login</Item>
                </Menu>
            </div>
        )
    }
}

export default Myaccount