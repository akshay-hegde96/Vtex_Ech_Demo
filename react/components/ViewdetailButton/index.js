import React from 'react'
import { Button } from 'vtex.styleguide'
//import { useCssHandles } from "vtex.css-handles"
//import "./index.css" 



const ViewdetailButton=({ AddListenBtn }) => {
  
   // const {AddToListenBtn} = props;
    const initialState = { isLoading1: true, isLoading2: true, isLoading3: true  };
    return (
       
        <div>
          <div className="mb4" >
            <Button 
             variation="primary" size="small"
            //   onClick={() => setState({ isLoading2: !state.isLoading2 })}
            //   isLoading={state.isLoading2}
            >
              View Details
             <AddListenBtn/>
            </Button>
          </div>
        </div>
    )
}

export default ViewdetailButton
