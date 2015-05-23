var isEven = function (a) {
	counter = a
	if (counter < 0) {
		counter = counter *-1
	}
	if (counter === 0) {
		return true
	} else if (counter === 1) {
		return false
	} else {
		counter = a-2
		return isEven(counter)
	}
};




