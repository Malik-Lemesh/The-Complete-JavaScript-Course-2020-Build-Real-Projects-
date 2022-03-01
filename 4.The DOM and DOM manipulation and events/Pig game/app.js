/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

//Math.floor() daje nam cijeli broj,a random daje random broj ali decimalni,pa zato ga moramo stavti u Math.floor
//dice = Math.floor(Math.random() * 6) + 1; //krece od jedan;
//daje nam samo text,ali ne i html content
// document.querySelector("#current-" + activePlayer).textContent = dice;
//daje nam mogucnost da uredujemo html tagove
// document.querySelector("#current-" + activePlayer).innerHTML =
//   "<em>" + dice + "</em>";

//koristenje querySelector samo za citanje i da ga stavimo u var. x
// var x = document.querySelector("#score-0").textContent;
// console.log(x); //dobijemo ispis 43

//funkcija koja se poziva kod CALLBACK
// function btn() {
//   //do something here
// }
// btn();
//dodajemo eventListener na btn-roll        /*bez zagrada jer zelimo da event pozove funkciju tzv.CALLBACK funkcija*/
//document.querySelector(".btn-roll").addEventListener("click", btn);
///////////////////////////////////////////////////////

var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;

//sakrivamo sliku sa display = 'none'
document.querySelector(".dice").style.display = "none";

//postavljamo sve vrijednosti na 0
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";
//anonimus funkcija
document.querySelector(".btn-roll").addEventListener("click", function () {
  //1.random number
  var dice = Math.floor(Math.random() * 6) + 1;

  //2.display the result
  var diceDOM = document.querySelector(".dice");
  diceDOM.style.display = "block";
  diceDOM.src = "dice-" + dice + ".png";

  //3.update the round score IF the rolled number was NOT a 1
  if (dice !== 1) {
    //Add score
    roundScore += dice; //isto kao roundScore = roundScore + dice;
    document.querySelector("#current-" + activePlayer).textContent = roundScore;
  } else {
    //Next player
    //if                 uradi ovo         else
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;
    //Postavlja vrijednosti na 0 kod oba playera
    document.getElementById("current-0").textContent = "0";
    document.getElementById("current-1").textContent = "0";

    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    // document.querySelector(".player-0-panel").classList.remove("active");
    // document.querySelector(".player-1-panel").classList.add("active");
    document.querySelector(".dice").style.display = "none";
  }
});
