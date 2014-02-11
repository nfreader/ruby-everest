var fs = require('fs');
var crypto = require('crypto');
var SeededShuffle = require('seededshuffle');
var colors = require('colors');
var seed = process.argv[2];
//Get # of days in calendar year (to account for leap years!)
var days = new Date().getFullYear() % 4 == 0 ? 366 * 3 : 365 * 3 ; 
if (seed == undefined) {
	console.log('You need to specify a seed on the command lines!'.red.inverse);
	console.log('Usage is: node re.js [seed]');
} else {
	console.time('List generated in');
	fs.readFile('words', function(err, data) {
	    if(err){
	    	console.log('You need a wordlist!'.red.inverse);
			throw err;  
	    }
		var array = data.toString().split("\n");
	    var array = SeededShuffle.shuffle(array, seed);
	    var array = array.slice(0,days);    
		var longest = array.sort(function (a, b) { return b.length - a.length; })[0];
		var max = longest.length;
	    var array = SeededShuffle.shuffle(array, seed);
	    var hash = crypto.createHash('sha1').update(array.toString()).digest('hex');
	    /*
	for(i in array) {
			console.log(array[i]);
	    }
	*/
		var i = 0;
		var x = 1;
		var sep = ' | ';
		function pad(value, length) {
	    	return (value.toString().length < length) ? pad(value + ' ', length):value;
		}
		function padLeft(value, length) {
	    	return (value.toString().length < length) ? pad(' ' + value, length):value;
		}
		while(i < days) {
			
			var chal = array[i];
			var duress = array[i+1];
			var norm = array[i+2];
			
			if ((x % 10) == 0) {
				console.log(pad('', max).grey.inverse + pad('',max).black.inverse + pad('', max).red.inverse + pad('', max).green.inverse);
				console.log(pad('     Day', max).grey.inverse + pad('Challenge',max).black.inverse + pad('Duress', max).red.inverse + pad('Normal', max).green.inverse);
				console.log(pad('', max).grey.inverse + pad('',max).black.inverse + pad('', max).red.inverse + pad('', max).green.inverse);
			}
			
			console.log(pad('Day: ' + pad(padLeft(x,3), 3), max).grey.inverse + pad(chal, max).black.inverse + pad(duress, max).red.inverse + pad(norm, max).green.inverse);

			x++;
			i++;
			i++;
			i++;
	
		}
		//console.log(pad('', max).grey.inverse + pad('Challenge',max).black.inverse + pad('Duress', max).red.inverse + pad('Normal', max).green.inverse);
		console.log('Longest word is ' + longest + ' with ' + max + ' characters');
	    console.log('The hash for this wordlist is ' + hash.grey.inverse);
	    console.log('This list was generated with the seed: ' + seed.red.inverse);
	    //console.('List generated in' + timeEnd());
	    console.timeEnd('List generated in');
	});
}