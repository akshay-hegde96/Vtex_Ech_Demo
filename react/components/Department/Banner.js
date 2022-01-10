import React from "react";
import styles from "./Department.css";

const Banner = (props) => {
    return (
        <div className={styles.banner}>
            {props.imgUrl && (
            <img
                src={`${props.imgUrl}`}
                alt="Banner_img"
                className={styles.banner}
            />
            )}
            <div className={styles.bannerText}>
                <h4>NISSAN PARTS & ACCESSORIES ONLINE</h4>
                <h2>GENUINE 2020 NISSAN {props.bannerText}* PARTS</h2>
                <p>
                    A 2020 Nissan {props.bannerText} combines innovation and efficiency with
                    uncompromised driving enjoyment. Repairing or updating your 2020
                    Nissan {props.bannerText} with OEM parts ensures that same excitement for
                    the full life of your Nissan.
                </p>
            </div>
        </div>
    )
};
export default Banner;