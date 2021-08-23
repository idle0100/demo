/**
 *  递归和循环
 */


// 1. 斐波那契数列
// f(n) = f(n-1) + f(n-2) (n>=2)
function fibonacci(n: number) {
  if (n < 2) {
    return n
  }
  
  return fibonacci(n - 1) + fibonacci(n - 2)
  // 问题是这样递归进去，二叉树式的过程，靠近叶子部分很多，并且这些叶子都一样，会进行太多无意义的运算。
}


function fibonacci2(n: number, memory = []) {
  if (n < 2) {
    return n
  }
  
  // memory = [null,null, null, 2, ... ]
  
  if (!memory[n]) {
    memory[n] = fibonacci2(n - 1, memory) + fibonacci2(n - 2, memory)
    // 这样的话，右边函数在递归时，根本不会进入这个if内。
  }
  
  return memory[n]
}


function fibonacciDynamic(n: number) {
  if (n <= 1) {
    return n
  }
  
  let i = 1;
  let pre = 0; // f(0) = 0
  let current = 1; // f(1) = 1
  let result = 0;
  
  // n从2开始
  while (i++ < n) { // 执行次数
    result = pre + current
    pre = current
    current = result
  }
  
  return result
}


// 2. 跳台阶
function jumpFloor(n: number) {
  if (n <= 2) {
    return n
  }
  
  let i = 2;
  let pre = 1;
  let current = 2;
  let result = 0;
  
  while (i++ < n) {
    result = pre + current
    pre = current
    current = result
  }
  
  return result
}


// 3. 矩形覆盖
function rectCover(n) {

}










