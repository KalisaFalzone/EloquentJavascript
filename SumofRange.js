var range = function(start, end, step) {
	var range = [start]
	var x=start
	if (start < end) {
		while (x < end) {
			x += step || 1
			range.push(x)
		};
	} else {
		while (x > end) {
			x += step
			range.push(x)
		};
	};
	return range;
};

var sum = function(array) {
	i = 1
	sum = array[0]
	while (i < array.length){
		sum += array[i]
		i+=1
	};
	return sum;
};