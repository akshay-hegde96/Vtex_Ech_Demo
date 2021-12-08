import React from 'react'
import { Button } from 'vtex.styleguide'
//import { useCssHandles } from "vtex.css-handles"
import styles from './index.css';



const ViewdetailButton=({ AddListenBtn }) => {
  
   // const {AddToListenBtn} = props;
    const initialState = { isLoading1: true, isLoading2: true, isLoading3: true  };
    return (
       
        <div className={styles.imageOverPosition}>
          <div className="mt4" >
            <Button id={styles.viewButton}>
             VIEW DETAILS
            </Button>
          </div>
        </div>
    )
}

export default ViewdetailButton
