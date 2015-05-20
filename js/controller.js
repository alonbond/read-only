var app = angular.module('untouchedApp', []);

app.controller('MainController', ['$scope', function($scope){
}])


// jQuery
var readOnlyEnd = $('#main-field').val().length,
	readOnlyStart = 1;

$('#main-field').on('keydown', function(event) {

	// getting the char itself for each press
	var character = String.fromCharCode(event.keyCode).toLowerCase();

	// getting te cursor position
	var pos = $('#main-field').caret();

	// handling new character between 'a' and 'z' and the delete char.
	if (((character >= 'a') && (character <= 'z')) || (event.which == 8) || (event.which == 32)) {

		$('#output').text(character + ' - True in a-z characters');

		// if delete is pressed:
		if (event.which == 8) {
			if (pos == readOnlyEnd) return false;
			else if (pos < readOnlyStart) {
				if (pos == 0) return true;
				if (pos > 0) {
					// Will reduce indexes.
					readOnlyStart -= 1;
					readOnlyEnd -= 1;

					return true; // Will delete.
				}
			}
			else if ((pos >= readOnlyStart) && (pos < readOnlyEnd)) return false;
		}

		// if any key pressed (between a-z and space) within the word.
		else if ((pos >= readOnlyStart) && (pos < readOnlyEnd)) return false;

		// before the readonly word.
		else if (pos < readOnlyStart) { 
			readOnlyStart += 1;
			readOnlyEnd += 1;

			return true; // Will add character
		}
		else {
			return true;
		}
	}
	else { 
		// In case something that doesn't affect the input was pressed (like left/right arrows).
		$('#output').text(character + ' - False..');
		return true;
	}

});                    