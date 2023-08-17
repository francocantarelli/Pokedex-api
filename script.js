
const searchButton = document.getElementById("searchButton");
const pokemonInfo = document.getElementById("pokemonInfo");

searchButton.addEventListener("click", async () => {
  const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    const data = await response.json();

    const numeroPokemon = data.id;
    const imagenPokemon = data.sprites.front_default;
    const nombrePokemon = data.name.toUpperCase();
    const tipos = data.types.map(type => type.type.name).join(", ");

    const html = `
      <img src="${imagenPokemon}" alt="${nombrePokemon}">
      <h2>${nombrePokemon}</h2>
      <p><strong>Número: </strong> ${numeroPokemon} </p>
      <p><strong>Tipo: </strong> ${tipos} </p>
    `;
    
    pokemonInfo.innerHTML = html;
    
  } catch (error) {
    pokemonInfo.innerHTML = "Pokémon no encontrado.";
    
  }
});