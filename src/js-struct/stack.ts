// 先进后出

class Stack<T> {
  protected list: T[] | null = null;
  
  constructor() {
    this.list = [];
  }
  
  get length(): number {
    return this.list.length;
  }
  
  // 入栈
  push(element: T): number {
    this.list.push(element);
    return this.list.length;
  }
  
  // 出栈
  pop(): T {
    return this.list.pop();
  }
}