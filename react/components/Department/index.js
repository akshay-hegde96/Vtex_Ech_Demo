import React, { useState, useEffect } from "react";
import styles from "./Department.css";
import { deparmentURL, categoryURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall";
//import img from "../../../assets/CLPassets/engine_135.png";

const Department = (props) => {
  const AccessoriesShelf = props.AccessoriesShelf;
  const CarPartsShelf = props.CarPartsShelf;
  const MerchandiseShelf = props.MerchandiseShelf;
  const NismoShelf = props.NismoShelf;
  const id = parseInt(props.params.clp_id);
  const [depart, setDepart] = useState([]);
  const [catg, setCatg] = useState([]);
  useEffect(() => {
    const makeDepartmentAPICall = async () => {
      const data = await makeAPICall(deparmentURL, "GET");
      console.log({ data });
      setDepart([...data]);
    };

    const makeCategoryAPICall = async () => {
      const res = await makeAPICall(categoryURL, "GET");
      console.log(res);
      setCatg(res);
    };

    makeDepartmentAPICall();
    makeCategoryAPICall();
  }, []);
  //---------------------------------------------
  const deptName =
    depart &&
    depart.filter((depart) => depart.id === id).map((ele) => ele.name);
  const bannerText = deptName && deptName[0];
  console.log(bannerText);
  const catArray = catg && catg.filter((arr) => arr.category_id === id);
  const banner_Link = catArray && catArray.map((ele) => ele.banner_link);
  console.log(banner_Link[0]);
  const sub_category = catArray && catArray.map((ele) => ele.sub_category);
  const sub_catImgArr = sub_category[0] && sub_category[0].split(",");
  console.log(sub_catImgArr);
  const sub_catImgArrlength = sub_catImgArr && sub_catImgArr.length;
  // ===================================

  return (
    <React.Fragment>
      <div className={styles.banner}>
        {banner_Link[0] && (
          <img
            src={`${banner_Link[0]}`}
            alt="Banner_img"
            className={styles.banner}
          />
        )}
        <div className={styles.bannerText}>
          <h4>NISSAN PARTS & ACCESSORIES ONLINE</h4>
          <h2>GENUINE 2020 NISSAN {bannerText}* PARTS</h2>
          <p>
            A 2020 Nissan {bannerText} combines innovation and efficiency with
            uncompromised driving enjoyment. Repairing or updating your 2020
            Nissan {bannerText} with OEM parts ensures that same excitement for
            the full life of your Nissan.
          </p>
        </div>
      </div>

      <h2 className={styles.textAlignment}>
        Select a 2020 Nissan {bannerText}
      </h2>
      {depart &&
        depart
          .filter((depart) => depart.id === id)
          .map((CarDepart) => {
            return (
              <div key={CarDepart.id} className={styles.catrow}>
                {CarDepart &&
                  CarDepart.children.map((category, i) => {
                    return (
                      (i < sub_catImgArrlength && (
                        <div key={category.id} className={styles.catcolumn}>
                          <a href={category.url}>
                            {sub_catImgArr && (
                              <img
                                src={`${sub_catImgArr[i]}`}
                                alt="img"
                                //className={styles.imgCont}
                                className={styles.imgSize}
                              />
                            )}
                            <h3 className={styles.imgName}>{category.name}</h3>
                          </a>
                        </div>
                      )) ||
                      (i >= sub_catImgArrlength && (
                        <div key={category.id} className={styles.catcolumn}>
                          <a href={category.url}>
                            <img
                              src={`${sub_catImgArr[0]}`}
                              alt="img"
                              //className={styles.imgCont}
                              className={styles.imgSize}
                            />

                            <h3 className={styles.imgName}>{category.name}</h3>
                          </a>
                        </div>
                      ))
                    );
                  })}
              </div>
            );
          })}
      <div>
        <h2 className={styles.shelfName}>Featured Parts & Accessories</h2>
        {(id === 167 && <AccessoriesShelf />) ||
          (id === 135 && <CarPartsShelf />) ||
          (id === 128 && <NismoShelf />) ||
          (id === 175 && <MerchandiseShelf />)}
      </div>
    </React.Fragment>
  );
};
export default Department;
