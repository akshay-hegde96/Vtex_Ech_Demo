import React, { Component } from 'react'
import styles from './WomenMenu.css'

const tiles = [
    { title: "Clothing-Ethnic Wear", subItem: ["Sarees", "Kurtas & Kurtis", "Dress Material", "Lehenga Choli"] },
    { title: "Clothing-Western Wear", subItem: ["Topwear", "Dresses", "Jeans", "Shorts", "Skirts"] },
    { title: "Footwear-Sandals", subItem: ["Flats", "Heels", "Wedges"] },
    { title: "Footwear-Shoes", subItem: ["Sports Shoes", "Casual Shoes", "Boots"] },
    { title: "Personal Care Appliances", subItem: ["Hair Straightners", "Hair Dryers", "Epilators"] },
    { title: "Beauty & Grooming", subItem: ["Make Up", "Skin Care", "Hair Care", "Deodorants & Perfumes"] },
    { title: "Watch", subItem: ["Smart Watches", "Analog", "Watch Accessories"] },
    { title: "Jewellery", subItem: ["Artificial Jewellery", "Silver Jewellery", "Precious Jewellery"] },
    { title: "Accessories", subItem: ["Handbags", "Shoulder Bags", "Totes", "Sling bags", "Wallets & Belts", "Sunglasses"] },
    { title: "Featured", subItem: ["Forever 21", "Chemistry", "Lakme", "Catwalk", "Titan-Raga", "Anmi", "Rare Roots"] },
];

export class Womenmenu extends Component {

    componentDidMount() {
        const findElem = document.querySelector('.vtex-store-drawer-0-x-drawerContent');
        findElem && findElem.setAttribute('style', 'overflow-y:scroll; height:-webkit-fill-available;');
        const menuExp = document.querySelectorAll('.vtex-menu-2-x-accordionIcon--megaMenu-header');
        menuExp.forEach(item =>
            item.setAttribute('style', 'color:darkgreen')
        )
    }
    render() {
        return (
            <div className={styles.responsiveGrid}>
                {
                    tiles.map((tile, i) =>
                        <div key={i} className={styles.tileData}>
                            <div className={styles.tile}>
                                <div className={styles.title}>{tile.title}</div>
                                <div className={styles.text}>
                                    {
                                        tile.subItem.map((type, i) =>
                                            <div key={i}>
                                                <a className={styles.subTileData} href={type}>{type}</a>
                                            </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default Womenmenu