// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getCheckoutDetails from '../../queries/checkoutProfile.graphql'

const CheckoutDetails = () => {
   
 const { data, loading, error } = useQuery(getCheckoutDetails, {
   variables: {
    email:"deepika.y@echidnainc.com"
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
        {data.checkoutProfile.availableAccounts.map((item,i)=>{
          return<li key={i}>{item.accountId} - {item.paymentSystemName} </li>
          
        })}
        
    </ul>
    </div>
  )
}

}

export default CheckoutDetails;