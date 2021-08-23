/**
 * 动态规划
 */

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

// minPathSum(grid)


// 2. 打家劫舍
function rob(array: number[]): number {
  // 取不相邻的数，写算法，返回最大值
  const n = array.length;
  // 最多取Math.ceil(n / 2)个数
  
  const result = [];
  
  // for (let i = 0; i < n;) {
  //   if (!array[i + 1]) {
  //     result.push(array[i]);
  //     break
  //   }
  //
  //   if (!array[i + 2]) {
  //     result.push(Math.max(array[i], array[i + 1]));
  //     break;
  //   }
  //
  //   if ((array[i] + array[i + 2]) > array[i + 1] || array[i] > array[i + 1]) {
  //     result.push(array[i])
  //     i = i + 2;
  //   } else {
  //     result.push(array[i + 1])
  //     i = i + 3;
  //   }
  // }
  
  // let k = 0;
  // while (k < n) {
  //   if (!array[k + 1]) {
  //     result.push(array[k])
  //     break;
  //   } else if (!array[k + 2]) {
  //     result.push(Math.max(array[k], array[k + 1]))
  //     break;
  //   } else {
  //     const temp = array[k] + array[k + 2] > array[k + 1] ? k : k + 1;
  //     result.push(array[temp])
  //     k = temp + 2;
  //   }
  // }
  
  
  const dp = [];
  dp[0] = array[0];
  dp[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 2] + array[i], dp[i - 1])
  }
  
  
  return dp[dp.length - 1]
}

const arrRob = [2, 11, 9, 3, 1];


// 2.2 打家劫舍，数组首尾相邻了


/**
 * 贪心算法
 */
function findContentChildren(c: number[], t: number[]): number {
  // 升序
  c = c.sort((a, b) => a - b);
  t = t.sort((a, b) => a - b);
  
  let num = 0;
  let cookie = 0;
  let child = 0;
  
  while (cookie < t.length && child < c.length) {
    if (c[child] <= t[cookie]) {
      num += 1
      child += 1
    }
    cookie += 1
  }
  
  return num
}
