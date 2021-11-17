import React, { Component } from "react";
import styles from "./WomenMenu.css";
import { makeAPICall } from "../../Utils/httpCall";

export class Womenmenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tiles: {},
      error: false,
    };
  }
  getTilesData = () => {
    makeAPICall("api/dataentities/MM/search/?_fields=_all", "GET")
      .then(async (res) => {
        this.setState({ tiles: res });
      })
      .catch((error) => this.setState({ error: true }));
  };

  componentDidMount() {
    const findElem = document.querySelector(
      ".vtex-store-drawer-0-x-drawerContent"
    );
    findElem &&
      findElem.setAttribute(
        "style",
        "overflow-y:scroll; height:-webkit-fill-available;"
      );
    const menuExp = document.querySelectorAll(
      ".vtex-menu-2-x-accordionIcon--megaMenu-header"
    );
    menuExp.forEach((item) => item.setAttribute("style", "color:darkgreen"));
    this.getTilesData();
  }

  render() {
    return (
      <div className={styles.responsiveGrid}>
        {this.state.tiles.length > 0 &&
          this.state.tiles.map((tile, i) => (
            <div key={i} className={styles.tileData}>
              <div className={styles.tile}>
                <div className={styles.title}>{tile.title}</div>
                <div className={styles.text}>
                  {tile.subItem.split(",").map((type, i) => (
                    <div key={i}>
                      <a className={styles.subTileData} href={type}>
                        {type}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
      </div>
    );
  }
}

export default Womenmenu;

/*Alternate Approach
Making MenuItems Dynamic with schema */
// export class Womenmenu extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         menuItemData: [],
//         subItemData: [],
//       };
//     }
//     componentDidMount() {
//       const findElem = document.querySelector(
//         ".vtex-store-drawer-0-x-drawerContent"
//       );
//       findElem &&
//         findElem.setAttribute(
//           "style",
//           "overflow-y:scroll; height:-webkit-fill-available;"
//         );
//       const menuExp = document.querySelectorAll(
//         ".vtex-menu-2-x-accordionIcon--megaMenu-header"
//       );
//       menuExp.forEach((item) => item.setAttribute("style", "color:darkgreen"));

//       makeAPICall(menuItemURL, "GET").then((data) => {
//         console.log(data);
//         this.setState({ menuItemData: data });
//       });

//       makeAPICall(subItemURL, "GET").then((data) => {
//         console.log(data);
//         this.setState({ subItemData: data });
//       });
//     }
//     render() {
//       return (
//         <div className={styles.responsiveGrid}>
//           {this.state.menuItemData.map((eachTitle, i) => (
//             <div key={i} className={styles.tileData}>
//               <div className={styles.tile}>
//                 <div className={styles.title}>{eachTitle.title}</div>
//                 <div className={styles.text}>
//                   {this.state.subItemData.map((type, i) => {
//                     let element = eachTitle.menuId === type.menuId && (
//                       <div key={i}>
//                         <a className={styles.subTileData} href={type.item}>
//                           {type.item}
//                         </a>
//                       </div>
//                     );
//                     return element;
//                   })}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       );
//     }
//   }

//   export default Womenmenu;
