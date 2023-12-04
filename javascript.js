function onPress(inputValue) {
    
    const url =  https//pokeapi.co/api/v2/pokemon
    $.get(url,function(data, status){
       if (status === 'success' ) {
        const pokemonNames = (data.results.map(showName))
        console.log(pokemonNames);
        document.getElementById("output").innerHTML = pokemonNames.join(' ');
         }
    });

        


}

function showNames(pokemon) {
    return pokemon.name
}