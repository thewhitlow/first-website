function onPress(inputValue) {
    
    const url =  'https://pokeapi.co/api/v2/pokemon';
    $.get(url,function(data, status){
       if (status === 'success' ) {
        const pokemonNames = data.results.map(pokemon => {
            
        return '<h2>' + pokemon.names + '</h2>' ;
        });
        console.log(pokemonNames);
        document.getElementById("output").innerHTML = pokemonNames;
         } else {
            console.log("hi")
         }
    });
}
 
function showNames(pokemon) {
    return pokemon;
}