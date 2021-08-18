/**
 *  回溯算法
 *    题目：
 *      1. 二叉树中和为某一值的路径（路径总和）
 *      2. 字符串的排列
 *      3. 和为sum的n个数
 *      4. 矩阵中的路径
 *      5. 机器人的运动范围
 *      6. N皇后问题
 *
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


// permutation('abcd')


// 3. 和为sum的n个数
// 题目：给定无序、不重复的数组data，取出 n 个数，使其相加和为sum
function getAllCombine(array: number[], n, sum, temp, collection) {
  if (temp.length === n) {
    if (temp.reduce((t, c) => t + c) === sum) {
      const res = [...temp];
      collection.push(res);
    }
    return;
  }
  
  for (let i = 0; i < array.length; i++) {
    const current = array.shift();
    temp.push(current);
    getAllCombine(array, n, sum, temp, collection);
    
    temp.pop();
    array.push(current)
  }
}


const arr = [1, 2, 3, 4, 5, 6];
const collection: number[][] = [];
// getAllCombine(arr, 3, 10, [], collection)

// console.log('collection', collection)
// console.log('arr', arr)




