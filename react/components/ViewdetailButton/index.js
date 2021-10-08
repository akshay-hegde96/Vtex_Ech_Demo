import React from 'react'
import { Button } from 'vtex.styleguide'
//import { useCssHandles } from "vtex.css-handles"
import styles from './index.css';



const ViewdetailButton=({ AddListenBtn }) => {
  
   // const {AddToListenBtn} = props;
    const initialState = { isLoading1: true, isLoading2: true, isLoading3: true  };
    return (
       
        <div className={styles.mt4}>
          <div className="mt4" >
            <Button 
             variation="primary" size="small"
            //   onClick={() => setState({ isLoading2: !state.isLoading2 })}
            //   isLoading={state.isLoading2}
            >
              View Details
              </Button>
             <AddListenBtn/>
            
          </div>
        </div>
    )
}

export default ViewdetailButton
