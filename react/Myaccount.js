import React, { Component } from 'react'
import styles from './Myaccount.css'

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
                    <Item link="/account">My Account</Item>
                    <Item link="/wishlist">My Wishlist</Item>
                    <Item link="/checkout">My Cart</Item>
                    <Item link="/checkout">Checkout</Item>
                    <Item link="/login">Register</Item>
                    <Item link="/login">Login</Item>
                </Menu>
            </div>
        )
    }
}

export default Myaccount