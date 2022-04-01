const axios = require("axios");
exports.handler = async function() {
  const response = await axios
    .get("https://pokeapi.co/api/v2/pokemon/ditto")
    return {
        statusCode: 200,
        body: JSON.stringify({
          message: response.data.name,
        }),
      };
}

// exports.handler = async function() {
//   const POKET_API = "https://pokeapi.co/api/v2/pokemon/ditto";
//   const response = await fetch(POKET_API);
//   const data = await response.json();
//   console.log(data);

//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//   };
// };
