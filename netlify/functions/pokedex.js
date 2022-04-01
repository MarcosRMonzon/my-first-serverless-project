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
