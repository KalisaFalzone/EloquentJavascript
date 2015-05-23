i = 1
/*while (i <= 100) {
	if (i%3 === 0 && i%15 === 0){
		console.log('fizzbuzz');
	} else if (i%3 === 0) {
		console.log('fizz');
	} else if (i%5 === 0) {
		console.log('buzz');
	} else {
		console.log(i);
	}
	i+=1
};
*/

i = 1
while (i <= 100) {
	string = ''
	if (i%3 === 0) {
		string = string + 'fizz';
	}
	if (i%5 === 0) {
		string = string + 'buzz';
	}
	else {
		string = i;
	}
	console.log(string)
	i += 1
}