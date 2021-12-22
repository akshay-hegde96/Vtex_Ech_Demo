import React from 'react';
import Accordion from "./Model/Accordion";
import styles from './modelAccordion.css';
// import nissan_placeholder_image from "../../../assets/jellybean-placeholder.png";

const modelData = [
  {
    label: "POPULAR MODELS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Altima" ,img: require('../../../assets/tabImages/jellybean-altima.png')},
      {url: "javascript:void(0)", modelName: "Leaf" ,img: require('../../../assets/tabImages/jellybean-leaf.png'  )},
      {url: "javascript:void(0)", modelName: "Maxima" ,img: require('../../../assets/tabImages/jellybean-maxima.png')},
      {url: "javascript:void(0)", modelName: "Rogue" ,img: require('../../../assets/tabImages/jellybean-rogue.png' )},
      {url: "javascript:void(0)", modelName: "Sentra",img: require('../../../assets/tabImages/jellybean-sentra.png')},
      {url: "javascript:void(0)", modelName: "Titan",img: require('../../../assets/tabImages/jellybean-titan.png' )}
    ]
  },
  {
    label: "CARS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Altima",img:require('../../../assets/tabImages/jellybean-altima.png'   )},
      {url: "javascript:void(0)", modelName: "Leaf",img:require('../../../assets/tabImages/jellybean-leaf.png'     )},
      {url: "javascript:void(0)", modelName: "Maxima",img:require('../../../assets/tabImages/jellybean-maxima.png'   )},
      {url: "javascript:void(0)", modelName: "Versa" ,img:require('../../../assets/tabImages/jellybean-versa.png'    )},
      {url: "javascript:void(0)", modelName: "Sentra" ,img:require('../../../assets/tabImages/jellybean-sentra.png'   )},
      {url: "javascript:void(0)", modelName: "Versa Note",img:require('../../../assets/tabImages/jellybean-versanote.png')}
    ]
  },
  {
    label: "CLASSICS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "200SX",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "240SX",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "240Z",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "260Z",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "280Z",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "280ZX",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "300ZX",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "310",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "310GX",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "350Z",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "410",  img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "411",  img:require('../../../assets/tabImages/jellybean-placeholder.png')}
    ]
  },
  {
    label: "COMMERCIAL",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Frontier",   img:require('../../../assets/tabImages/jellybean-frontier.png')},
      {url: "javascript:void(0)", modelName: "NV1500",     img:require('../../../assets/tabImages/jellybean-nvs.png')},
      {url: "javascript:void(0)", modelName: "NV200 Taxi",      img:require('../../../assets/tabImages/jellybean-nv.png')},
      {url: "javascript:void(0)", modelName: "NV2500", img:require('../../../assets/tabImages/jellybean-nv-taxi.png')},
      {url: "javascript:void(0)", modelName: "NV2500",     img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "NV3500",     img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "Titan",      img:require('../../../assets/tabImages/jellybean-titan.png')}
    ]
  },
  {
    label: "CROSSOVERS & SUVS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Armada",  img:require('../../../assets/tabImages/jellybean-armada.png')},
      {url: "javascript:void(0)", modelName: "Juke",    img:require('../../../assets/tabImages/jellybean-juke.png')},
      {url: "javascript:void(0)", modelName: "Kicks",   img:require('../../../assets/tabImages/jellybean-kicks.png')},
      {url: "javascript:void(0)", modelName: "Murano",  img:require('../../../assets/tabImages/jellybean-murano.png')},
      {url: "javascript:void(0)", modelName: "Path Finder",img:require('../../../assets/tabImages/jellybean-pathfinder.png')},
      {url: "javascript:void(0)", modelName: "Quest",      img:require('../../../assets/tabImages/jellybean-quest.png')},
      {url: "javascript:void(0)", modelName: "Rogue",      img:require('../../../assets/tabImages/jellybean-rogue.png')},
      {url: "javascript:void(0)", modelName: "Rogue Sport",img:require('../../../assets/tabImages/jellybean-roguesport.png')},
      {url: "javascript:void(0)", modelName: "Xterra",     img:require('../../../assets/tabImages/jellybean-xterra.png')}
    ]
  },
  {
    label: "ELECTRIC",
    contentType: "date",
    content: [
      {url: "javascript:void(0)", modelName: "2021",img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "2020",img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "2019",img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "2018",img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "2017",img:require('../../../assets/tabImages/jellybean-placeholder.png')},
      {url: "javascript:void(0)", modelName: "2016",img:require('../../../assets/tabImages/jellybean-placeholder.png')}
    ]
  },
  {
    label: "SPORTS CARS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "370Z",img:require('../../../assets/tabImages/jellybean-370zcoupe.png')},
      {url: "javascript:void(0)", modelName: "GT-R",img:require('../../../assets/tabImages/jellybean-gtr.png')}
    ]
  },
  {
    label: "TRUCKS",
    contentType: "car",
    content: [
      {url: "javascript:void(0)", modelName: "Frontier",img:require('../../../assets/tabImages/jellybean-frontier.png')},
      {url: "javascript:void(0)", modelName: "Titan",img:require('../../../assets/tabImages/jellybean-titan.png')}
    ]
  }
];

function ModelAccordion() {
  return (
    <div className={styles.modelAccordonWrapper}>
      <Accordion>
      {modelData.map((child, i) => {
        const type = child.contentType;
        return (
          <div label={child.label} className={styles.modelAccordion}>
            <div className={styles.tabContentContainer}>
              <div className={styles.carModelContainer}>
                <ul className={styles.modelRange}>
                {child.content.map((contents) => {
                  return (
                    <li className={styles.modelList}>
                      <a href={contents.url} className={styles.modelAnchor}>
                        <img className={styles.carImage} src={contents.img} alt={contents.modelName} />
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
      </Accordion>
    </div>
  );
}

export default ModelAccordion;