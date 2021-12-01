import React, { useEffect } from "react";

import styles from "./TableFooter.css";

const TableFooter = ({ range, setPage, page, slicedData }) => {
  useEffect(() => {
    if (slicedData.length < 1 && page !== 1) {
      setPage(page - 1);
    }
  }, [slicedData, page, setPage]);
  return (
    <div className={styles.tableFooter}>
      {range.map((el, index) => (
        <button
          key={index}
          className={`${styles.button} ${
            page === el ? styles.activeButton : styles.inactiveButton
          }`}
          onClick={() => setPage(el)}
        >
          {el}
        </button>
      ))}
    </div>
  );
};

export default TableFooter;
