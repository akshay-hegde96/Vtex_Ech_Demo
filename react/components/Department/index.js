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
                      {i === 0 && (
                        <img
                          src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/4183CF74-EC66-4EEB-BC8E-C38F0E16A44B.png"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 1 && (
                        <img
                          src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/93AC9544-006D-4097-AC09-8C9DB66D0EC5.png"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 2 && (
                        <img
                          src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/C97E7601-86BC-4AD0-9AFD-5926FA61F269.png"
                          className={styles.imgSize}
                        />
                      )}
                      {i === 3 && (
                        <img
                          src="https://cdn.zeplin.io/5fbf567269bf8798be530f65/assets/475473F1-F996-4D5D-87F7-CA8A51D74848.png"
                          className={styles.imgSize}
                        />
                      )}
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
