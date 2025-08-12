const pokemonList = document.getElementById('pokemonList');

function convertPokemonToLi (pokemon) {
    return `
        <li class="species ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
        </li>
    `
}

pokeApi.getPokemon().then(function(response = []) {
        const newHTML = response.map (convertPokemonToLi).join('');
        pokemonList.innerHTML += newHTML
    })

    




    

