console.log("Start");

var submit = d3.select("#submit");
console.log(submit);

submit.on("click", function(){
  d3.event.preventDefault();
  console.log("Click");

//capture inputs
  var PV = d3.select("#loan");
  console.log(PV.property("value"));
  loan = PV.property("value");
  var rate = d3.select("#rate");
  console.log(rate.property("value"));
  r = rate.property("value");
  var time = d3.select("#time");
  console.log(time.property("value"));
  months = time.property("value");

//calculate payment
  r = r/1200
  console.log(r);
  var P = (r*loan)/(1-(1+r)**((0-1) * months));
  console.log(P);
  Pr = Math.round(P);
  console.log(Pr);

//Append Payment calculation
  d3.select("#Payment").text(`Your monthly payment is: $${Pr}`);

//Add table header to page
  //Define column names
  var columns = [{head: "Date"},
    {head: "Interest"},
    {head: "Cumulative Interest"},
    {head: "Principal"},
    {head: "Total Principal Paid"},
    {head: "Remaining Balance"}];

  //append <head> to "#target"
  var target = d3.select("#target");
  var row = target.append("table");

  //Add <thead> by selecting <table>
  var table = d3.select("table");
  var row = table.append("thead");

  //Add <tr> by selecting <thead> and add column array elements to header
  var thead = d3.select("thead");
  var row = thead.append("tr");
    columns.forEach((column) => {
    Object.entries(column).forEach(([key, value]) => {
      var cell = thead.append("th");
      cell.text(value);
    });
  });

//Add table body
  //Append body
  var table = d3.select("table");
  var row = table.append("tbody");
  //Make an array to hold values
  var data = [];

  //Make an array of the column headers
  var headers = ["Date", "Interest", "Cumulative Interest", "Principal", "Total Principal Paid", "Remaining Balance"];

  //Perform Calculations
  //define variables
  var interest = 0;
  var c_int = 0;
  var prin = 0;
  var c_prin = 0;
  var bal = loan;

  //establish loop
  console.log("LOOP");
  months = parseInt(months);
  console.log(months);
  var i;

  for (i = 0; i < months; i++) {
  //calculate interest
  interest = r * bal;
  interest = Math.round(interest);
  console.log(interest);
  //interest cumulative
  c_int = c_int + interest;
  console.log(c_int);
  //calculate prin
  prin = Pr - interest
  console.log(`prin = ${prin}`);
  //calculate cumulative principle
  c_prin = c_prin + prin
  console.log("c_prin");
  //calculate new balance
  bal = bal - prin;
  console.log(`remaining balance = ${bal}`);

  console.log("END");
  console.log("Append Body");

  }
//end of loop












});
