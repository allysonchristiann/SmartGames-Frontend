function makeGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}
function createCard(game){

    var html = '<div id="card" onClick="openModal('+game.id+')">'+ 
    '<img src="' + game.image +'" alt="" class="product-img">'+
    '<p>' + game.name + '</p>' +
    '</div>';
    
    return html;
}

function main(){
    var gameData = makeGet("http://192.168.100.6:3333/game")
    var game = JSON.parse(gameData);
    var cardContainer = document.getElementById("games-section")
    game.forEach(element => {
        let card = createCard(element);
        cardContainer.innerHTML += card
    });
}
main()
