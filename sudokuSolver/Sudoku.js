    

function sudokuSolver(sudoku){
    let nonPosibilities = {};
    let savePosibilidades;
    let espaciosVacios ;
   
    while(espaciosVacios > 0){
        espaciosVacios = 0;
        for(let columnas = 0; columnas < sudoku.length; columnas++){
            for(let fila=0; fila < sudoku.length; fila++){
                if(sudoku[columnas][fila] === 0){
                   for(let i=0; i < 9; i++){
                        if(sudoku[columnas][i] > 0){
                           nonPosibilities[sudoku[columnas][i]] = true; 
                        }
                        if(sudoku[i][fila] > 0){
                            nonPosibilities[sudoku[i][fila]] = true
                        }
                   }
                   for(let columnaGrid = columnas; columnaGrid < (columnas / 3) + 3 ; columnaGrid++){
                       for(let filaGrid = fila; filaGrid < (fila / 3) + 3 ; fila++){
                            if(sudoku[columnaGrid][filaGrid]){      
                                nonPosibilities[sudoku[columnaGrid][filaGrid]] = true;
                            }
                       }
                   }
                   //console.log(nonPosibilities);
                   savePosibilidades = Object.keys(nonPosibilities);
                    if(savePosibilidades.length === 8){
                        for(let j=1; j < 10; j++){
                            if(savePosibilidades.indexOf(j.toString()) < 0){
                                //console.log(columnas,fila);
                                sudoku[columnas][fila] = j;
                            }
                        }
                    }else{
                        espaciosVacios++;
                    }
                }
            }
        }
    }
            
    return sudoku;
}

const sudoku = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [2,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

console.log(sudokuSolver(sudoku));
