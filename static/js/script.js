function ageindays(){
    var birth = prompt("In what year were you born friend ?") ;
    var days = (2022 - birth)*365 ; 
    console.log(days ) ; 
    var h1  = document.createElement("h1" ) ;
    var textans = document.createTextNode('you are ' + days + 'old ') ; 
    h1.setAttribute(  'id' , 'ageindays') ; 
   h1.appendChild(textans) ; 
   document.getElementById('ans').appendChild(h1) ; 


}
function reset(){
    document.getElementById('ageindays').remove() ;
}
// generate cat 
function generatecat(){
    var image = document.createElement("img" ) ; 
    var div = document.getElementById("cat-gen") ; 
    image.src = "https://cdn2.thecatapi.com/images/12n.png"
    div.appendChild(image) ; 



}
//blackjack 
    
    let blackjackGame = {
        'you': {'scoreSpan': '#your-blackjack-result', 'div' : '.your-box','boxsize' : '.flex-Blackjack-row-2 div', 'score': 0,},    
        'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div' : '.dealer-box','boxsize': '.flex-Blackjack-row-2 div', 'score': 0,},
             
             
           
        cards: ['2', '3', '4','5', '6', '7', '8', '9', '10', 'K', 'J', 'Q', 'A'],
         cardsmap: {'2': 2, '3': 3, '4': 4 ,'5': 5 , '6': 6, '7': 7, '8': 8 , '9': 9 ,'10': 10 ,'K': 10 ,'J': 10 , 'Q': 10, 'A': [ 1 , 11] },

         wins: 0,
         losses: 0,
         draws: 0,
         isStand: false,
         isTurnOver: false,
         pressOnce: false,
    };
    const YOU = blackjackGame['you'];
    const DEALER = blackjackGame['dealer']; 
   
   // document.querySelector('#Blackjack-deal-button').addEventListener('click' ,blackjackdeal);
 // let abc =   document.querySelector('#Blackjack-hit-button' ) ; 
   //  abc.addEventListener('click' , Blackjackhit) ;
    const hitsound = new Audio("static/sounds/swish.m4a");
    const winSound = new Audio("static/sounds/cash.mp3");
    const loseSound = new Audio("static/sounds/aww.mp3");
    let windowwidth = window.screen.width;
    let windowheight = window.screen.height;
    let winner;
    document.querySelector("#blackjack-hit-button").addEventListener("click", blackjackHit) ;
    document.querySelector('#blackjack-stand-button').addEventListener('click',blackjackstand);
    document.querySelector('#blackjack-deal-button').addEventListener('click',blackjackdeal);
    document.querySelector('#blackjack-restart-button').addEventListener('click',blackjackrestart);

    function blackjackHit()  {
       // alert('u just clicked me');
       if(blackjackGame['isStand']===false)
       {
        let card = randomcard();
        showcard(card,YOU);
        updatescore(card, YOU);
        showscore(YOU);
       }
    //     const youDiv = document.createElement('div');
    //     youDiv.classList.add([YOU['div']]);
    //     let cardImage = document.createElement('img');
    //     cardImage.src = "static/images/Q.png";
    //     youDiv.appendChild(cardImage);
    //     console.log(card) ;
    //     showcard( card ,YOU) ; 
    //     updatescore(card , YOU );
    //     showscore(YOU) ;
    //    div.appendChild(cardImage);
    } 
     function randomcard() {
        let randomIndex = Math.floor(Math.random() * 13) ;
        return blackjackGame["cards"][randomIndex];
    }
    function showcard( card ,activePlayer) {
       if(activePlayer['score']<=21){
        let cardImage = document.createElement('img') ;
        cardImage.src = `static/images/${card}.png`;
        cardImage.style = `width: ${widthSize()}; height : ${heightSize()};`;
        document.querySelector(activePlayer['div']).appendChild(cardImage) ;
        hitsound.play();
       }  

    }
    function widthSize(){
        if(windowwidth > 1000){
            let newWidthSize = window.screen.width * 0.1;
            return newWidthSize;
        }
        else{
            window.screen.width * 0.18;
        }
    }
    function heightSize(){
        if(windowwidth > 700){
            let newHeightSize = window.screen.height * 0.18;
            return newHeightSize;
        }
        else{
            window.screen.height * 0.15;
        }
    }

    function updatescore( card , activePlayer ) {
        if(card === 'A')
        {
            //adding it in current makes new score <= 21 
            if(activePlayer['score'] + blackjackGame['cardsmap'][card][1] <= 21 )
            {
                activePlayer['score'] +=  blackjackGame['cardsmap'][card][1];
            } 
            else
            {
                activePlayer['score'] +=  blackjackGame['cardsmap'][card][0];
            }
        }
        else{
            activePlayer['score'] += blackjackGame['cardsmap'][card];
        }
          
    }
    function showscore(activePlayer)
    {   if(activePlayer['score'] > 21 )
        {
            document.querySelector(activePlayer['scoreSpan']).textContent = 'Busted!';
            document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
        }
        else{
            document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
        }
        
    }
    function blackjackstand(){
        if(blackjackGame.pressOnce === false)
        {
               blackjackGame['isStand'] = true;
               let yourImages =  document.querySelector(".your-box").querySelectorAll("img");
        
        
        for(let i = 0; i < yourImages.length ; i++)
        {
            let card = randomcard();
            showcard(card, DEALER);
            updatescore(card, DEALER);
            showscore(DEALER);

         
             

        }
        blackjackGame['isTurnOver'] = true;
        computeWinner();
        showwinner(winner);
    }
        
    blackjackGame.pressOnce = true ;

    }

    function computeWinner()
    {
        if(YOU['score']<=21)
        {
            if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21)
            {
                winner = YOU;
            }
            else if(YOU['score'] < DEALER['score'] || YOU['score'] > 21 )
            {
                winner = DEALER ;
            }
            else if(YOU['score'] === DEALER['score'])
            {
                winner = 'Draw';
            }

        }
        else if(YOU['score']>21 && DEALER['score'] <= 21 )
        {
            winner =  DEALER;
        }
        else if(YOU['score'] > 21 && DEALER['score'] > 21 )
        {
            winner = "None";
        }
        return winner ;

    }
    function showwinner() {
        let message, messagecolor;
        if(winner === YOU)
        {
            message = "You Won!";

            messagecolor = '#00e676';
            document.querySelector('#wins').textContent = blackjackGame['wins'] += 1;
            winSound.play();
        }
        if(winner === DEALER)
        {
            message = "You Lost!";

            messagecolor = 'red';
            document.querySelector('#losses').textContent = blackjackGame['losses'] += 1;
            loseSound.play();
        }   
        if(winner === 'Draw')
        {
            message = "DRAW!";

            messagecolor = 'yellow';
            document.querySelector('#draws').textContent = blackjackGame['draws'] += 1;
            loseSound.play();
        }
        if(winner === 'None')
        {
            message = "You Both Busted!";

            messagecolor = 'orange';
            loseSound.play();
        }
        document.querySelector('#blackjack-result').textContent = message;
        document.querySelector('#blackjack-result').style.color = messagecolor;

    }
    function blackjackdeal() {
        
        if(blackjackGame['isTurnOver'] === true)
        {
            let yourImages = document.querySelector('.your-box').querySelectorAll('img') ;
            let dealerImages = document.querySelector('.dealer-box').querySelectorAll('img') ;
            for( i = 0 ; i < yourImages.length; i++){
                  yourImages[i].remove();
            }
            for( i = 0 ; i < dealerImages.length; i++){
                dealerImages[i].remove();
          }
          YOU['score'] = DEALER['score'] = 0;
          document.querySelector('#your-blackjack-result').textContent = 0;
          document.querySelector('#dealer-blackjack-result').textContent = 0;

          document.querySelector('#your-blackjack-result').style.color = 'white';
          document.querySelector('#dealer-blackjack-result').style.color = 'white';

          document.querySelector('#blackjack-result').textContent = 'Lets Play';
          document.querySelector('#blackjack-result').style.color = 'white';
         
           blackjackGame['isStand'] = false;
           blackjackGame.pressOnce = false;




        }
      
    }
    function blackjackrestart(){
          blackjackdeal();
          document.querySelector('#wins').textContent = 0;
          document.querySelector('#losses').textContent = 0;
          document.querySelector('#draws').textContent = 0;

          blackjackGame.wins = 0;
          blackjackGame.losses = 0;
          blackjackGame.draws = 0;


    }

   
    



