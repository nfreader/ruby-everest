var fs = require('fs');
fs.readFile('words', function(err, data) {
if(err){
    console.log('Error: No word list found!');
    throw err;  
}

else {
	console.log('Wordlist ok!');
}
var SeededShuffle = require('seededshuffle');
	if (SeededShuffle == undefined) {
		console.log('Error: Package not found. Did you run npm install?');
		throw err; 
	} else {
		console.log('Dependency: SeededShuffle ok!');
	}
var colors = require('colors');
	if (colors == undefined) {
		console.log('Error: Package not found. Did you run npm install?');
		throw err; 
	} else {
		console.log('Dependency: color ok!');
	}

});