// 先进先出

class Queue<T> {
  protected list: T[] | null = null;
  
  constructor() {
    this.list = [];
  }
  
  // 属性
  get length(): number {
    return this.list.length;
  }
  
  // 入队列
  push(element: T): number {
    // this.list[this.list.length] = element;
    this.list.push(element);
    return this.list.length;
  }
  
  // 出队列
  pop(): T {
    return this.list.shift();
  }
}


const queue = new Queue<number>()

queue.push(3)
queue.push(5)
queue.push(7)
queue.push(9)

queue.pop();
console.log(queue.pop());

console.log('queue', queue);
