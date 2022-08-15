const baseUrl = "https://pokeapi.co/api/v2";
const query = {
  pokemon: "pokemon",
};

//generates get url for api for a specific pokemon according to search bar
export async function fetchPokemon(pokemon) {
  console.log(`${baseUrl}/${query.pokemon}/${pokemon}`);
  return fetch(`${baseUrl}/${query.pokemon}/${pokemon}`);
}
