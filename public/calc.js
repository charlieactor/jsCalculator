$(document).keydown(function(e) {
  var key = e.key;
  console.log(key);
  for (var i = 0; i < 9; i++) {
    if (key == i) {
      var currentDisplay = $('#display').text();
      currentDisplay += "" + i;
      $('#display').text(currentDisplay);
    }
  }
  if (key == "+") {
    var currentDisplay = $('#display').text();
    currentDisplay += " + ";
    $('#display').text(currentDisplay);
  }
  if (key == "*") {
    var currentDisplay = $('#display').text();
    currentDisplay += " * ";
    $('#display').text(currentDisplay);
  }
  if (key == "-") {
    var currentDisplay = $('#display').text();
    currentDisplay += " - ";
    $('#display').text(currentDisplay);
  }
  if (key == "/") {
    var currentDisplay = $('#display').text();
    currentDisplay += " / ";
    $('#display').text(currentDisplay);
  }
  if (key == "=" || key == "Enter") {
    var currentDisplay = $('#display').text();
    var array = currentDisplay.split(" ");
    if (array[1] == "+") {
      $('#display').text(Number(array[0]) + Number(array[2]));
    }
    if (array[1] == "-") {
      $('#display').text(Number(array[0]) - Number(array[2]));
    }
    if (array[1] == "*") {
      $('#display').text(Number(array[0]) * Number(array[2]));
    }
    if (array[1] == "/") {
      $('#display').text(Number(array[0]) / Number(array[2]));
    }
  }
  if (key == "Backspace") {
    var currentDisplay = $('#display').text();
    currentDisplay = currentDisplay.substr(0, currentDisplay.length - 1);
    $('#display').text(currentDisplay);
  }
});



$('#0').click(function(e) {
  if (e.target.id === 0); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 0;
    $('#display').text(currentDisplay);
  }
});
$('#1').click(function(e) {
  if (e.target.id === 1); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 1;
    $('#display').text(currentDisplay);
  }
});
$('#2').click(function(e) {
  if (e.target.id === 2); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 2;
    $('#display').text(currentDisplay);
  }
});
$('#3').click(function(e) {
  if (e.target.id === 3); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 3;
    $('#display').text(currentDisplay);
  }
});
$('#4').click(function(e) {
  if (e.target.id === 4); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 4;
    $('#display').text(currentDisplay);
  }
});
$('#5').click(function(e) {
  if (e.target.id === 5); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 5;
    $('#display').text(currentDisplay);
  }
});
$('#6').click(function(e) {
  if (e.target.id === 6); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 6;
    $('#display').text(currentDisplay);
  }
});
$('#7').click(function(e) {
  if (e.target.id === 7); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 7;
    $('#display').text(currentDisplay);
  }
});
$('#8').click(function(e) {
  if (e.target.id === 8); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 8;
    $('#display').text(currentDisplay);
  }
});
$('#9').click(function(e) {
  if (e.target.id === 9); {
    var currentDisplay = $('#display').text();
    currentDisplay += "" + 9;
    $('#display').text(currentDisplay);
  }
});
$('#decimal').click(function(e) {
  if (e.target.id === "decimal"); {
    var currentDisplay = $('#display').text();
    currentDisplay += ".";
    $('#display').text(currentDisplay);
  }
});
$('#add').click(function(e) {
  var currentDisplay = $('#display').text();
  currentDisplay += " + ";
  $('#display').text(currentDisplay);
});
$('#subtract').click(function(e) {
  var currentDisplay = $('#display').text();
  currentDisplay += " - ";
  $('#display').text(currentDisplay);
});
$('#divide').click(function(e) {
  var currentDisplay = $('#display').text();
  currentDisplay += " / ";
  $('#display').text(currentDisplay);
});
$('#multiply').click(function(e) {
  var currentDisplay = $('#display').text();
  currentDisplay += " * ";
  $('#display').text(currentDisplay);
});
$('#equals').click(function(e) {
  var currentDisplay = $('#display').text();
  var array = currentDisplay.split(" ");
  if (array[1] == "+") {
    $('#display').text(Number(array[0]) + Number(array[2]));
  }
  if (array[1] == "-") {
    $('#display').text(Number(array[0]) - Number(array[2]));
  }
  if (array[1] == "*") {
    $('#display').text(Number(array[0]) * Number(array[2]));
  }
  if (array[1] == "/") {
    $('#display').text(Number(array[0]) / Number(array[2]));
  }
});
$('#clear').click(function(e) {
  $('#display').text("");
});
