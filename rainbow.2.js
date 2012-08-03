/* Lets make a rainbow*/
/* Except with objects*/
/* Example object     */

var myColor = function(color) {
	this.hex =  color || '#000000';
	this.rgb = function() {
		var hex = this.hex;
		var array = [hex.substring(1,3), hex.substring(3,5), hex.substring(5,7)];
		array = array.map(function(x) { return parseInt(x, 16) });
		return array; }
	this.toHex = function(n) {
		if (n.toString(16).length < 2) {
			return '0' + n.toString(16);
		} else {
			return n.toString(16); }};
	this.inc = function(n) {
		var rgb = this.rgb();
		rgb[n]++;
		rgb = rgb.map(this.toHex);
		this.hex = '#' + rgb.join('');
		return this.hex }
	this.dec = function(n) {
		var rgb = this.rgb();
		rgb[n]--;
		rgb = rgb.map(this.toHex);
		this.hex = '#' + rgb.join('');
		return this.hex }
	this.bg = function(el) {
		el.style.background = this.hex; }
	this.func = function(array, el) {
		el = el || document.getElementsByTagName('body')[0];
		toColor = array[0] || '#' + Math.floor(Math.random()*16777216+1).toString(16)
		for (var i = 0; i < this.rgb().length; i++) {
			if (this.rgb()[i] > toColor.rgb()[i]) {
				this.dec(i);
				this.bg(el)
				console.log('Decreasing: ' + this.hex);;
				init(array);
				break;
			} else if (this.rgb()[i] < toColor.rgb()[i]) {
				this.inc(i);
				this.bg(el)
				console.log('Increasing: ' + this.hex);;
				init(array);
				break;
			}
		}
	}
}

var rainbow = ['#ef1b27', '#f8931f', '#ffde03', '#03a650', '#027ec7'],
	curColor = new myColor(rainbow[0]),
	objArray = rainbow.map(function (hex) { return new myColor(hex)});

function init() {
	if (curColor.hex !== objArray[0].hex) {
		setTimeout(curColor.func(objArray), 500);
	} else if (curColor.hex === objArray[0].hex) {
		objArray[objArray.length] = objArray[0];
		objArray.shift();
		console.log(objArray[0].hex + ' & ' + curColor.hex)
		if (objArray !== []) {
			setTimeout(curColor.func(objArray), 500);
		} else {
			return 'Well that was fun'
		}
	}
}	

//init(rainbow);