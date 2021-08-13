/**
 * 排序
 */
// 1. 冒泡排序
function bubbleSort<T>(array: Array<T>): Array<T> {
  // 升序
  for (let j = 0; j < array.length; j++) {
    let complete = true;
    // 执行下面一次for循环后，会找出前array.length-1-j中最大的那个数，并前期放置于第array.length-1-j-1的位置上。
    for (let i = 0; i < array.length - 1 - j; i++) {
      if (array[i] > array[i + 1]) {
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
        complete = false;
      }
    }
    
    if (complete) {
      break;
    }
  }
  return array;
}

// 1.1 之前常规写法
function bubbleSort2<T>(array: Array<T>): Array<T> {
  // 升序
  for (let i = 0; i < array.length - 1; i++) {
    // 执行一次for循环后，将最小的值放置于i位.
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        [array[i], array[j]] = [array[j], array[i]];
      }
    }
  }
  
  return array;
}


// 2. 插入排序
function insertSort2<T>(array: Array<T>): Array<T> {
  
  for (let i = 1; i < array.length; i++) {
    if (array[i] < array[0]) {
      const [res] = array.splice(i, 1);
      array.splice(0, 0, res);
      continue;
    }
    
    for (let j = 1; j < i; j++) {
      if (array[i] > array[j - 1] && array[i] < array[j]) {
        const [res] = array.splice(i, 1);
        array.splice(j, 0, res);
        break;
      }
    }
  }
  return array;
}


function insertSort<T>(array: Array<T>): Array<T> {
  
  for (let i = 1; i < array.length; i++) {
    let target = i
    for (let j = i - 1; j >= 0; j--) {
      // 分析：j是递减的，target=j可能会是相邻两两比较的情况。
      
      if (array[target] < array[j]) {
        [array[target], array[j]] = [array[j], array[target]]
        target = j
      } else {
        break
      }
    }
  }
  return array
}


const arr = [4, 6, 2, 9, 5];


// 3. 归并排序

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  
  const mid = Math.floor(array.length / 2)
  const front = array.slice(0, mid)
  const end = array.slice(mid)
  
  return merge(mergeSort(front), mergeSort(end))
}

function merge(front, end) {
  const temp = []
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift())
    } else {
      temp.push(end.shift())
    }
  }
  
  while (front.length) {
    temp.push(front.shift())
  }
  
  while (end.length) {
    temp.push(end.shift())
  }
  
  return temp
}

















