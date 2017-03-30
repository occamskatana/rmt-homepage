var deadNumber;
var secondsCountdown;



$(document).ready(function(){
	deadNumber = countDead();
	secondsCountdown = 79;
	startCounter()
	setTimeout(fadeIn, 3500);
})



function countDead(){
	var beginningYear = new Date(new Date().getFullYear(), 0, 1).getTime();
	var msInYear = 31557600000;
	var t = Date.now();
	var dif = t - beginningYear;
	var yearPercent = dif / msInYear
	var totalDeaths = 365000;
	var deathsSoFar = Math.floor((yearPercent * totalDeaths))
	return deathsSoFar
}

function startCounter(){
	setInterval(function(){deadNumber++; secondsCountdown = 79;}, 79000);
	setInterval(function(){
		secondsCountdown--;
		console.log(deadNumber, secondsCountdown)
		updateDom()
	}, 1000)
}


function updateDom(){
	var deathsDom = $("h1#junkie-dead-counter");
	var counterDom = $("h1#od-countdown");
	deathsDom.text(deadNumber);
	counterDom.text(secondsCountdown);
}

// function fadeIn() {
// 	var tagline = $('.tagline');
// 	var button = $('#main-button');
// 	var buttonText = $('#main-button-text');
// 	tagline.fadeIn(450, function(){
// 		console.log("sex")
// 	})
// 	button.fadeIn(400, function(){
// 		console.log("sex1");
// 	})
// 	buttonText.fadeIn(400, function(){
// 		console.log("sex2")
// 	})
// }

function fadeIn(){
	var sub = $('.sub-main');
	sub.animate({opacity:1}, 1000)
}

