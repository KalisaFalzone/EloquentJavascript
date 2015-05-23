var chessboard = function(number) {
	firstline = ''
	secondline = ''
	i = 0
	rowcounter = 1
	while (i <= number) {
		firstline = firstline + ' #';
		secondline = secondline + '# ';
		i += 1;
	};
	while (rowcounter <= number/2) {
		console.log(firstline + '\n' + secondline);
		rowcounter += 1;
	};
};

chessboard(20)





