// Select the submit button

var w = 0
var l = 0
var d = 0


var submit = d3.select("#submit");

submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#example-form-input");

  // Get the value property of the input element
  var PlayerInput = inputElement.property("value");

  console.log(PlayerInput);


  var choice = ["r", "p", "s"];
  var win = "Congratulations! You win!";
  var lose = "You lose. Better luck next time!";
  var tie = "It's a draw!";
  var result = ""
  var computerChoice = choice[Math.floor(Math.random()*choice.length)];	
  console.log(choice);
  console.log("checking");
  console.log(computerChoice);
  //var stock = d3.select("#stockInput").node().value;
  d3.select("#example-form-input").node().value = "";





  //logic for gameplay
  if (PlayerInput == "r") {
    if (computerChoice == "r") {result = tie; d += 1;}
    else if (computerChoice == "p") {result = lose; l += 1;}
    else if (computerChoice == "s") {result = win; w += 1;}
    }
  else if (PlayerInput == "p") {
    if (computerChoice == "r") {result = win; w += 1;}
    else if (computerChoice == "p") {result = tie; d += 1;}
    else if (computerChoice == "s") {result = lose; l += 1;}
    }
  else if (PlayerInput == "s") {
    if (computerChoice == "r") {result = lose; l += 1;}
    else if (computerChoice == "p") {result = win; w += 1;}
    else if (computerChoice == "s") {result = tie; d += 1;}
    }




  else {result = "I did not understand that! Please choose r, p, or s."}
  console.log(w);
  console.log(l);
  console.log(d);
  console.log("counter above");










  // Set the span tag in the h1 element to the text
  // that was entered in the form
  //d3.select("h2>span").text(`You chose: ${PlayerInput}`);
  //d3.select("#test").text(`You chose: ${PlayerInput}`);
  d3.select("#yourchoice").text(`You chose: ${PlayerInput}`);
  d3.select("#cChoice").text(`The Computer chose: ${computerChoice}`);
  d3.select("#result").text(result);
  d3.select("#counter").text(`You have won ${w} games, lost ${l} games, and had ${d} draws.`);
  d3.select("#rematch").text("Play Again?");

});

//Reset counter button

var reset = d3.select("#reset");

//submit.on("click", function() {})

