// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getAttributesValue from '../../queries/attributesValue.graphql'

const AttributeValue = () => {
   
 const { data, loading, error } = useQuery(getAttributesValue, {
   variables: {
    attribute:{
        value:"category"
      }
   },
   ssr: false
 });

//  console.log("data",JSON.stringify(data))

if (loading) {
  return (
    <div>
      <span>Loading...</span>
    </div>
  )
}
if (error) {
  return (
    <div>
      <span>Error!</span>
    </div>
  )
}


else {
  return (
    <div>
      <ul>
      {
        data.getAttributeValues.data.body.map((attribute)=>{
          return <li>{attribute}</li>
        })
      }
      </ul>
    </div>
  )
}

}

export default AttributeValue;