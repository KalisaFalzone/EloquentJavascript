//function that will create a new array that is the reverse of the original array
var reverseArray = function (array) {
  var newArray = [];
    var i = 0;
    while (i < array.length) {
      newArray.unshift(array[i]);
      i += 1
    };
    return newArray;
};

//function that will reverse the order of elements in an array
var reverseArrayInPlace = function(array) {
	i = 0
	while (i < array.length/2) {
	a = array[i];
	b = array[array.length-1-i];
	array[i] = b;
	array[array.length-1-i] = a;
	i +=1;
	}
	return array
};
