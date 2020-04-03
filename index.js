var randomDiceNumber1 = Math.floor(Math.random()*6)+1;
var randomDiceImage1 = "images/dice" + randomDiceNumber1 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);

var randomDiceNumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "images/dice" + randomDiceNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

if(randomDiceNumber1>randomDiceNumber2)
{
  document.querySelectorAll("h1")[0].innerHTML = "⛳Palyer1 Wins !";
}
else if (randomDiceNumber2>randomDiceNumber1)
{
  document.querySelectorAll("h1")[0].innerHTML = "Player2 Wins !⛳";
}
else{
  document.querySelectorAll("h1")[0].innerHTML = "Draw !";
}
