console.log("Start");

var submit = d3.select("#submit");
//console.log(submit);

submit.on("click", function(){
  d3.event.preventDefault();
  //console.log("Click");

//capture inputs
  var PV = d3.select("#loan");
  //console.log(PV.property("value"));
  loan = PV.property("value");
  var rate = d3.select("#rate");
  //console.log(rate.property("value"));
  r = rate.property("value");
  var time = d3.select("#time");
  //console.log(time.property("value"));
  months = time.property("value");

//calculate payment
  r = r/1200
  //console.log(r);
  var P = (r*loan)/(1-(1+r)**(-months));
  //console.log(P);
  Pr = P.toFixed(2);
  //console.log(Pr);

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
  c_int = c_int.toFixed(2);
  var prin = 0;
  var c_prin = 0;
  var bal = loan;

  //establish loop
  console.log("LOOP");
  months = parseInt(months);

  var i;

  for (i = 0; i < months; i++) {
  //calculate interest
  interest = r * bal;
  interest = interest.toFixed(2);
  //console.log(interest);
  //interest cumulative
  //parseFloat(c_int)
  c_int = parseFloat(c_int) + parseFloat(interest);
  c_int = c_int.toFixed(2);
  //console.log(c_int);
  //calculate prin
  prin = Pr - interest
  prin = prin.toFixed(2);
  //console.log(`prin = ${prin}`);
  //calculate cumulative principle
  c_prin = parseFloat(c_prin) + parseFloat(prin);
  c_prin = c_prin.toFixed(2);
  //c_prin = c_prin.toFixed(2);
  //console.log("c_prin");
  //calculate new balance
  bal = bal - prin;
  bal = bal.toFixed(2);
  //console.log(`remaining balance = ${bal}`);

  //console.log("VARIABLES");
  //console.log(`Date = ${i}`);//for now
  //console.log(`Interest = ${interest}`);
  //console.log(`cumulative interest = ${c_int}`);
  //console.log(`Principal = ${prin}`);
  //console.log(`Total Principal Paid = ${c_prin}`);
  //console.log(`Remaining Balance = ${bal}`);
  //console.log(`months = ${months}`);
  //console.log(`${}`);
  //console.log("END VARIABLES");
  console.log(headers[0]);

  //Add variables to array
  var dict = {"Date": `${i}`,
  "Interest": `${interest}`,
  "Cumulative Interest": `${c_int}`,
  "Principal": `${prin}`,
  "Total Principal Paid": `${c_prin}`,
  "Remaining Balance": `${bal}`
};
  data.push(dict);
  //console.log(dict);
  //data.push(dict);
  
  

  }
//end of loop

  console.log(data);
  var tbody = d3.select("tbody");

  data.forEach((month) => {
    var row = tbody.append("tr");
    Object.entries(month).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });




});
