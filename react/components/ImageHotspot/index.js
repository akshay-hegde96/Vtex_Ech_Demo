import React,{useState} from 'react'
import ImageHotspots from 'react-image-hotspots'
import styles from "./image.css";

function index() {
    const [sampleText,setText] = useState("");
    const hotspotOne=()=>{
      
      setText("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s");
    }

    const hotspotTwo=()=>{
      setText("when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries");
    }

    const hotspotThree=()=>{
      setText("but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets");
    }

    const hotspotFour=()=>{
      setText("containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum");
    }


    const hotspots = [
        { x: 10, y: 20, content: <span onClick={hotspotOne} style={{ padding: 10 }}>Hotspot1</span> },
        { x: 50, y: 10, content: <span onClick={hotspotTwo} style={{ padding: 10 }}>Hotspot2</span> },
        { x: 30, y: 40, content: <span onClick={hotspotThree} style={{ padding: 10 }}>Hotspot3</span> },
        { x: 50, y: 60, content: <span onClick={hotspotFour} style={{ padding: 10 }}>Hotspot4</span> }
      ]
      
    return (
      <div>
        <div style={{ width: '450px', height: '350px' }} id={styles.imgHotspotContainer} className={styles.mapContainer}>
         
            <ImageHotspots
              src='https://filipecorrea.github.io/react-image-hotspots/static/media/landscape.f9859e85.jpg'
              alt='Sample image'
              hideFullscreenControl={false}
              hideZoomControls={false}
              hotspots={hotspots}
              hideMinimap={true}
            />
          </div>
          <div className={styles.textContainer}>
            <p>{sampleText}</p>
          </div>
          </div>
    )
}

export default index
