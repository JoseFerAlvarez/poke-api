const container = document.querySelector(".container");

export function createPokemon(pokeData) {
  const name = pokeData.name;
  const image = pokeData.sprites.front_default;
  const height = pokeData.height;
  const weight = pokeData.weight;

  const divCard = document.createElement("div");
  divCard.setAttribute("data-tilt", "");
  divCard.className = "card";

  const pName = document.createElement("p");
  pName.className = "name";
  pName.textContent = name;
  divCard.appendChild(pName);

  const imgPoke = document.createElement("img");
  imgPoke.src = image;
  imgPoke.className = "image";
  divCard.appendChild(imgPoke);

  const pHeight = document.createElement("p");
  pHeight.className = "height";
  pHeight.textContent = "Altura : " + height;
  divCard.appendChild(pHeight);

  const pWeight = document.createElement("p");
  pWeight.className = "weight";
  pWeight.textContent = "Peso : " + weight;
  divCard.appendChild(pWeight);

  container.appendChild(divCard);
};
