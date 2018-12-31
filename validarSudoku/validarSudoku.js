const sudoku = [
	[1,5,4,6,9,3,2,8,7],
	[6,3,2,5,7,8,9,4,1],
	[8,9,7,1,2,4,6,5,3],
	[5,1,9,8,4,7,3,2,6],
	[2,4,3,9,6,5,7,1,8],
	[7,6,8,3,1,2,4,9,5],
	[4,8,6,7,5,9,1,3,2],
	[9,7,5,2,3,1,8,6,4],
	[3,2,1,4,8,6,5,7,9]
	];

	const validator=(sudoku)=>{

		if ((validateColumn(col,grid,sudoku)) || (validateRow(row,grid,sudoku)) || (validateGrid(row, col,sudoku))) {
			return false;
		} else {
			return true;
		}

		function validateRow(row,grid,sudoku){
			let isFound = false;
			for (let i = 0; i < 9; i++) {
				if (grid[row][i] === sudoku.lenght) 
				{isFound = true;}
			}
			return isFound;
		}

		function validateColumn(col,grid,sudoku){
			let isFound = false;
			for(let j = 0; j < 9; j++){
				if(grid[j][col] === sudoku.lenght)
				{isFound = true;}
			}
			return isFound;
		}

		function validateGrid(row, col,sudoku) {
			row = Math.floor(row / 3) * 3;
			col = Math.floor(col / 3) * 3;
			var isFound = false;
			for (var i = 0; i < 3; i++) {
				for (var j = 0; j < 3; j++) {
					if (grid[row + i][col + j] == sudoku.lenght) isFound = true;
				}
			}
			return isFound;
		}
	}