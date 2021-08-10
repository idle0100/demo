/*
* 二叉树
* */

class Node2 {
  public data;
  public left: Node2 | null;
  public right: Node2 | null;
  
  constructor(data: number, left: Node2, right: Node2) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
  
  show() {
    console.log(this.data);
  }
  
}


class Tree<T> {
  protected root;
  
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    const node: Node2 = new Node2(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    
    let current: Node2 = this.root;
    let parent: Node2 = null;
    while (current) {
      parent = current;
      if (data < parent.data) {
        current = current.left;
        if (!current) {
          parent.left = node;
          return;
        }
      } else {
        current = current.right;
        if (!current) {
          parent.right = node;
          return;
        }
      }
    }
  }
  
  
  preOrder(node: Node2) {
    if (node) {
      node.show();
      this.preOrder((node.left));
      this.preOrder(node.right);
    }
  }
  
  middleOrder(node: Node2) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  }
  
  laterOrder(node: Node2) {
    if (node) {
      this.laterOrder(node.left);
      this.laterOrder(node.right);
      node.show();
    }
  }
  
  getMin() {
    let current = this.root;
    while (current) {
      if (!current.left) {
        return current;
      }
      current = current.left;
    }
  }
  
  getMax() {
    let current = this.root;
    while (current) {
      if (!current.right) {
        return current;
      }
      current = current.right;
    }
  }
  
  // 二叉树深度
  getDeep(node: Node2, deep) {
    deep = deep || 0;
    if (node == null) {
      return deep;
    }
    deep++;
    const dleft = this.getDeep(node.left, deep);
    const dright = this.getDeep(node.right, deep);
    return Math.max(dleft, dright);
  }
  
}


const t = new Tree();

t.insert(3);
t.insert(8);
t.insert(1);
t.insert(2);
t.insert(5);
t.insert(7);
t.insert(6);
t.insert(0);
t.insert(10)

console.log(t);

