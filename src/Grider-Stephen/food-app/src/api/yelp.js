import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer hkJmn92Neg23Ci0RSdwqrSldOYvHUEqgnnM67onBkAsp8ySU5ivSWNUHgHxhXOHj_jdHcnyPKP9yNlJnV8L4pC3Uh2B0FEqOLE_WdygR4PNEia8fB4CM9gy0JshuXXYx"
  }
});
