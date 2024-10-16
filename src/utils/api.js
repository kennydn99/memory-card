export const fetchCardData = async () => {
  try {
    // Generate an array of 12 unique random numbers between 1 and 150
    const randomIds = generateRandomIds(12, 150);

    // Fetch data for each of the random Pokémon
    const pokemonPromises = randomIds.map((id) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
    );

    // Wait for all promises to resolve and extract relevant data
    const pokemonData = await Promise.all(pokemonPromises);

    return pokemonData.map((pokemon) => ({
      id: pokemon.id,
      name: pokemon.name,
      image: pokemon.sprites.front_default, // Use default front sprite
    }));
  } catch (error) {
    console.error("Failed to fetch the data:", error);
    return [];
  }
};

// Helper function to generate an array of unique random numbers
const generateRandomIds = (count, max) => {
  const randomIds = new Set();

  while (randomIds.size < count) {
    const randomId = Math.floor(Math.random() * max) + 1; // Generate numbers between 1 and `max`
    randomIds.add(randomId);
  }

  return Array.from(randomIds);
};
