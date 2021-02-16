/**
 * The grid below to return the decoded messaged IROCKED
 */

const grid = [
    ["I", "B", "C", "A", "K", "E", "A"],
    ["D", "R", "F", "C", "A", "E", "A"],
    ["G", "H", "O", "E", "L", "A", "D"]
];

const decoder = (grid)=> {
   let row = 0;
   let col = 0;
   const colLen = grid[0].length;
   const rowLen = grid.length;
   const result = [];
   let goDown = true

   while(col < colLen) {
       result.push(grid[row][col]);
       col ++;
       if(goDown) {
        if(row+1 === rowLen) {
            goDown = false;
            row --;
        } else {
            row ++
        }
       } else {
         if(row === 0){
            goDown = true;
            row ++;
         } else {
             row --;
         }
       }
   }
   return result;
}

console.log(decoder(grid))