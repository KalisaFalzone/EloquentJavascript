var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a,b) {
  return a.concat(b);
}, []));

//Before I realized reduce was already a built in method I had had this code:

// var reduce = function(array, combine, start) {
//   var flattenedarray = start;
//   for (var i = 1; i < array.length; i++) {
//     flattenedarray = combine(flattenedarray, array[i]);
//   }
//   return flattenedarray;
// };

// console.log(reduce(arrays, function(a,b) {
//   return a.concat(b);
// }, arrays[0]));
