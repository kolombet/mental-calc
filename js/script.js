// $( ".num-backspace" ).mouseup(function() {
//   alert( "Handler for .mouseup() called." );
// });

function genMultiply() {
	var res = {};
	res.firstNum = intRandRange(1, 10);
	res.secondNum = intRandRange(1, 10);
	res.eq = function() {
		return this.firstNum + " &times " + this.secondNum;
	}
	res.result = function() {
		return this.firstNum * this.secondNum;
	}
	return res;
}

function newEquation() {
	var currEq = genMultiply();
	$(".app-question")[0].innerHTML = currEq.eq();
	return currEq;
}

function checkResult(eq) {
	if (eq.result == $(".app-answer")[0].value) {
		console.log("true");
	}
}

$(window).load(function() {
	var eq = newEquation();

	$( ".num-input" ).click(function() {
	  $(".app-answer")[0].value += this.innerHTML;
	});

	$( ".num-backspace" ).click(function() {
		var answ = $(".app-answer")[0];
	  	answ.value = answ.value.slice(0, -1);
	  	setInterval(function() {
		    alert("hi");
		}, 30000);
	});

	$(".app-check").click(function() {
		eq = newEquation();
	});
});




//Utils
function randRange(min, max) {
    return Math.random() * (max-min) + min;
}

function intRandRange(min, max) { 
	return Math.floor(randRange(min, max));
}

//Global vars
