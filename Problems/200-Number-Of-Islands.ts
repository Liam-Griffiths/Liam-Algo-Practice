function numIslands(grid: string[][]): number {
    let islands = 0;
    let matrix = grid;
    let rowPos = 0;
    let colPos = 0;
    for(let row of grid){
        colPos = 0;
        for(let col of row){
            if(col === "1"){
                islands++;
                matrix = seekAndDestroy(rowPos, colPos, matrix);
            }
            colPos++;
        }
        rowPos++;
    }

    function seekAndDestroy(row,col,grid){
        if(grid[row][col] === "0") return grid;
        grid[row][col] = "0";
        if(row-1 >= 0){ //up
            seekAndDestroy(row-1, col, grid);
        }
        if(row+1 < grid.length){ //down
            seekAndDestroy(row+1, col, grid);
        }
        if(col-1 >= 0){ //left
            seekAndDestroy(row, col-1, grid);
        }
        if(col+1 < grid[row].length){ //right
            seekAndDestroy(row, col+1, grid);
        }
        return grid;
    }
    return islands;
};

// Runtime
// 146 ms
// Beats
// 38.40%
// Memory
// 45.5 MB
// Beats
// 90.51%