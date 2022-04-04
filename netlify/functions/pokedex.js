const axios = require("axios");
exports.handler = async function(event, context) {
  const eventBody = JSON.parse(event.body);
  console.log(eventBody);
  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokedex/${eventBody.region}`,
  );
  return {
    statusCode: 200,
    body: JSON.stringify({
      pokemon: response.data.pokemon_entries,
    }),
  };
};
