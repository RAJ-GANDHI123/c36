class Player{
    constructor(){

    }

    getCount(){
        var playerCountRef = database.ref('playerCount')
        playerCountRef.on("value", function (data) {
            // fetch data n store in my var playerCount 
            playerCount = data.val();

        })
    }

    updateCount(count){
        database.ref('/').update({
            playerCount: count
        })

    }

    update(name){
        var playerIndex = 'player'+playerCount
        database.ref(playerIndex).set({
            name: name
        })
    }

}