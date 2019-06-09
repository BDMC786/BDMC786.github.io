var submit = d3.select("#submit");

//id="submit"

submit.on("click", function() {
//prevent page from refreshing
  d3.event.preventDefault();

//capture 3 input fields
  var loan = inputElement.property("loan");
  var rate = inputElement.property("rate");
  var time = inputElement.property("time");

//Perform Calculations
  var i;
  rate = (1 + (rate/100);

//variable for cumulative interest etc
  var tinterest = 0;
  var balance = 0;
  var minterest = 0; //interest monthly
  
//before the loop to calculate each month and append table row, append table header to target
          
          
          

//LOOP
  for (i = 0; i < time; i++){
//loop and appending table below until "}"
    //calculate month's interest- minterest
    
  }

});
