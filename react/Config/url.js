//Update your store URL here.

export const storeURL = "https://echidna.myvtex.com";


// category tree API
export const deparmentURL = "/api/catalog_system/pub/category/tree/10";

// contact Us form data API
export const contactUsURL =
  "api/dataentities/client/search?_fields=_all&_schema=person";

//Menu Item API with schema approach
// export const menuItemURL =
// "api/dataentities/MenuItems/search?_schema=menuItem&_fields=title,menuId";

//Sub Item API with schema approach
// export const subItemURL =
// "api/dataentities/subItem/search?_schema=subItems&_fields=item,menuId";
//Dealers List  API
export const dealersListURL =
storeURL +
"/api/dataentities/DealerList/search?_schema=dealer&_fields=name,address,phone,zipNo,hostUrl,id";
// For getting seller list
export const sellerList =
  "/api/catalog_system/pvt/seller/list?sc=1&sellerType=1&isBetterScope=false";

// seller site redirecting urls

export const sellerSiteUrl = [
  "https://www.nissanusa.com/",
  "https://echidna.co/",
];

//Nissan seller site redirecting urls

export const nissanSellerSiteUrl = [
  "https://www.nissanusa.com/",
  "https://parts.nissanusa.com/",
];

export const dealerstoreURL = "https://tonynissan.myvtex.com";

// export const categoryURL ="api/dataentities/CA/search?_schema=category&_fields=category_id,banner_link,sub_category";
export const categoryURL =
  "/api/dataentities/CA/search?_schema=category&_fields=category_id,banner_link,sub_category";
