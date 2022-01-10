import React from "react";
import styles from "./Department.css";

const Shelf = (props) => {

    const AccessoriesShelf = props.AccessoriesShelf;
    const CarPartsShelf = props.CarPartsShelf;
    const MerchandiseShelf = props.MerchandiseShelf;
    const NismoShelf = props.NismoShelf;
    const id = parseInt(props.params.clp_id);
    
    return (
        <div>
        <h2 className={styles.shelfName}>Featured Parts & Accessories</h2>
        {
            (id === 167 && <AccessoriesShelf />) ||
            (id === 135 && <CarPartsShelf />) ||
            (id === 128 && <NismoShelf />) ||
            (id === 175 && <MerchandiseShelf />)
        }
        </div>
    )
};
export default Shelf;