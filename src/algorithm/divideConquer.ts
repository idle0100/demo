/*
* 算法思想 - 分治
* */

// 问题：在数组中的两个数字，如果前面一个数字大于后面的数字，则这两个数字组成一个逆序对。
// 输入一个数组,求出这个数组中的逆序对的总数P。

import { SafeNumber } from "./sort";

function inversePairs(array: SafeNumber[]) {
  return mergeSort(array, 0, array.length - 1, [])
}

function mergeSort(array: SafeNumber[], left: SafeNumber, right: SafeNumber, temp: SafeNumber[]): SafeNumber {
  if (left < right) {
    // left != right left可能=mid mid != right
    const mid = Math.floor((left + right) / 2)
    
    // 左边逆序对个数
    const l = mergeSort(array, left, mid, temp)
    // 右边逆序对个数
    const r = mergeSort(array, mid + 1, right, temp)
    // 左右之间逆序对个数
    const m = merge(array, left, right, mid, temp)
    
    return l + m + r
  } else {
    // left >= right
    return 0
  }
}

function merge(array: SafeNumber[], left: SafeNumber, right: SafeNumber, mid: SafeNumber, temp: SafeNumber[]): SafeNumber {
  let count = 0
  
  let leftIndex = mid
  let rightIndex = right
  let tempIndex = right - left
  
  while (leftIndex >= left && rightIndex > mid) {
    if (array[leftIndex] > array[rightIndex]) {
      count += (rightIndex - mid)
      temp[tempIndex--] = array[leftIndex--]
    } else {
      temp[tempIndex--] = array[rightIndex--]
    }
  }
  
  while (leftIndex >= left) {
    temp[tempIndex--] = array[leftIndex--]
  }
  
  while (rightIndex > mid) {
    temp[tempIndex--] = array[rightIndex--]
  }
  
  tempIndex = 0
  
  for (let i = left; i <= right; i++) {
    array[i] = temp[tempIndex++]
  }
  
  console.log(temp)
  
  return count;
}


const arr = [1, 9, 5, 4, 6, 3]

console.log(inversePairs(arr));
console.log(arr)

