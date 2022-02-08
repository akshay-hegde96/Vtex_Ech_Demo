// react/Countdown.tsx
import React from 'react'

import { useQuery } from 'react-apollo'
// import { graphql } from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getCatalog from '../../queries/globalCategory.graphql'

/*function GlobalCatalog({ data }) {
  return (
    <div>
      {data.loading
        ? 'Loading'
        : data.globalCategory.children.map((item)=>{
          return <li>{item.name} - {item.id}
          </li>
          
        })
      }
    </div>
  )
}
export default graphql(getCatalog, {
  variables: {
   categoryId:135
  },
  ssr: false
})(GlobalCatalog)*/

const GlobalCatalog = () => {
   
 const { data, loading, error } = useQuery(getCatalog, {
   variables: {
    categoryId:135
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
      
        {data.globalCategory.children.map((item)=>{
          return <li key={item.id}>{item.name} - {item.id}
          </li>
          
        })}
     
    </ul>
    </div>
  )
}

}

 export default GlobalCatalog;