import React, { useState, useEffect } from "react";
import styles from "./Department.css";
import Banner from "./Banner.js";
import { deparmentURL, categoryURL } from "../../Config/url";
import { makeAPICall } from "../../Utils/httpCall";

const Department = (props) => {
  const id = parseInt(props.params.clp_id);
  const [depart, setDepart] = useState([]);
  const [catg, setCatg] = useState([]);
  useEffect(() => {
    const makeDepartmentAPICall = async () => {
      const data = await makeAPICall(deparmentURL, "GET");
      setDepart([...data]);
    };

    const makeCategoryAPICall = async () => {
      const res = await makeAPICall(categoryURL, "GET");
      setCatg(res);
    };

    makeDepartmentAPICall();
    makeCategoryAPICall();
  }, []);

  //---------------------------------------------
  const deptName = depart && depart.filter((depart) => depart.id === id).map((ele) => ele.name);
  const bannerText = deptName && deptName[0];
  const catArray = catg && catg.filter((arr) => arr.category_id === id);
  const banner_Link = catArray && catArray.map((ele) => ele.banner_link);
  const sub_category = catArray && catArray.map((ele) => ele.sub_category);
  const sub_catImgArr = sub_category[0] && sub_category[0].split(",");
  const sub_catImgArrlength = sub_catImgArr && sub_catImgArr.length;
  // ===================================

  return (
    <React.Fragment>
      <Banner imgUrl={banner_Link[0]} bannerText={bannerText} />

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
                  CarDepart.children.map((category, index) => {
                    return (
                      <div key={category.id} className={styles.catcolumn}>
                        {sub_catImgArr &&
                          sub_catImgArr.map((imgUrl, i)=>{
                            if( index === i) {
                              return (
                                <props.CategoryTiles categoryName={category.name} categoryUrl={category.url} imgUrl={imgUrl} />
                              );
                            }
                          })
                        }
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
