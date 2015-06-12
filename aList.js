var arrayToList = function (array) {
  var i = array.length - 1;
  var list = {
    value: array[i],
    rest : null
  };
  i--;
  while (i >= 0) {
    list = {
      value :array[i],
      rest: list
    };
    i--;
  }
  return list;
};


var listToArray = function (list) {
  var array = [];
  var smallList = list;
  while (smallList.rest) { //if list.rest is null this will be false
    array.push(smallList.value);
    smallList = smallList.rest;
  }
  array.push(smallList.value);
  return array;
};

var prepend = function (element, list) {
  return {
    rest: list,
    value: element
  };
};

var nth = function (list, number) {
  var i = 0;
  while (i < number) {
    list = list.rest;
    i++;
  }
  return list.value;
};