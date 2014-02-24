// $( ".num-backspace" ).mouseup(function() {
//   alert( "Handler for .mouseup() called." );
// });

function genMultiply() {
	var res = {};
	res.firstNum = intRandRange(1, 10);
	res.secondNum = intRandRange(1, 10);
	res.eq = function() {
		return this.firstNum + " &times " + this.secondNum + " =";
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
	if (eq.result() == $(".app-answer")[0].value) {
		return true;
	} else {
		return false;
	}
}

function showAlert(type) {
	$(".alert-danger").hide();
	$(".alert-success").hide();
	
	var options = {};
	var alert;
	if (type == true) {
		alert = $(".alert-success");
		options.effect = 'slide';
	} else {
		alert = $(".alert-danger");
		options.effect = 'shake';
	}

	options.complete = function callback() {
		setTimeout(function() {
	    	alert.hide('fade-out');
		}, 3000 );
	}

	options.duration = 400;
	
	//alert(effect);
	//console.log(effect);
	alert.show(options);



	// alert.show( 'drop', options, 500, );
	//Постепенно прятать появившийся алерт
}



$(window).load(function() {
	var eq = newEquation();

	//button events check
	$( ".num-input" ).click(function() {
	  $(".app-answer")[0].value += this.innerHTML;
	});

	$( ".num-backspace" ).click(function() {
		var answ = $(".app-answer")[0];
	  	answ.value = answ.value.slice(0, -1);
	});

	$(".app-check").click(function() {
		var res = checkResult(eq);
		showAlert(res);
		$(".app-answer")[0].value = "";
		if (res == true)
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
