/* Lets make a rainbow */

function split(hex) {
	var array = [hex.substring(1, 3), hex.substring(3, 5), hex.substring(5,7)];
	return array;
}

function comb(array) {
	var string = "#";
	for (var i = 0; i < array.length; i++) {
		string += array[i];
	}
	return string;
}

function increment(color) {
	color++;
	color = color.toString(16);
	return color;
}

function decrease(color) {
	color--;
	color = color.toString(16);
	return color;
}

function setBg(color) {
	document.getElementsByTagName('body')[0].style.background = color;
}

/* RAINBOW:
RED 		#ef1b27		ORANGE 		#f8931f
YELLOW		#ffde03		GREEN		#03a650
BLUE		#027ec7		PURPLE		#632b8e */

var rainbow = ["#ef1b27", "#f8931f", "#ffde03", "#03a650", "#027ec7", "#632b8e"];
var body = document.getElementsByTagName('body')[0];

function flow() {
	console.log("" + rainbow + " and that's the rainbow!")
	for (var i = 0; i < rainbow.length; i++) {
		if (i < rainbow.length - 1 ) {
			var colorOne = split(rainbow[i])
			if (rainbow[i + 1] !== undefined) {
				var colorTwo = split(rainbow[i + 1]);
			}
			console.log("" + colorOne + " and " + colorTwo)

			for (var j =  0; j < colorOne.length; j++) {
				var colorOneInt = parseInt(colorOne[j], 16);
				var colorTwoInt = parseInt(colorTwo[j], 16);
				console.log("j = " + j)

				if ( colorOneInt < colorTwoInt) 
					setTimeout( function(){
						while (colorOneInt < colorTwoInt) {
							colorOne[j] = increment(colorOneInt);
							colorOneInt = parseInt(colorOne[j], 16);
							setBg(comb(colorOne), 200);
							console.log("This number should get bigger " + colorOneInt);
							console.log("Now its increasing to " + comb(colorOne));
						}	
					}, 500);
				} else if ( colorOneInt > colorTwoInt) {
					while (colorOneInt > colorTwoInt) {
						setTimeout(function() {
							colorOne[j] = decrease(colorOneInt);
							colorOneInt = parseInt(colorOne[j], 16);
							body.style.background = comb(colorOne);
							console.log("This number should get bigger " + colorOneInt);
							console.log("Now its decreasing to " + comb(colorOne));
						}, 500);
					}
				} else {
					continue
				}		
			}
		} else {
			continue
		}
	}
}

flow();
