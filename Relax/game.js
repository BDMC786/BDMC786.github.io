console.log("Start Here");



var submit = d3.select("#submit");

submit.on("click", function() {
d3.event.preventDefault();


{var answers = ["Worry never robs tomorrow of its sorrow, it only saps today of its joy.", 
"Worry often gives a small thing a big shadow.", 
"People become attached to their burdens sometimes more than the burdens are attached to them.", 
"Our fatigue is often caused not by work, but by worry, frustration and resentment.",
"The greatest mistake you can make in life is to be continually fearing you will make one.",
"If you ask what is the single most important key to longevity, I would have to say it is avoiding worry, stress and tension. And if you didn’t ask me, I’d still have to say it.", 
"If you want to test your memory, try to recall what you were worrying about one year ago today.", 
"When I look back on all these worries, I remember the story of the old man who said on his deathbed that he had had a lot of trouble in his life, most of which had never happened.", 
"Worry is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained.", 
"When one has too great a dread of what is impending, one feels some relief when the trouble has come.",
"If you treat every situation as a life and death matter, you’ll die a lot of times.", 
"That the birds of worry and care fly over your head, this you cannot change, but that they build nests in your hair, this you can prevent.", 
"Worry compounds the futility of being trapped on a dead-end street. Thinking opens new avenues.", 
"Worry is like a rocking chair: it gives you something to do but never gets you anywhere",
"People get so in the habit of worry that if you save them from drowning and put them on a bank to dry in the sun with hot chocolate and muffins they wonder whether they are catching a cold.", 
"There is a great difference between worry and concern. A worried person sees a problem, and a concerned person solves a problem.", 
"Somehow our devils are never quite what we expect when we meet them face to face.", 
"The reason why worry kills more people than work is that more people worry than work.",
"Every tomorrow has two handles. We can take hold of it with the handle of anxiety or the handle of faith.",
"We can easily manage if we will only take, each day, the burden appointed to it. But the load will be too heavy for us if we carry yesterday's burden over again today, and then add the burden of the morrow before we are required to bear it.",
"If you can't sleep, then get up and do something instead of lying there worrying. It's the worry that gets you, not the lack of sleep.",
"I never worry about action, but only about inaction.",
"Rule number one is, don't sweat the small stuff. Rule number two is, it's all small stuff.",
"A day of worry is more exhausting than a day of work.",
"Worry a little bit every day and in a lifetime you will lose a couple of years. If something is wrong, fix it if you can. But train yourself not to worry. Worry never fixes anything.",


"Live Happy"];}


console.log(answers);


var prediction = answers[Math.floor(Math.random()*answers.length)];	
console.log(prediction);
d3.select("#Prediction").text(prediction);
}

);