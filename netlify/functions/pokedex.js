import fetch from 'node-fetch';

export const handler = async () => {
  const POKE_API = "https://pokeapi.co/api/v2/pokedex/kanto";
  try {
    const response = await fetch(POKE_API)
      .then((res) => res.json());
    // const pokedex = await response.json();
    return {
      statusCode: 200,
      body: JSON.stringify({ response }),
    }
  }
  catch (error) {
    console.log(error);
  }

}