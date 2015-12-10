var select;
var timer;
var t;
var beep = new Audio("beep.mp3");
var s = "";

window.onload = function () {
    select = document.getElementById('menu').value;
    s = select; 
}

function changeHiddenInput(objDropDown) {
    console.log(objDropDown.value);
    s = objDropDown.value;
}

function startTimer(objDropDown) {
	timer = s;
	timedCount();
};

function timedCount(){
	document.getElementById('clock').innerHTML = timer;
	if (timer === 0) {
		beep.play();
		document.getElementById('clock').innerHTML = "Times Up!";
		//alert("Times Up!");
	}
	 else {
	timer--;
	t = setTimeout(function(){timedCount()},1000);
	};
};