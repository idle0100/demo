/**
 * 动态规划
 */

import lodash from '../../node_modules/lodash/lodash.js'


// 1. 最小路径和
function minPathSum(grid: Array<Array<number>>): any {
  let m = grid.length;
  let n = grid[0].length;
  
  // [0,0] -> [m,n]找一条最小和路径
  // 返回数组个数 m + n -1
  
  const no = [];
  
  for (let i = 0; i < m; i++) {
    no.push([...grid[i]])
  }
  
  
  for (let i = 1; i < m; i++) {
    grid[i][0] += grid[i - 1][0];
  }
  
  for (let j = 1; j < n; j++) {
    grid[0][j] += grid[0][j - 1];
  }
  
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // const min = grid[i - 1][j] > grid[i][j - 1] ? grid[i][j - 1] : grid[i - 1][j]
      // grid[i][j] += min;
      
      grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1]);
    }
  }
  
  // 我想返回路径
  
  const temp: Array<Array<number>> = [];
  temp.push([m - 1, n - 1]);
  f(grid, m - 1, n - 1, temp);
  temp.push([0, 0])
  
  temp.reverse();
  
  const result = new Array(n).fill(0);
  const res = [];
  for (let i = 0; i < m; i++) {
    res.push([...result]);
  }
  
  for (let q = 0; q < temp.length; q++) {
    res[temp[q][0]][temp[q][1]] = no[temp[q][0]][temp[q][1]]
  }
  
  
  console.log(res)
  
  return grid[m - 1][n - 1]
}


function f(grid, m, n, temp) {
  if (!m || !n) {
    return;
  }
  
  if (grid[m - 1][n] > grid[m][n - 1]) {
    temp.push([m, n - 1])
    f(grid, m, n - 1, temp);
  } else {
    temp.push([m - 1, n])
    f(grid, m - 1, n, temp);
  }
}


const grid = [
  [1, 3, 4, 8],
  [3, 2, 2, 4],
  [5, 7, 1, 9],
  [2, 3, 2, 3]
];

// console.log(minPathSum(grid));
minPathSum(grid)
// console.log(grid)


var objects = [{ 'a': 1 }, { 'b': 2 }];

var deep = lodash.cloneDeep(objects);
console.log(deep[0] === objects[0]);