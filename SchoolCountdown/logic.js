console.log("Hello World");

// Set the date we're counting down to
var countDownDate = new Date("Jun 24, 2019 13:00:00").getTime();
console.log(countDownDate);

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("Jessica").innerHTML = "Jessica's Summer begins: " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";//"Jessica's school year ends in" alternate text

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("Jessica").innerHTML = "EXPIRED";
  }
}, 1000); //1000 = 1 second

//change to utilize D3 to target element
//change date to correct when given
//change the expired message


//Second Timer
//The two timers are out of sync by nearly a second, it seems that 1 timer is the limit to what these JS methods can handle

var EndDate = new Date("June 24, 2019 12:40:00").getTime();

var y = setInterval(function() {
  var now2 = new Date().getTime();
  var remaining = EndDate - now2;
  
  var days2 = Math.floor(remaining / (1000 * 60 * 60 * 24));
  var hours2 = Math.floor((remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes2 = Math.floor((remaining % (1000 * 60 * 60)) / (1000 * 60));
  var seconds2 = Math.floor((remaining % (1000 * 60)) / 1000);

//GOOD TO HERE

  d3.select("#Laura").text(`Laura's Summer begins: ${days2}d ${hours2}h ${minutes2}m ${seconds2}s`);

})
