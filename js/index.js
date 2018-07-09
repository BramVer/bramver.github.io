$(document).ready(function() {
	var amountOfKeyboards = $('.keyboard').length;
	var date = new Date();
	var dateFormat = date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();

	$('#amount').text(amountOfKeyboards);
	$('#datetime').text(dateFormat);
});

$('div#paypal button#paypal-button').click(function(e) {
	var url = 'https://paypal.me/dirkiedik/6.9';

	var win = window.open(url, '_blank');
	win.focus();
});

function clock(){

	//Save the times in variables
	var today = new Date();

	var date = today.getDate();
	var month = today.getMonth() + 1;
	var year = today.getFullYear();

	var hours = today.getHours();
	var minutes = today.getMinutes();
	var seconds = today.getSeconds();


	//Set the AM or PM time
	if (hours >= 12){
	  meridiem = " PM";
	}
	else {
	  meridiem = " AM";
	}


	//convert hours to 12 hour format and put 0 in front
	if (hours>12){
		hours = hours - 12;
	}
	else if (hours===0){
		hours = 12;
	}

	//Put 0 in front of single digit minutes and seconds
	if (minutes<10){
		minutes = "0" + minutes;
	}
	else {
		minutes = minutes;
	}

	if (seconds<10){
		seconds = "0" + seconds;
	}
	else {
		seconds = seconds;
	}

	var dateFormat = `${date}/${month}/${year}`;
	var hourFormat = `${hours}:${minutes}:${seconds} ${meridiem}`;

	$("#clock #date").html(dateFormat);
	$("#clock #time").html(hourFormat);
}

setInterval('clock()', 1000);
