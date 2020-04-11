// jshint esversion: 7


let rollDie = () => {
  return Math.floor (Math.random() * 6) + 1;
}
//Define a controller to handle the button click
let controller = function() {
  let target, die1, die2, rollCount = 0,
     die1URL, die2URL, imgELEM1, imgELEM2, cheerymsg;

//get the target number from the webpage
target = document.querySelector("input").value;
console.log(target);
//roll targete number and count rolls
do{
  //roll dice
  die1 = rollDie();
  die2 = rollDie();
  //increment the roll roll counter
  rollCount += 1
  //log the dice and the counter
  console.log(`${die1}, ${die2}, ${rollCount}`)
} while (die1 + die2 != target);
//update images on webpage

  die1URL = `images/die${die1}.gif`;
  console.log(die1URL);
  imgELEM1 = document.querySelector("img");
  imgELEM1.setAttribute("src", die1URL);

  die2URL = `images/die${die2}.gif`;
  imgELEM2 = document.querySelectorAll("img")[1];
  imgELEM2.setAttribute("src", die2URL);

  cheerymsg = `You hit your number in ${rollCount} roll${(rollCount == 1)?"":"s"}! `;
  document.querySelector("div").innerHTML = cheerymsg;

//display number of rolls on the webpage

};

//Register the controller after the DOM is complete
window.addEventListener("load", function() {
  //select the button
  let button = document.querySelector("button");

  //register the click handler for the button
  button.addEventListener("click", controller);
});
