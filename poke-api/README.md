/* const gettingData = () => {
  fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

gettingData() */
const container = document.getElementById("container");


const fetching = async () => {
  for (let i = 1; i <= 40; i++) {
    await gettingData(i);
  }
};

const gettingData = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  pokecard(pokemon);
};

fetching();

function pokecard(pokemon) {
  let pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const pokeInnerHtml = `

  <div class="pkm-card">${pokemon.name}
  <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
  <div class="type"> ${pokemon.types[0].type.name}</div>
  </div>
    `;
  pokemonEl.innerHTML = pokeInnerHtml;
  container.appendChild(pokemonEl);
}
