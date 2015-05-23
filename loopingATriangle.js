
console.log('while loop')

var hashstring = '#'
while (hashstring.length <7) {
  hashstring = hashstring +'#';
  console.log(hashstring);
  };

console.log('for loop with counter');

var counterfor = 1;
var hashstringfor = '#';
for (counterfor = 0; counterfor < 7; counterfor += 1) {
	console.log(hashstringfor);
	hashstringfor = hashstringfor + '#';
}

console.log('for loop no counter');

for (var hashstringfor2 = '#'; hashstringfor2.length < 7; hashstringfor2 = hashstringfor2 + '#') {
	console.log(hashstringfor2);
}
