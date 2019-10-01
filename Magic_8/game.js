console.log("Start Here");



var submit = d3.select("#submit");

submit.on("click", function() {
d3.event.preventDefault();
var selectElement = d3.select("#Ball");
var gameType = selectElement.property("value");
console.log(gameType); //good to here, set up logic for gameplay!!

if (gameType == "Classic 8 Ball"){var answers = ["It is certain.", 
+ "It is decidedly so.", "Without a doubt.", "Yes - definitely.", "You may rely on it.", "As I see it, yes.", 
+ "Most likely.","Outlook good.", "Yes.", "Signs point to yes.", "Reply hazy, try again.", "Ask again later.",
+  "Better not to tell you now.", "Cannot predict now.", "Concentrate and ask again.", "Don't count on it.",
+  "My reply is no.", "My sources say no.", "Outlook not so good.", "Very doubtful."];}

else if(gameType == "Classic Plus"){var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.",
+  "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", 
+ "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not to tell you now.", "Cannot predict now.",
+  "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
+  "Very doubtful.", "Have confidence.", "Flip a coin.", "Don't worry.", "Things are looking up.", "It will work out in the end.",
+  "Trust yourself.", "You will know when the time is right.", "I cannot say.", "Keep trying.", "What do you think?", "You need to ask the right questions."];}

else if(gameType == "Twilight Zone"){var answers = ["It is quite possible.", "It has been decided in your favor.",
+  "You may never know.", "If you move soon.", "That makes a good deal of sense.", "Try Again.", "There's no question about it.",
+  "Do you dare risk finding out?", "What do you think?", "Your chances are good.", "Hiya Donsy and Patsy. So how's by you?",
+  "It has already been taken care of.", "If that's what you really want.", "The answer to that is obvious.", "That's up to you to find out.",
+  "It all depends upon your point of view.", "Try again later.", "You can have a wonderful life, if you make it wonderful yourself."];}

else if(gameType == "Delux"){var answers = ["It is certain.", "It is decidedly so.", "Without a doubt.",
+  "Yes - definitely.", "You may rely on it.", "As I see it, yes.", "Most likely.", "Outlook good.", "Yes.", 
+ "Signs point to yes.", "Reply hazy, try again.", "Ask again later.", "Better not to tell you now.", "Cannot predict now.", 
+ "Concentrate and ask again.", "Don't count on it.", "My reply is no.", "My sources say no.", "Outlook not so good.",
+  "Very doubtful.", "Have confidence.", "Flip a coin.", "Don't worry.", "Things are looking up.", "It will work out in the end.",
+  "Trust yourself.", "You will know when the time is right.", "I cannot say.", "Keep trying.", "What do you think?", 
+ "You need to ask the right questions.", "It is quite possible.", "It has been decided in your favor.", "You may never know.", 
+ "If you move soon.", "That makes a good deal of sense.", "Try Again.", "There's no question about it.", "Do you dare risk finding out?",
+  "What do you think?", "Your chances are good.", "Hiya Donsy and Patsy. So how's by you?", "It has already been taken care of.",
+  "If that's what you really want.", "The answer to that is obvious.", "That's up to you to find out.", "It all depends upon your point of view.",
+  "Try again later.", "You can have a wonderful life, if you make it wonderful yourself."];}
console.log(answers);


var prediction = answers[Math.floor(Math.random()*answers.length)];	
console.log(prediction);
d3.select("#Prediction").text(prediction);
}

);
