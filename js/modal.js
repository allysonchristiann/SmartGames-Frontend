function showModal(modalID, idGame){

    const modal = document.getElementById(modalID);
    var gameData = makeGet("http://192.168.100.6:3333/game/" + idGame)
    var game = JSON.parse(gameData);
    
    let modalContent = createModal(game);
    modal.innerHTML = modalContent

    modal.classList.add('show');
    modal.addEventListener('click', (e) => {
        if(e.target.id == modalID || e.target.className == 'close'){
            modal.classList.remove('show');
        }
    });
}

function openModal(id){
    showModal('modal-games', id)
}

function finishedPurchase(){
    alert("Compra efetuada com sucesso!");
}

function createModal(game){
    let consoles = '';
    game.Platforms.forEach(element => {
        if (consoles == '' || consoles == null) {
            consoles += element.name;
        }else{
            consoles += ', ' +element.name;
        }
    });
    let stores = '';
    game.Stores.forEach(element => {
        if (stores == '' || stores == null) {
            stores += element.place;
        }else{
            stores += ', ' +element.place;
        }
    });
    
    var html = '<div class="modal">' +
        '<button class="close">x</button>' +
        '<div class="game-information">'+
            '<div class="image">'+
            '<img src="' + game.image +'" style="width: 100%; height: 100%; object-fit: cover;">' +
            '</div>'+
            '<div class="description">'+
                '<h2>'+ game.name+ '</h2>'+
                '<div class="consols">'+
                    '<p>'+ consoles +'</p>'+
                '</div>'+
                '<div class="consols">'+
                    '<p> R$'+ game.price +',00</p>'+
                '</div>'+
                '<form>'+
                    '<input type="button" class="button" value="comprar" onClick="finishedPurchase()"/>'+
                '</form>'+
            '</div>'+
        '</div>'+
        '<div class="game-description">'+
            '<h2>Descrição:</h2>'+
            '<p>'+ game.description + '</p>'+
        '</div>'+
        '<div class="maps-qrcode">'+
            '<div class="maps">Lojas disponíveis: '+ stores + '</div>'+
            '<div class="qrcode">'+
            '</div>'+
        '</div>'+
    '</div>';
    
    return html;
}
