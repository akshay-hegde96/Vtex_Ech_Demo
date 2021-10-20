import styles from "./BeautyData.css";

const BeautyData = () => {
  return (
    <div className={styles.BeautyDataContainer}>
      <div className={styles.fieldContainer}>
        <h4>Hair Color</h4>
        <p>Black</p>
      </div>
      <div className={styles.fieldContainer}>
        <h4>Eye Color</h4>
        <p>Brown</p>
      </div>
    </div>
  );
};

export default BeautyData;
