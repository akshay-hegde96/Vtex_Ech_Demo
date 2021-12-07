import React from 'react';
import Tabs from "./Tablist/Tabs";
import styles from './model.css';
import nissan_placeholder_image from "../../../assets/jellybean-placeholder.png";

const modelData = [
  {
    label: "POPULAR MODELS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Altima"},
      {url: "javascript:void(0)", modelName: "Leaf"},
      {url: "javascript:void(0)", modelName: "Maxima"},
      {url: "javascript:void(0)", modelName: "Rogue"},
      {url: "javascript:void(0)", modelName: "Sentra"},
      {url: "javascript:void(0)", modelName: "Titan"}
    ]
  },
  {
    label: "CARS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Altima"},
      {url: "javascript:void(0)", modelName: "Leaf"},
      {url: "javascript:void(0)", modelName: "Maxima"},
      {url: "javascript:void(0)", modelName: "Versa"},
      {url: "javascript:void(0)", modelName: "Sentra"},
      {url: "javascript:void(0)", modelName: "Versa Note"}
    ]
  },
  {
    label: "CLASSICS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "200SX"},
      {url: "javascript:void(0)", modelName: "240SX"},
      {url: "javascript:void(0)", modelName: "240Z"},
      {url: "javascript:void(0)", modelName: "260Z"},
      {url: "javascript:void(0)", modelName: "280Z"},
      {url: "javascript:void(0)", modelName: "280ZX"},
      {url: "javascript:void(0)", modelName: "300ZX"},
      {url: "javascript:void(0)", modelName: "310"},
      {url: "javascript:void(0)", modelName: "310GX"},
      {url: "javascript:void(0)", modelName: "350Z"},
      {url: "javascript:void(0)", modelName: "410"},
      {url: "javascript:void(0)", modelName: "411"}
    ]
  },
  {
    label: "COMMERCIAL",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Frontier"},
      {url: "javascript:void(0)", modelName: "NV1500"},
      {url: "javascript:void(0)", modelName: "NV200 Taxi"},
      {url: "javascript:void(0)", modelName: "NV2500"},
      {url: "javascript:void(0)", modelName: "NV3500"},
      {url: "javascript:void(0)", modelName: "Titan"}
    ]
  },
  {
    label: "CROSSOVERS & SUVS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Armada"},
      {url: "javascript:void(0)", modelName: "Juke"},
      {url: "javascript:void(0)", modelName: "Kicks"},
      {url: "javascript:void(0)", modelName: "Murano"},
      {url: "javascript:void(0)", modelName: "Path Finder"},
      {url: "javascript:void(0)", modelName: "Quest"},
      {url: "javascript:void(0)", modelName: "Rogue"},
      {url: "javascript:void(0)", modelName: "Rogue Sport"}
    ]
  },
  {
    label: "ELECTRIC",
    contentType: "date",
    content: [
      {url: "javascript:void(0)", modelName: "2021"},
      {url: "javascript:void(0)", modelName: "2020"},
      {url: "javascript:void(0)", modelName: "2019"},
      {url: "javascript:void(0)", modelName: "2018"},
      {url: "javascript:void(0)", modelName: "2017"},
      {url: "javascript:void(0)", modelName: "2016"}
    ]
  },
  {
    label: "SPORTS CARS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "370Z"},
      {url: "javascript:void(0)", modelName: "GT-R"}
    ]
  },
  {
    label: "TRUCKS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Frontier"},
      {url: "javascript:void(0)", modelName: "Titan"}
    ]
  }
];

function ModelTabs() {
  return (
    <div className={styles.modelTabWrapper}>
      <Tabs>
      {modelData.map((child) => {
        const type = child.contentType;
        return (
          <div label={child.label} className={styles.type}>
            <div className={styles.tabContentContainer}>
              <div className={styles.carModelContainer}>
                <ul className={styles.modelRange}>
                {child.content.map((contents) => {
                  return (
                    <li className={styles.modelList}>
                      <a href={contents.url} className={styles.modelAnchor}>
                        <img className={styles.carImage} src={nissan_placeholder_image} alt={contents.modelName} />
                        <h4 className={styles.modelTitle}>{contents.modelName}</h4>
                      </a>
                    </li>
                  )
                })}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
      </Tabs>
    </div>
  );
}

export default ModelTabs;