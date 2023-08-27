const dittoButton = document.getElementById('dittoButton')
const pikachuButton = document.getElementById('pikachuButton')
const charizardButton = document.getElementById('charizardButton')
const lucarioButton = document.getElementById('lucarioButton')
const charmanderButton = document.getElementById('charmanderButton')
const bulbasaurButton = document.getElementById('bulbasaurButton')

const pokemonImages = document.getElementById('pokemonImages')
const pokemonNameElement = document.getElementById('pokemonName')
const pokemonHeightElement = document.getElementById('pokemonHeight')
const pokemonWeightElement = document.getElementById('pokemonWeight')
const pokemonAbilitiesElement = document.getElementById('pokemonAbilities')

function fetchPokemonInfo(pokemonName, imageUrl) {
  const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}/`

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name
      const height = data.height
      const weight = data.weight
      const abilities = data.abilities
        .map((ability) => ability.ability.name)
        .join(', ')

      pokemonNameElement.textContent = name
      pokemonHeightElement.textContent = height
      pokemonWeightElement.textContent = weight
      pokemonAbilitiesElement.textContent = abilities

      const image = document.createElement('img')
      image.src = imageUrl
      image.alt = 'Pokémon'
      image.style.maxWidth = '400px'
      image.style.height = 'auto'
      pokemonImages.innerHTML = ''
      pokemonImages.appendChild(image)
    })
    .catch((error) => {
      console.error('Error fetching Pokémon information:', error)
    })
}

dittoButton.addEventListener('click', () =>
  fetchPokemonInfo('ditto', 'ditto.jpg')
)
pikachuButton.addEventListener('click', () =>
  fetchPokemonInfo('pikachu', 'pikachu.png')
)
charizardButton.addEventListener('click', () =>
  fetchPokemonInfo('charizard', 'charizard.jpg')
)
lucarioButton.addEventListener('click', () =>
  fetchPokemonInfo('lucario', 'lucario.png')
)
charmanderButton.addEventListener('click', () =>
  fetchPokemonInfo('charmander', 'charmander.png')
)
bulbasaurButton.addEventListener('click', () =>
  fetchPokemonInfo('bulbasaur', 'Bulbasaur.png')
)
