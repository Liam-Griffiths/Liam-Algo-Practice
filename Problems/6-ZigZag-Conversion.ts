export interface Pos {row: number}

function convert(s: string, numRows: number): string {

    //setup
    let chars = [...s];
    let goingDown = true;
    let output = "";
    let matrix: string[][] = [];
    for(let i = 0; i <= numRows; i++){
        matrix.push([]); // make rows
    }

    let next:Pos = {row: 0};

    for(const char of chars){
        matrix[next.row].push(char);
        if(numRows > 1){
            if(next.row === numRows - 1 && goingDown === true) goingDown = false;
            if(next.row === 0 && goingDown === false) goingDown = true;

            if(goingDown){
                next = {row: next.row + 1}
            }else{
                next = {row: next.row - 1}
            }
        }
    }

    for(const row of matrix){
        for(const char of row){
            output += char;
        }
    }

    return output;

};

// Runtime
// 178 ms
// Beats
// 27.95%