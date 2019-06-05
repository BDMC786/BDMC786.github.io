
console.log("Hello World!")


var columns = [{head: "Weekday"},
  {head: "Date"},
  {head: "High"},
  {head: "Low"},];

console.log(columns);







//Add <table> by selecting <body>

var body = d3.select("body");
var row = body.append("table");

//Add <thead> by selecting <table>

var table = d3.select("table");
var row = table.append("thead");


//Add <tr> by selecting <thead> and add column array elements to header

var thead = d3.select("thead");
 
var row = thead.append("tr");
  columns.forEach((name) => {
  Object.entries(name).forEach(([key, value]) => {
    var cell = thead.append("th");
    cell.text(value);
  });
});


//Add Table Body and elements

var data = [
  {
    weekday: "SUN",
    date: "July 1",
    high: 76,
    low: 63
  }, {
    weekday: "MON",
    date: "July 2",
    high: 77,
    low: 63
  }, {
    weekday: "TUE",
    date: "July 3",
    high: 77,
    low: 63
  }, {
    weekday: "WED",
    date: "July 4",
    high: 81,
    low: 65
  }, {
    weekday: "THU",
    date: "July 5",
    high: 87,
    low: 68
  }, {
    weekday: "FRI",
    date: "July 6",
    high: 91,
    low: 71
  }, {
    weekday: "SAT",
    date: "July 7",
    high: 91,
    low: 72
  }
];

//Add <tbody> by selecting <table>

var table = d3.select("table");

var row = table.append("tbody");

//take form the example, adding elements to table body

var tbody = d3.select("tbody");

data.forEach((weatherReport) => {
  var row = tbody.append("tr");
  Object.entries(weatherReport).forEach(([key, value]) => {
    var cell = tbody.append("td");
    cell.text(value);
  });
});
