/**
 * 二叉树
 */
class Node2 {
  public data: number;
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
  root: Node2;
  
  constructor() {
    this.root = null;
  }
  
  insert(data) {
    const node: Node2 = new Node2(data, null, null);
    if (!this.root) {
      this.root = node;
      return;
    }
    
    let current = this.root;
    let parent = null;
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
  
  // 前序遍历（递归）
  preOrder(node: Node2) {
    if (node) {
      node.show();
      this.preOrder((node.left));
      this.preOrder(node.right);
    }
  }
  
  // 中序遍历（递归）
  middleOrder(node: Node2) {
    if (node) {
      this.middleOrder(node.left);
      node.show();
      this.middleOrder(node.right);
    }
  }
  
  // 后续遍历（递归）
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
  
  /**
   * 二叉树最大深度
   */
  getMaxDeep(node: Node2): number {
    if (node == null) {
      return 0
    }
    const dLeft = this.getMaxDeep(node.left);
    const dRight = this.getMaxDeep(node.right);
    return Math.max(dLeft, dRight) + 1;
  }
  
  /**
   * 二叉树最小深度
   */
  getMinDeep(node: Node2): number {
    if(node) {
      return 0
    }
    
    if (!node.left) {
      return this.getMinDeep(node.left) +  1
    }
    
    if (!node.right) {
      return this.getMinDeep(node.right)
    }
    
    return Math.min(this.getMinDeep(node.left), this.getMinDeep(node.right))
  }
}


// 重建二叉树
// 对称的二叉树
// 二叉树的镜像
// 二叉搜索树的第K个节点
// 二叉搜索树的后序遍历
// 平衡二叉树
// 二叉树中和为某一值的路径
// 二叉搜索树与双向链表
// 序列化二叉树
// 二叉树的下一个节点
// 树的子结构


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


t.preOrder(t.root)


