import React, { useEffect, useState } from "react";
import styles from "./pdfviewer.css";

const Fileapi = () => {
  return (
    <React.Fragment>
        <h1 className={styles.heading}>Attachments</h1>
      <div className={styles.anchorContainer}>
        <a
          href="api/dataentities/EA/documents/f9a63520-7389-11ec-82ac-1229fe56ec59/attachments/attachments/omicron_healthupdate.pdf"
          className={styles.anchorTag}
        >
          <img
            src="https://icones.pro/wp-content/uploads/2021/03/icone-pdf-symbole-png-rouge.png"
            width="100px"
          />
          <div>Click here to Open the pdf</div>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <img
          src="api/dataentities/EA/documents/f9a63520-7389-11ec-82ac-1229fe56ec59/attachments/attachments/nissan-icon.png"
          width="300px"
          height="200px"
        />
      </div>
      <div className={styles.anchorContainer}>
        <a
          href="api/dataentities/EA/documents/f9a63520-7389-11ec-82ac-1229fe56ec59/attachments/attachments/Tony-Address-Banner.css.txt"
          className={styles.anchorTag}
        >
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/txt-file-20-504249.png"
            width="100px"
          />
          <div>Click here to Open the text file</div>
        </a>
      </div>
    </React.Fragment>
  );
};
export default Fileapi;
