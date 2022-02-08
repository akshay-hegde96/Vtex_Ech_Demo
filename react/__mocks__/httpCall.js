import fetch from "node-fetch";

export async function makeAPICall(method) {
        let header = new Headers();
        header.append("Content-Type", "application/json");
        header.append("Access-Control-Allow-Methods", "GET");
        return fetch("https://echidna.vtexcommercestable.com.br/api/catalog_system/pub/category/tree/10", {
          mode: "cors",
          credentials: "include",
          method: method,
          headers: header,
        }
      
        )
        .then((response)=>{
            return response.json();
        })
    }