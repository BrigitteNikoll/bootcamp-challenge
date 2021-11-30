
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
  console.log(pokemon)
  pokecard(pokemon);

};

fetching();

function pokecard(pokemon) {
  let containCars = document.createElement("div");
  containCars.classList.add("pokemon");
  containCars.innerHTML = `
  <div class="pkm-card">${pokemon.name}
  <img class="pkm-images" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png"/>
  
  
  </div>
    `;
  containCars.addEventListener('click', () => {
    console.log("hola")
    let open = document.querySelector(".modalBackground");
      let openContain = document.querySelector(".modal");
      open.style.visibility = "visible";
      open.style.opacity = "1";
      openContain.style.visibility = "visible";
      openContain.style.opacity = "1";
      document.querySelector(".modal").innerHTML = "";
      document.querySelector(".modal").innerHTML += `
      <div class="pkm-card">${pokemon.id}
     
      <div class="type"> ${pokemon.types[0].type.name}</div>
      </div>`
  })
  let closeModal = document.getElementById("close");
  closeModal.addEventListener("click", () => {
    let close = document.querySelector(".modalBackground");
    let closeModal = document.querySelector(".modal");
    close.style.visibility = "hidden";
    close.style.visibility = "0";
    closeModal.style.visibility = "hidden";
    closeModal.style.visibility = "0";
  });
  container.appendChild(containCars);
}
