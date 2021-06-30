class Game{
    constructor(){
        
    }

    getState(){
        var gameStateRef = database.ref('gameState')
        gameStateRef.on("value", function (data) {
            // fetch data n store in my var playerCount
            gameState = data.val();

        })
    }

    update(state){
        database.ref('/').update({
            gameState: state
        })

    }

    start(){
        if(gameState === 0){
            player = new Player();
            player.getCount();

            form = new Form();
            form.display();
        }
    }
}