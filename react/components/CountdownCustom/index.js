// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getAttributesList from '../../queries/productReleaseDate.graphql'

const CustomCountdown = () => {
   
 const { data, loading, error } = useQuery(getAttributesList, {
   variables: {
     rename:true,
     onlyVisible:true
   },
   ssr: false
 });

 console.log("data",{data})

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
        data.getAttributes.data.body.map((attribute)=>{
          return <li>{attribute}</li>
        })
      }
      </ul>
    </div>
  )
}

}

export default CustomCountdown;