var countBs = function(string) {
	counter = 0
	i = 0
	uppercase = string.toUpperCase()
	while (i < string.length) {
		if (string.charAt(i) === uppercase.charAt(i)) {
			counter +=1
		}
			i +=1
	} 
	return counter
};

var countChar = function(string, character) {
	counter = 0
	i = 0
	while (i < string.length) {
		if (string.charAt(i) === character) {
			counter +=1
		}
			i +=1
	} 
	return counter
};




