const pokemonList = document.getElementById('pokemonList');

pokeApi.getPokemon().then(function(response) {
        const listItems = []
        for (let index = 0; index < response.length; index++) {
            const pokemon = response[index];
            listItems.push(convertPokemonToLi(pokemon))
        }
        console.log(listItems)
    })


function convertPokemonToLi (pokemon) {
    return `
        <li class="species">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        <li class="type">grass</li>
                        <li class="type">poison</li>
                    </ol>
                    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/1.svg" alt="${pokemon.name}">
                </div>
        </li>
    `
}



    

