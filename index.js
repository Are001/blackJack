if(typeof window !=="undefined"){
   
    let cards =[];
    let sum= 0;
    let hasBlackJack = false;
    let isAlive=false ;
    let message =" ";
    let messageEl = document.getElementById("message-el");
    let sumEl =  document.getElementById("sum")
    let cardsEl = document.getElementById("cards-el");
    let player = {
        namePlayer: "Aron",
        chips :"xx"
    }
        


    playerEl =  document.getElementById("player-el");
    playerEl.textContent = player.namePlayer + " " + player.chips;

    function getRandomCard(){
        let randomNumber =  Math.floor(Math.random()*13)+1;
       if(randomNumber === 1){
        return 11;
       }else if(randomNumber >10 ){
        return  10;
       }else{
        return randomNumber;
       }

    }

    function startGame( ){
        isAlive= true;
        let firstCard = getRandomCard();
        let secondCard = getRandomCard();
        cards = [firstCard, secondCard]
        sum = firstCard + secondCard;
        renderGame();
    }
    function renderGame(){
        cardsEl.textContent = "Cards: ";
        for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += cards[i] + " ";            
        }

        sumEl.textContent = "Sum: " + sum;
     
        if (sum<=20) {
            console.log("click");
            message = "Do you want to draw a new card";
        }else if(sum===21){
            message ="You've got black Jack";
            hasBlackJack =true;
        }else{
            message=    "You've out of the game "
            isAlive=false;
        }
      
        messageEl.textContent = message;
        console.log(message);
    }
    
     
    function newCard(){
        if(isAlive === true && hasBlackJack === false){
            let card = getRandomCard();
            sum +=card;
            cards.push(card);
            renderGame();
        }else{
            console.log("try the new");
        }
        
    }
    

}


