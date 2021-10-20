import styles from "./BeautyData.css";

const BeautyData = ({ render }) => {
  return (
    <div className={styles.title}>
      {render([
        { label: "Hair color", value: "Black" },
        { label: "Skin color", value: "Dusky" },
      ])}
    </div>
  );
};

export default BeautyData;
