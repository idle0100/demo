import { SafeNumber } from "../algorithm/sort";

type HeapType = 'min' | 'max';

/**
 * 堆（最大堆、最小堆）
 */
class Heap {
  type: HeapType;
  value: SafeNumber[];
  
  constructor(type: HeapType = 'min', array: SafeNumber[]) {
    this.type = type;
    this.value = array;
  }
  
  // 创建
  create(): void {
    const length = this.value.length;
    for (let i = Math.floor((length / 2) - 1); i >= 0; i--) {
      this.adjust(i, length);
    }
  }
  
  private adjust(index: number, length: number): void {
    const array = this.value;
    
    for (let i = 2 * index + 1; i < length; i = 2 * i + 1) {
      if (i + 1 < length) {
        if ((this.type === 'max' && array[i + 1] > array[i]) || (this.type === 'min' && array[i + 1] < array[i])) {
          i++;
        }
      }
      
      if ((this.type === 'max' && array[index] < array[i]) || (this.type === 'min' && array[index] > array[i])) {
        [array[index], array[i]] = [array[i], array[index]];
        index = i;
      } else {
        break;
      }
    }
  }
  
  // 堆的插入
  add(element: SafeNumber) {
    const array = this.value;
    array.push(element);
    
    if (array.length > 1) {
      let index = array.length - 1;
      let target = Math.floor((index - 1) / 2);
      
      while (target >= 0) {
        if ((this.type === 'min' && array[index] < array[target]) || (this.type === 'max' && array[index] > array[target])) {
          [array[index], array[target]] = [array[target], array[index]]
          index = target;
          target = Math.floor((index - 1) / 2);
        } else {
          break;
        }
      }
    }
  }
  
  // 堆的移除
  pop(): SafeNumber {
    const array = this.value;
    let result = null;
    
    if (array.length > 1) {
      result = array[0];
      array[0] = array.pop();
      this.adjust(0, array.length);
    } else if (array.length === 1) {
      return array.pop()
    }
    return result;
  }
}


const heap = new Heap('max', [3, 5, 7, 9, 8]);
// heap.add(6);
// heap.add(10);
//
// console.log(heap.value);
// console.log(heap.pop());
// console.log(heap.value);






















