var deepEqual = function (item1, item2) {
  if (item1 === item2) {
    return true;
  } else if (typeof item1 === 'object' && typeof item2 === 'object') {
    var prop1 = 0;
    var prop2 = 0;

    for (var key in item1) {
      prop1 +=1;
    }

    for (var key in item2) {
      prop2 +=1;
    }

    if (prop1 !== prop2) {
      return false;
    }

    for (var key1 in item1) {
      if (item2.hasOwnProperty(key1) === false){
        return false;
      }
      if (deepEqual(item1[key1], item2[key1]) === false){
          return false;
      }
      return true;
    }
  } else {
      return false;
  }
};