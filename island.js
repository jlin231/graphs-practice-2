function getNeighbors(row, col, graph) {
  
  let coordinates = []
  // Check top
  if (row !== 0 && graph[row-1][col] === 1){
    coordinates.push([row-1, col])
  }
  
  // Check bottom
  if (row < graph.length-1 && graph[row+1][col] === 1){
    coordinates.push([row+1, col])
  }
  // Check left
  if (col !== 0 && graph[row][col-1] === 1){
    coordinates.push([row, col-1])
  }
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1] === 1){
    coordinates.push([row, col +1])
  }
  //top left
  if(row !== 0 && col !== 0 && graph[row-1][col-1]=== 1){
    coordinates.push([row-1,col-1])
  }
  //top right
  if(col < graph[0].length-1 && row !== 0 && graph[row-1][col+1]=== 1){
    coordinates.push([row-1,col+1])
  }
  //bottom left
  if(row< graph.length-1 && col !== 0 && graph[row+1][col-1]=== 1){
    coordinates.push([row+1, col-1])
  }
  //bottom right
  if(row < graph.length-1 && col < graph[0].length - 1 && graph[row+1][col+1]=== 1){
    coordinates.push([row+1, col+1]);
  }
  // Return neighbors
  console.log(coordinates)
  return coordinates
}

function countIslands(matrix) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Initialize count to 0
  let count = 0;
  // Iterate through all indices in matrix
  for(let row = 0; row < matrix.length; row++){
    for(let col = 0; col < matrix[0].length; col++){
      // If an index contains a 1 and has not been visited, 
      let currentNode = [row, col]; 
      if(!visited.has(currentNode.toString()) && matrix[row][col] === 1){
        // increment island count and start traversing neighbors
        // DO THE THING (increment island count by 1)
        count++;
        // Initialize a stack with current index
        let stack = [currentNode];
        // Add stringified version of current index to the visited set
        visited.add([row,col].toString())
        // While stack contains elements
        while(stack.length){
          // Pop element from stack
          let node = stack.pop()
          // Get valid neighbors of current element
          let neighbors = getNeighbors(node[0], node[1], matrix);
          // Iterate over neigbors
          neighbors.forEach((ele) =>{
            // If neighbor has not been visited
            if(!visited.has(ele.toString())){
              // Mark neighbor as visited
              visited.add(ele.toString());
              // Add neighbor to stack
              stack.push(ele);;
            }
          })
        }
      }
    }
  }
  // Return island count
  return count;
  // Your code here
}

// Uncomment the lines below for local testing
// const matrix = [
//                 [1,1,1,0,0],
//                 [0,1,1,0,1],
//                 [0,1,1,0,1]
//               ]

// console.log(getNeighbors(1, 1, matrix)); // [[0, 0], [0, 1], [0, 2], [1, 2], [2, 1], [2, 2]]
// console.log(getNeighbors(2,4, matrix)) // [[1,4]]

// const matrix2 = [
//                     [1,1,1,0,1],
//                     [0,0,0,0,1],
//                     [1,0,0,1,0],
//                 ]

// console.log(countIslands(matrix)) // 2
// console.log(countIslands(matrix2)); // 3

module.exports = [countIslands, getNeighbors];