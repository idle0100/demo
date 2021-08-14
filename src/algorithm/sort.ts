/**
 * 排序
 * 1. 选择排序
 * 2. 冒泡排序
 * 3. 插入排序
 * 4. 堆排序
 * 5. 希尔排序
 * 6. 归并排序
 * 7. 快速排序
 * 8. 桶排序
 * 9. 计数排序
 * 10. 基数排序
 */

type SafeNumber = number;

// 排序么，要么是升序，要么是降序。


// 1. 选择排序
function selectSort() {

}

// 2. 冒泡排序
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

// 2.1 之前常规写法
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


// 3. 插入排序
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


// 6. 归并排序
// 思路：先逐层递归分割数组，知道数组元素小于2时，在回退合并数组。

function mergeSort(array: SafeNumber[]): SafeNumber[] {
  // 递归标配，最里层执行这个，开始回退
  if (array.length < 2) {
    return array
  }
  
  const mid = Math.floor(array.length / 2)
  const front = array.slice(0, mid)
  const end = array.slice(mid)
  
  return merge(mergeSort(front), mergeSort(end))
}

// 该方法返回的肯定是一个有序数组（这里是升序）
function merge(front: SafeNumber[], end: SafeNumber[]): SafeNumber[] {
  const temp = []
  
  while (front.length && end.length) {
    if (front[0] < end[0]) {
      temp.push(front.shift())
    } else {
      temp.push(end.shift())
    }
  } // 跳出循环时，至少有一个数组为空了
  
  while (front.length) {
    temp.push(front.shift())
  }
  
  while (end.length) {
    temp.push(end.shift())
  }
  
  return temp
}

















