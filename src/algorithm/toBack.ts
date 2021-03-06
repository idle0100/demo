/**
 *  回溯算法
 *  相关题目：
 *    1. 二叉树中和为某一值的路径
 *    2. 字符串的排列
 *    3. 和为sum的n个数
 *    4. 矩阵中的路径
 *    5. 机器人的运动范围
 *    6. N皇后问题
 */
// 1. 路径总和
function findPath(root, expectNumber: number) {
  const result = [];
  if (root) {
    findPathCore(root, expectNumber, [], 0, result);
  }
  
  return result;
}

// 个人提问：找到后，在回退时，好像还需要去依次执行完后面的函数呀！！！
function findPathCore(node, expectNumber, stack, sum, result) {
  stack.push(node.val);
  
  sum += node.val;
  
  if (!node.left && !node.right && sum === expectNumber) {
    result.push(stack.slice(0));
  }
  
  if (node.left) {
    findPathCore(node.left, expectNumber, stack, sum, result);
  }
  
  if (node.right) {
    findPathCore(node.right, expectNumber, stack, sum, result);
  }
  
  stack.pop();
}


// 2. 字符串排列（公式Ann）
// 题目：
//     输入一个字符串,按字典序打印出该字符串中字符的所有排列。例如输入字符串abc,
//     则打印出由字符a,b,c所能排列出来的所有字符串abc,acb,bac,bca,cab和cba。
function permutation(str: string) {
  const result = [];
  if (str) {
    let queue = str.split('');
    permutationCore(queue, result);
  }
  
  result.sort();
  
  return result;
}

let count = 0;

function permutationCore(queue: string[], result, temp = '', current = '') {
  
  current += temp;
  if (queue.length === 0) {
    result.push(current);
    return;
  }
  
  for (let i = 0; i < queue.length; i++) { // ['c', 'd']
    temp = queue.shift();
    permutationCore(queue, result, temp, current);
    queue.push(temp);
    console.log(count++)
  }
}


// 3. 和为sum的n个数
function getAllCombine(array: number[], n: number, sum: number, temp: number[]) {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      return temp;
    }
    return;
  }
  
  for (let i = 0; i < array.length; i++) {
    const current = array.shift();
    temp.push(current);
    const result = getAllCombine(array, n, sum, temp);
    if (result) {
      // 如果内层得到正确结果的话，将直接结束，不允许回溯过程执行下列语句。
      return result;
    }
    temp.pop();
    array.push(current)
    // array的数据被从头取，然后放置到尾部。
  }
}


// 4. 矩阵中的路径
function hasPath(matrix: string[], rows, cols, path) {
  const flag = new Array(matrix.length).fill(false);
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (hasPathCore(matrix, i, j, rows, cols, path, flag, 0)) {
        return true;
      }
    }
  }
  return false;
}

function hasPathCore(matrix, i, j, rows, cols, path, flag, k): boolean {
  // 起始点
  const index = i * cols + j; // (i, j)
  // 终止异常情况
  if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[index] != path[k] || flag[index]) {
    return false;
  }
  // 终止已完全匹配情况
  if (k === path.length - 1) { //
    return true;
  }
  
  flag[index] = true; // 防止重复使用
  
  // 执行到这说明，这一个起点到目前为止与path一致。
  
  if (hasPathCore(matrix, i + 1, j, rows, cols, path, flag, k + 1) ||
    hasPathCore(matrix, i - 1, j, rows, cols, path, flag, k + 1) ||
    hasPathCore(matrix, i, j + 1, rows, cols, path, flag, k + 1) ||
    hasPathCore(matrix, i, j - 1, rows, cols, path, flag, k + 1)) {
    return true;
  }
  
  flag[index] = false; // 上面if语句没有进去，说明，下一个字符不匹配，再将字符置为false.并且结束这次查询
  return false;
}

const str = ['a', 'b', 'c', 'e', 's', 'f', 'c', 's', 'a', 'd', 'e', 'e'];

// console.log(hasPath(str, 3, 4, 'bcced'));

// 5. 机器人运动范围
function movingCount(m, n, k) {
  const flag = new Array(m * n).fill(false);
  movingCountCore(m, n, k, flag, 0, 0);
  
  return flag.filter(item => item).length;
}

//
function movingCountCore(m, n, k, flag, i, j): number {
  const total = ('' + i + j).split('').map(item => +item).reduce((t, c) => t + c);
  const index = i * n + j;
  if (i < 0 || i >= m || j < 0 || j >= n || total > k || flag[index]) {
    return 0;
  }
  
  flag[index] = true;
  
  movingCountCore(m, n, k, flag, i - 1, j);
  movingCountCore(m, n, k, flag, i, j + 1);
  movingCountCore(m, n, k, flag, i + 1, j);
  movingCountCore(m, n, k, flag, i, j - 1);
}


// 6. N皇后问题

class ListNode {
  val: number;
  next: ListNode | null;
  
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
  }
}

/**
 * 递归
 * 两链表相加
 * @param l1
 * @param l2
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let root = null;
  let result = null;
  let carry = 0;
  
  while (l1 || l2) {
    const m1 = l1 ? l1.val : 0;
    const m2 = l2 ? l2.val : 0;
    const total = m1 + m2 + carry;
    
    if (!root) {
      root = result = new ListNode(total % 10);
    } else {
      result.next = new ListNode(total % 10);
      result = result.next;
    }
    
    carry = Math.floor(total / 10);
    
    if (l1) {
      l1 = l1.next;
    }
    if (l2) {
      l2 = l2.next
    }
  }
  
  if (carry > 0) {
    result.next = new ListNode(carry);
  }
  
  return root;
}

const c1 = new ListNode(6)
const c2 = new ListNode(9, c1)
const c3 = new ListNode(9, c2)
const c4 = new ListNode(9, c3)
const c5 = new ListNode(9, c4)
const c6 = new ListNode(9, c5)
const c7 = new ListNode(9, c6)

const d1 = new ListNode(9)
const d2 = new ListNode(9, d1)
const d3 = new ListNode(9, d2)
const d4 = new ListNode(9, d3)


let result = addTwoNumbers(c7, d4);

// while (result) {
//   console.log(result.val);
//   result = result.next;
// }


/**
 * 最长回文子串
 * @param s
 */
