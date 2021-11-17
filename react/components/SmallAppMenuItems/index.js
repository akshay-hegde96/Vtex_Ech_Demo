import React, { Component } from 'react'
import styles from '../../../react/CategoryMenu.css';
import { makeAPICall } from '../../Utils/httpCall';

export class SmallAppMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            smallAppMenu: {},
            error: false,
        }
    }
    getTilesData = () => {
        makeAPICall("api/catalog_system/pub/category/tree/10", "GET").then(async (res) => {
            this.setState({ smallAppMenu: res });
        }).catch((error) => this.setState({ error: true }));
    }
    componentDidMount() {
        const findElem = document.querySelector('.vtex-store-drawer-0-x-drawerContent');
        findElem && findElem.setAttribute('style', 'overflow-y:scroll; height:-webkit-fill-available;');
        const menuExp = document.querySelectorAll('.vtex-menu-2-x-accordionIcon--megaMenu-header');
        menuExp.forEach(item =>
            item.setAttribute('style', 'color:darkgreen')
        );
        this.getTilesData()
    }

    render() {
        let smallApp = (this.state.smallAppMenu.length > 0 && this.state.smallAppMenu.filter((small) => small.id === 102 && small))
        return (
            <div className={styles.responsiveGrid}>
                {smallApp && smallApp[0] && smallApp[0].children.map((category, i) =>
                    <div key={category.id}>
                        <a className={styles.subTileData} href={category.url}>
                            <div>{category.name}</div>
                        </a>
                    </div>)
                }
            </div>
        );
    }
}

export default SmallAppMenu;