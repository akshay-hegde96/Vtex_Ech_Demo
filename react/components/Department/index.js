import React, { useState, useEffect } from "react";
import styles from "./Department.css";
import { storeURL, deparmentURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall";

const Department = (props) => {
  const id = parseInt(props.params.clp_id);
  const [depart, setDepart] = useState([]);
  let data;
  useEffect(() => {
    const makeDepartmentAPICall = async () => {
      data = await makeAPICall(deparmentURL, "GET");
      console.log({ data });
      setDepart([...data]);
    };

    makeDepartmentAPICall();
  }, []);

  // ===================================

  return (
    <React.Fragment>
      <h2 className={styles.textAlignment}> Select a 2020 Nissan Maxima SV 3.5L V6 CVT Category </h2>
      {depart
        .filter((depart) => depart.id === id)
        .map((CarDepart) => {
          return (
            <div key={CarDepart.id} className={styles.row}>
              {CarDepart.children.map((category, i) => {
                return (
                  <div key={category.id} className={styles.column}>
                    <a href={category.url}>
                        <img
                          src = {category.MetaTagDescription}
                          className={styles.imgSize}
                        />
                      <h3 className={styles.imgName}>{category.name}</h3>
                    </a>
                  </div>
                );
              })}
            </div>
          );
        })}
    </React.Fragment>
  );
};
export default Department;
