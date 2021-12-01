import React, { useState } from "react";

import useTable from "../Hooks/useTable";
import styles from "./Table.css";
import TableFooter from "./TableFooter/TableFooter";

const Table = ({ data, rowsPerPage }) => {
  const [page, setPage] = useState(1);
  const { slicedData, range } = useTable(data, page, rowsPerPage);
  return (
    <React.Fragment>
      <table className={styles.table}>
        <thead className={styles.tableRowHeader}>
          <tr>
            <th className={styles.tableHeader}>Id</th>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Email</th>
            <th className={styles.tableHeader}>Address</th>
            <th className={styles.tableHeader}>Agreement</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((usr) => (
            <tr className={styles.tableRowItems} key={usr.id}>
              <td className={styles.tableCell}>{usr.id}</td>
              <td
                className={styles.tableCell}
              >{`${usr.firstName} ${usr.lastName}`}</td>
              <td className={styles.tableCell}>{usr.createdBy_USER.Login}</td>
              <td
                className={styles.tableCell}
              >{`street no. ${usr.address.streetNumber}, ${usr.address.streetAddress}, ${usr.address.streetType} `}</td>
              <td className={styles.tableCell}>
                {usr.agreement ? "Yes" : "No"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TableFooter
        range={range}
        slicedData={slicedData}
        setPage={setPage}
        page={page}
      />
    </React.Fragment>
  );
};

export default Table;
