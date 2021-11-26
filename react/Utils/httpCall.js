export async function makeAPICall(appURL, method, reqRange, reqData) {
  if (method == "GET") {
    try {
      let header = new Headers();
      header.append("Content-Type", "application/json");
      if (reqRange) {
        header.append("REST-Range", `resources=${reqRange}`);
      }
      header.append("Access-Control-Allow-Methods", "GET, OPTIONS, POST, PUT");
      const response = await fetch(appURL, {
        mode: "cors",
        credentials: "include",
        method: method,
        headers: header,
      });
      let data = await response.json();
      //   console.log({ data });
      return data;
    } catch (e) {
      console.log(e);
    }
  } else if (method == "POST") {
  } else {
    /* Do Nothing */
  }
}
