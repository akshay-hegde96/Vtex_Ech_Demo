// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import documentSchemaDetails from '../../queries/documentSchema.graphql'

const DocumentSchema = () => {
   
 const { data, loading, error } = useQuery(documentSchemaDetails, {
   variables: {
    dataEntity:"name",
    schema:"document"
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
    <h1> {data.documentSchema.name} </h1>  
    <h3> {data.documentSchema.properties.name} </h3>
    </div>
  )
}

}

export default DocumentSchema;