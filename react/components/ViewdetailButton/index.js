import React from 'react'
import { Button } from 'vtex.styleguide'
//import { useCssHandles } from "vtex.css-handles"
//import "./index.css" 



const ViewdetailButton=() => {
  
    const initialState = { isLoading1: true, isLoading2: true, isLoading3: true  };
    return (
       
        <div>
          <div className="mt4">
            <Button 
              variation="default"
            //   onClick={() => setState({ isLoading2: !state.isLoading2 })}
            //   isLoading={state.isLoading2}
            >
              View Details
             
            </Button>
          </div>
        </div>
    )
}

export default ViewdetailButton
