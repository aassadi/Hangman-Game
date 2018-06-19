

var winTimes =1;
var wins = 0;
var loses = 10;
var words =[ "panda", "dolphin","koala"];
var wrongLetter=[""];
var underscore=[];

function gameStar(){

var randWord = words[Math.floor(Math.random() * words.length)];{
    console.log(randWord);
}

//image show after winning.
function image(){
    var image = document.getElementById("image").innerHTML;
    if (randWord===words[0]){

         image.src = "assets/images/panda.jpg";
        console.log(image);
    }
    if (randWord===words[1]){

        image.src = "assets/images/dolphin.jpg";
       console.log(image);
   }
    if (randWord===words[2]){

    image.src = "assets/images/koala.png";
   console.log(image);
}
}

// reset game after winnig.
function resetGame() {
  
    loses = 10;
    wrongLetter = [];
    randWord; 
    console.log(randWord);
    
for ( var i=0 ; i< randWord.length; i++){
    underscore[i] =" __ ";
       console.log(underscore); 
       document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
    }
    
}

resetGame();

//the underscore.


       document.getElementById("wins").innerHTML= wins;
       document.getElementById("loses").innerHTML= loses;  


//game start
document.onkeyup = function(event) {
   var  userGuess = event.key;
   console.log(userGuess);


  if( randWord.indexOf(userGuess)>-1){

    for ( var j = 0 ; j< randWord.length; j++){
    
    if ( randWord[j]=== userGuess){
    
        underscore[j] = userGuess;
       winTimes++;
       console.log(userGuess); 
    }
    }
   
 if (winTimes===((randWord.length) +1)){
       
    wins++;
    image();
    resetGame();
//    newword();  
    console.log(wins);

} 
    
 //if ( image[0]===words[0]){
    //image.sre("")
 //}

}else{

        loses--;
        wrongLetter.push(userGuess);
        console.log(loses);
           
    }if(loses===0){

        alert("game over");
       
    }   

   // resetGame();
    document.getElementById("underscore").innerHTML= ("")+ underscore.join("");
    document.getElementById("wins").innerHTML= wins;
    document.getElementById("loses").innerHTML= loses;
    document.getElementById("letters").innerHTML=  wrongLetter.join("");
        }
    }
    
    gameStar();


