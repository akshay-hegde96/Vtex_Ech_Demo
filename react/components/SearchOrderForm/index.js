// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getOrderDetails from '../../queries/searchOrderForm.graphql'

const OrderformDetails = () => {
   
 const { data, loading, error } = useQuery(getOrderDetails, {
   variables: {
    orderFormId:""
   },
   ssr: false
 });

  console.log("data",data)

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
        {data.searchOrderForm.orderFormId}
    </div>
  )
}

}

export default OrderformDetails;