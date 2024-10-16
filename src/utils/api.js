export const fetchCardData = async () => {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=12");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();

    return data.results.map((pokemon, index) => ({
      id: index,
      name: pokemon.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
        index + 1
      }.png`,
    }));
  } catch (error) {
    console.error("Failed to fetch the data:", error);
    return [];
  }
};
