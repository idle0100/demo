// 针对的数据结构是二维的，
/**
 * 广度优先搜索
 * 题目：
 *    1. 从上到下打印二叉树
 *    2. 单词接龙
 *    3. 员工的重要性
 *    4. 岛屿数量
 */

type LandType = 0 | 1;

// 题目：给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
function numIsLands(grid: LandType[][]): number {
  let count = 0;
  
  // 进行广度搜索
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 1) {
        setZero(grid, i, j)
        count++;
      }
    }
  }
  
  return count;
}

// 将相邻的1置为0，
function setZero(grid: number[][], i, j) {
  if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
    setZero(grid, i, j + 1)
    grid[i][j + 1] = 0;
  }
  
  if (i + 1 < grid.length && grid[i + 1][j] === 1) {
    setZero(grid, i + 1, j);
    grid[i + 1][j] = 0;
  }
}


// 官方解答
function dfs(grid: number[][], r, c) {
  let nr = grid.length;
  let nc = grid[0].length;
  
  if (r < 0 || c < 0 || r >= nr || c >= nc || grid[r][c] == 0) {
    return 0;
  }
  
  // 这是在递归前置为0的，
  grid[r][c] = 0;
  // dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  // dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

function numIslands2(grid: number[][]) {
  if (grid == null || grid.length == 0) {
    return 0;
  }
  
  let nr = grid.length;
  let nc = grid[0].length;
  
  let num_islands = 0;
  for (let r = 0; r < nr; ++r) {
    for (let c = 0; c < nc; ++c) {
      if (grid[r][c] == 1) {
        ++num_islands;
        dfs(grid, r, c)
      }
    }
  }
  
  return num_islands;
}


const demo: LandType[][] = [
  [1, 1, 1, 1, 0],
  [1, 1, 0, 1, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0]
];

const demo2: LandType[][] = [
  [1, 1, 0, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 1, 1]
]

// console.log('demo', numIslands2(demo));
// console.log(demo)
// console.log('demo2', numIslands2(demo2));

// console.log(demo2)


/**
 * 深度优先搜索
 * 题目：
 *    1. 二叉数的中序遍历
 *    2. 二叉树的最大深度
 *    3. 路径总和
 *    4. 课程表
 *    5. 岛屿数量
 */


class Node3 {
  public data: number;
  public left: Node3 | null;
  public right: Node3 | null;
  
  constructor(data: number, left: Node3 = null, right: Node3 = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  
  show() {
    console.log(this.data);
  }
}

/**
 * 路径总和
 * // 自己结合前序遍历写的方法，很臃肿！！！
 */
function hasPathNum(root: Node3, target: number): boolean {
  if (root == null) {
    return false;
  }
  // 前序遍历
  const flag = [false];
  preorder(root, [], target, flag);
  return flag[0];
}

function preorder(root: Node3, array, target, flag) {
  if (root && !flag[0]) {
    array.push(root.data)
    
    console.log('前', array);
    if (!root.left && !root.right) {
      const total = array.length ? array.reduce((prev, curr) => prev + curr) : 0;
      if (total == target) {
        // 查到之后，如何停止呢？
        flag[0] = true;
      } else {
        array.pop();
      }
      return;
    }
    
    preorder(root.left, array, target, flag);
    preorder(root.right, array, target, flag);
    
    // 两个叶子的两条路径都不符合时，在遍历完成后，将该父节点删除
    if (!flag[0]) {
      array.pop();
    }
  }
}

const root5 = new Node3(5)
const root4 = new Node3(4)
const root8 = new Node3(8)
const root11 = new Node3(11)
const root13 = new Node3(13)
const root4_1 = new Node3(4)
const root7 = new Node3(7)
const root2 = new Node3(2)
const root1 = new Node3(1)

root11.left = root7
root11.right = root2
root4.left = root11

root4_1.right = root1
root8.left = root13
root8.right = root4_1

root5.right = root4
root5.left = root8

// const res = hasPathNum(root5, 22);
// console.log(res);

