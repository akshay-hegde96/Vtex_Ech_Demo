import React, { Component, useEffect, useState } from "react";
import styles from "../../../react/CategoryMenu.css";
import { makeAPICall } from "../../Utils/httpCall";

const ElectronicsMenu = () => {
  const [EleMenu, setEleMenu] = useState([]);
  const [Data, setData] = useState(true);

  useEffect(() => {
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

    makeAPICall("api/catalog_system/pub/category/tree/10", "GET").then(
      (res) => {
        setEleMenu(res);
        setData(false);
        console.log("API CALL");
      }
    );
  }, []);

  let electronics =
    EleMenu.length > 0 && EleMenu.filter((elect) => elect.id === 103 && elect);

  console.log(electronics);
  console.log(electronics[0]);
  //console.log(electronics[0].children);
  return (
    <div className={styles.responsiveGrid}>
      {electronics &&
        electronics[0] &&
        electronics[0].children.map((category, i) => (
          <div key={category.id}>
            <a className={styles.subTileData} href={category.url}>
              <div>{category.name}</div>
            </a>
          </div>
        ))}
    </div>
  );
};

export default ElectronicsMenu;

// import React, { Component } from "react";
// import styles from "../../../react/CategoryMenu.css";
// import { makeAPICall } from "../../Utils/httpCall";

// export class ElectronicsMenu extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       EleMenu: [],
//       getData: true,
//       error: false,
//     };
//   }

//   getTilesData = () => {
//     makeAPICall("api/catalog_system/pub/category/tree/10", "GET")
//       .then(async (res) => {
//         this.setState({ EleMenu: res });
//         this.setState({ getData: false });
//         console.log("API CALL");
//       })
//       .catch((error) => this.setState({ error: true }));
//   };
//   componentDidMount() {
//     const findElem = document.querySelector(
//       ".vtex-store-drawer-0-x-drawerContent"
//     );
//     findElem &&
//       findElem.setAttribute(
//         "style",
//         "overflow-y:scroll; height:-webkit-fill-available;"
//       );
//     const menuExp = document.querySelectorAll(
//       ".vtex-menu-2-x-accordionIcon--megaMenu-header"
//     );
//     menuExp.forEach((item) => item.setAttribute("style", "color:darkgreen"));

//     this.getTilesData();
//   }

//   render() {
//     let electronics =
//       this.state.EleMenu.length > 0 &&
//       this.state.EleMenu.filter((elect) => elect.id === 103 && elect);

//     console.log(electronics);
//     console.log(electronics[0]);
//     //console.log(electronics[0].children);
//     return (
//       <div className={styles.responsiveGrid}>
//         {electronics &&
//           electronics[0] &&
//           electronics[0].children.map((category, i) => (
//             <div key={category.id}>
//               <a className={styles.subTileData} href={category.url}>
//                 <div>{category.name}</div>
//               </a>
//             </div>
//           ))}
//       </div>
//     );
//   }
// }

// export default ElectronicsMenu;
