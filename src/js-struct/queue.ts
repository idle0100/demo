console.log('队列');

class Queue<T> {
  private list: Array<T> = [];
  
  constructor() {
    // this.list = [];
  }
  
  // 属性
  get length(): number {
    return this.list.length;
  }
  
  // 入队列
  push(arg: T): number {
    this.list[this.list.length] = arg;
    return this.list.length;
  }
  
  // 出队列
  pop(): T {
    const [res] = this.list.splice(0, 1);
    return res;
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
