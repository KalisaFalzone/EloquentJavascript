var deepEqual = function (item1, item2) {
  if (typeof item1 === 'object' && typeof item2 === 'object') {
    for (var key1 in item1) {
      if (item2.hasOwnProperty(key1) === false){
        return false;
      }
      if (deepEqual(item1[key1], item2[key1]) === false){
          return false;
      }
      return true;
    }
  } else if (item1 === item2) {
    return true;
  } else {
      return false;
  }
};