
import { storeURL } from "../../Config/url"

// const storeURL = window.location.href;
// const storeURL = window.location.hostname;



export const electronics = [

     {
        id:110,
        name:"TVs",
        hasChildren:false,
        url: storeURL + "/electronics/tvs",
        children:[],
        Title:"TVs",
        img:"https://www.bajajfinserv.in/Image_LED_TV_1_LED_354x202_desktop.jpg",
        MetaTagDescription:"This is a generic description of a Category."
       
    },
    {
        id:111,
        name:"Laptops",
        hasChildren:false,
        url: storeURL + "/electronics/laptops",
        children:[],
        Title:"Laptops",
        img:"https://cdn.thewirecutter.com/wp-content/media/2020/09/businesslaptops-2048px-9820.jpg",
        MetaTagDescription:"This is a generic description of a Category."
        
    },
    {
        id:112,
        name:"Cameras",
        hasChildren:true,
        url: storeURL + "/electronics/cameras",
        children:[],
        Title:"Cameras",
        img:"https://m.media-amazon.com/images/I/51+7Guk8aGL._SY450_.jpg",
        MetaTagDescription:"This is a generic description of a Category."
        
    },
    // {
    //     id:118,
    //     name:"Ele",
    //     hasChildren:false,
    //     url:storeURL + "/electronics/ele",
    //     children:[],
    //     Title:"",
    //     img:"https://styla-prod-us.imgix.net/271d9cdd-ab6b-4a7f-9dc2-32c5de213167/1598904552435_d0b62c94-3890-4a7b-a1b0-43c6e73319fc?auto=format%2Ccompress&w=1280&h=1067&fit=original",
    //     MetaTagDescription:""
        
    // },
    // {
    //     id:119,
    //     name:"Ele",
    //     hasChildren:false,
    //     url: storeURL +"/electronics/ele",
    //     children:[],
    //     Title:"",
    //     img:"https://styla-prod-us.imgix.net/271d9cdd-ab6b-4a7f-9dc2-32c5de213167/1598904552435_d0b62c94-3890-4a7b-a1b0-43c6e73319fc?auto=format%2Ccompress&w=1280&h=1067&fit=original",
    //     MetaTagDescription:""
        
    // }
  ]
  export const smallAppliances = [
    {
        id:107,
        name:"Mixers & Blenders",
        hasChildren:false,
        url: storeURL + "/small-appliances/mixers---blenders",
        children:[],
        Title:"Mixers & Blender",
        img:"https://healthykitchen101.com/wp-content/uploads/2021/03/Best-Ninja-Blenders-1.jpg",
        MetaTagDescription:"This is a generic description of a Category."
       
    },
    {
        id:108,
        name:"Toasters & Grills",
        hasChildren:false,
        url: storeURL + "/small-appliances/toasters---grills",
        children:[],
        Title:"Toasters & Grills",
        img:"https://images-eu.ssl-images-amazon.com/images/I/41pPfMqBpyL.__AC_SX300_SY300_QL70_ML2_.jpg",
        MetaTagDescription:"This is a generic description of a Category."
        
    },
    {
        id:109,
        name:"Coffee Makers",
        hasChildren:false,
        url: storeURL + "/small-appliances/coffee-makers",
        children:[],
        Title:"Coffee Makers",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Consumer_Reports_-_Zojirushi_coffeemaker_alt.tif/lossy-page1-1200px-Consumer_Reports_-_Zojirushi_coffeemaker_alt.tif.jpg",
        MetaTagDescription:"This is a generic description of a Category."
        
    },
    // {
    //     id:120,
    //     name:"Test-Anubhav",
    //     hasChildren:false,
    //     url: storeURL + "/small-appliances/test-anubhav",
    //     children:[],
    //     Title:"Echidna - Anubhav",
    //     img:"https://styla-prod-us.imgix.net/271d9cdd-ab6b-4a7f-9dc2-32c5de213167/1598904552435_d0b62c94-3890-4a7b-a1b0-43c6e73319fc?auto=format%2Ccompress&w=1280&h=1067&fit=original",
    //     MetaTagDescription:""
        
    // },

]

export const majorAppliances = [
 
    {
        id:104,
        name:"Refrigerators",
        hasChildren:false,
        url: storeURL + "/major-appliances/refrigerators",
        children:[],
        Title:"Refrigerators",
        img:"https://m.media-amazon.com/images/I/71A+zv1sxhL._SL1490_.jpg",
        MetaTagDescription:"This is a generic description of a Department."
        
    },
    {
        id:105,
        name:"Ranges & Ovens",
        hasChildren:false,
        url: storeURL + "/major-appliances/ranges---ovens",
        children:[],
        Title:"Ranges & Ovens",
        img:"https://www.thespruce.com/thmb/chpsf1xAiW1eW-hDWQTBBSe7Pjw=/1000x750/smart/filters:no_upscale()/SamsungNX58R5601SS-7c085f060046411e9c867583ffab5276.jpg",
        MetaTagDescription:"This is a generic description of a Department."
        
    },
    {
        id:106,
        name:"Washers & Dryers",
        hasChildren:false,
        url: storeURL + "/major-appliances/washers---dryers",
        children:[],
        Title:"Washers & Dryers",
        img:"https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/04/14/indybest-washer-dryers-combo-machine-0.jpg?width=1200",
        MetaTagDescription:"This is a generic description of a Category."
        
    },

]