// Select the submit button
// Making a more intelligent game
console.log("Start Here");
var w = 0
var l = 0
var d = 0


var submit = d3.select("#submit");

submit.on("click", function() {

//practicing with case functions
  var ra = "ScaTtEr"
  //var correct = ra.toLowerCase();no longer needed
  ra = ra.toLowerCase();
  //console.log(correct);no longer needed
  console.log(ra);
  //console.log(ra.charAt(0));
  console.log(ra.charAt(0).toUpperCase() + ra.slice(1));
//end practice

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var PlayerInput = inputElement.property("value");

  //convert input to lower case
  PlayerInput = PlayerInput.toLowerCase();
  //capitalize the first letter of input
  PlayerInput = PlayerInput.charAt(0).toUpperCase() + PlayerInput.slice(1)
  console.log(`output = ${PlayerInput}`);//test works


//  if (PlayerInput == "R"){
//    PlayerInput = "Rock";}
//  if (PlayerInput == "P"){
//    PlayerInput = "Paper";}
//  if (PlayerInput == "S"){
//    PlayerInput = "Scissors";}

  if (PlayerInput == "R"){
     PlayerInput = "Rock";}
  else if (PlayerInput == "P"){
    PlayerInput = "Paper";}
  else if (PlayerInput == "S"){
    PlayerInput = "Scissors";}





  var choice = ["Rock", "Paper", "Scissors"];
  var win = "Congratulations! You win!";
  var lose = "You lose. Better luck next time!";
  var tie = "It's a draw!";
  var result = ""
  var computerChoice = choice[Math.floor(Math.random()*choice.length)];	
  console.log(choice);
  console.log("checking");
  console.log(computerChoice);
  console.log(PlayerInput);
  //var stock = d3.select("#stockInput").node().value;
  d3.select("#example-form-input").node().value = "";



  //logic for gameplay
  if (PlayerInput == "Rock") {
    if (computerChoice == "Rock") {result = tie; d += 1;}
    else if (computerChoice == "Paper") {result = lose; l += 1;}
    else if (computerChoice == "Scissors") {result = win; w += 1;}
    }
  else if (PlayerInput == "Paper") {
    if (computerChoice == "Rock") {result = win; w += 1;}
    else if (computerChoice == "Paper") {result = tie; d += 1;}
    else if (computerChoice == "Scissors") {result = lose; l += 1;}
    }
  else if (PlayerInput == "Scissors") {
    if (computerChoice == "Rock") {result = lose; l += 1;}
    else if (computerChoice == "Paper") {result = win; w += 1;}
    else if (computerChoice == "Scissors") {result = tie; d += 1;}
    }




  else {result = "I did not understand that! Please choose Rock, Paper, or Scissors."}


  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("h2>span").text(`You chose: ${PlayerInput}`);
  //d3.select("#test").text(`You chose: ${PlayerInput}`);
  d3.select("#yourchoice").text(`You chose: ${PlayerInput}`);
  d3.select("#cChoice").text(`The Computer chose: ${computerChoice}`);
  d3.select("#result").text(result);
  d3.select("#counter").text(`You have won ${w} games, lost ${l} games, and had ${d} draws.`);
  d3.select("#rematch").text("Play Again?")
  console.log("End Here");;

});

//Reset counter button

var reset = d3.select("#reset");

//submit.on("click", function() {})
