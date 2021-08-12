class LinkNode<T> {
  element: T;
  next: LinkNode<T>;
  
  constructor(element: T) {
    this.element = element;
    this.next = null;
  }
}

/* 查找指定元素的位置 */

// 链表
class LinkedList<T> {
  head: LinkNode<T>;
  length: number;
  
  constructor() {
    this.head = null;
    this.length = 0;
  }
  
  // 追加元素
  append(element: T) {
    const node = new LinkNode<T>(element);
    let current = null;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  
  // 任意位置插入元素
  insert(position: number, element: T) {
    if (position >= 0 && position <= this.length) {
      const node = new LinkNode<T>(element);
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = node;
      } else {
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        node.next = current;
        previous.next = node;
      }
      this.length++;
      return true;
    }
    return false;
  }
  
  // 移除指定位置元素
  removeAt(position: number): T | null {
    // 检查越界值
    if (position > -1 && position < length) {
      let current = this.head;
      let previous = null;
      let index = 0;
      if (position === 0) {
        this.head = current.next;
      } else {
        // 跳出循环时，current指向position位置的节点。
        while (index++ < position) {
          previous = current;
          current = current.next;
        }
        previous.next = current.next;
      }
      this.length--;
      return current.element;
    }
    return null;
  }
  
  // 寻找元素下标
  findIndex(element: T): number {
    let current = this.head;
    let index = -1;
    while (current) {
      if (element === current.element) {
        return index + 1;
      }
      index++;
      current = current.next;
    }
    return -1;
  }
  
  isEmpty() {
    return !this.length;
  }
  
  size(): number {
    return this.length;
  }
  
  // 转为字符串
  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += ` ${ current.element }`;
      current = current.next;
    }
    return string;
  }
}


const linkedList = new LinkedList();

console.log(linkedList);
linkedList.append(2);
linkedList.append(6);
linkedList.append(24);
linkedList.append(152);

linkedList.insert(3, 18);
console.log(linkedList);
console.log(linkedList.findIndex(24));
