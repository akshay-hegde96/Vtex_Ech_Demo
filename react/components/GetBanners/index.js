// react/Countdown.tsx
import React, {useRef,useState,useEffect} from 'react'

import { useQuery} from 'react-apollo'

// import useProduct from 'vtex.product-context/useProduct'

import getBannerList from '../../queries/getBanner.graphql'

const GetBanners = () => {
const [html, setHtml] = useState("");
const spanRef = useRef(null);

 const { data, loading, error } = useQuery(getBannerList, {
   variables: {
    itemsPerPage:10,
    name:"cat",
    o:"name",
    page:1
   },
   ssr: false
 });

 console.log("data",{data})

 useEffect(() => {
     console.log(1111111);
    if (spanRef && spanRef.current) {
      spanRef.current.innerHTML = spanRef.current.getAttribute("html");
      console.log("test",spanRef.current.html);
    }
  });

if (loading) {
  return (
    <div>
      <span>Loading...</span>
    </div>
  )
}
if (error) {
    console.log(error);
  return (
    <div>
      <span>Error!</span>
    </div>
  )
}


else {
    var htmlString = "";
    data.getBanners.data.body.items.forEach(element => {
        htmlString = htmlString + element.html;
    })
    // setHtml(htmlString);
  return (
    <div>
       <span ref={spanRef} html={htmlString} id="test"/>
    </div>
  )
}

}

export default GetBanners;