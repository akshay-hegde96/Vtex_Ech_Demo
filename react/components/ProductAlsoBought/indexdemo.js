import React from "react";
import { Card } from "vtex.styleguide";
import styles from "./index.css";
import cars from "../../../assets/cars.png";

const ProductData = (props) => {
  return (
    /*<div
      className={styles.cardContainer}
      style={{ padding: "80px", color: "#585959", background: "#fafafa" }}
    >
      <div className={styles.title}>
        <p>People Also Bought</p>
      </div>*/
      <div>

      <div className={styles.cardStyle}>
        <Card>
          <div className={styles.innercardStyle}>
            <div>
              <img width="100%" src={cars} />
            </div>

            <div>
              <p style={{ margin: "10px" }}>{props.title}</p>
            </div>
          </div>

          <div className={styles.lowercardStyle}>
            <div>
              <p style={{ color: "#777" }}>{props.model}</p>
            </div>
            <div>
              <p style={{ color: "#c32323", marginLeft: "20px" }}>{props.price}</p>
            </div>
          </div>
        </Card>
      </div>
       </div>
  );
};


export default ProductData;
