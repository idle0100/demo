/**
 * 二叉树
 * 思路的正确性, 好的思路可以事半功倍.
 */

class Node2 {
	public data: number;
	public left: Node2 | null;
	public right: Node2 | null;

	constructor(data: number, left: Node2 = null, right: Node2 = null) {
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

	/**
	 * 这是生成二叉搜索树的
	 */
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
		if (node) {
			return 0
		}

		if (!node.left) {
			return this.getMinDeep(node.left) + 1
		}

		if (!node.right) {
			return this.getMinDeep(node.right)
		}

		return Math.min(this.getMinDeep(node.left), this.getMinDeep(node.right))
	}


	isBalance_Solution(node: Node2) {
		return this.balanced(node) != -1;
	}

	/*
	* 解释一下: 为什么后序可以进行平衡二叉树的判定?
	* 答: 后序遍历是LRD的顺序进行的, 它首先是进行两个子树的查询,所以符合平衡二叉树判定的逻辑.
	* */

	private balanced(node: Node2): number {
		if (!node) {
			return 0;
		}

		const left = this.balanced(node.left)
		const right = this.balanced(node.right)

		// 若有一个子树返回-1,表示该子树不平衡,那么该子树父节点也不平衡
		// 若该子树两边深度插值大于1, 则该节点不平衡
		if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
			return -1;
		}

		return Math.max(left, right) + 1;
	}

}


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


/**
 * 重建二叉树
 * 题目:给定前序和中序序列.
 */
function reConstructBinaryTree(pre: number[], vin: number[]) {
	if (pre.length === 0) {
		return null
	}

	if (pre.length === 1) {
		return new Node2(pre[0])
	}

	// pre.length >= 2
	const value = pre[0]
	const index = vin.indexOf(value)
	// 左子树的节点个数
	const vinLeft = vin.slice(0, index)
	const vinRight = vin.slice(index + 1)

	const preLeft = pre.slice(1, index + 1)
	const preRight = pre.slice(index + 1)

	const node = new Node2(value)
	node.left = reConstructBinaryTree(preLeft, vinLeft)
	node.right = reConstructBinaryTree(preRight, vinRight)

	return node
}

/**
 * 求二叉树的遍历
 */
function getHRD(pre: string, vin: string): string {
	if (pre.length !== vin.length) {
		throw Error('两个字符串长度不等')
	}

	if (pre.length === 0) {
		return ''
	}

	if (pre.length === 1) {
		return pre
	}

	// pre.length >= 2

	// const head = pre.charAt(0)
	const head = pre[0]
	const splitIndex = vin.indexOf(head)
	const vinLeft = vin.substring(0, splitIndex)
	const vinRight = vin.substring(splitIndex + 1)

	const preLeft = pre.substring(1, splitIndex + 1)
	const preRight = pre.substring(splitIndex + 1)

	return getHRD(preLeft, vinLeft) + getHRD(preRight, vinRight) + head;
}

/**
 * 镜像二叉树
 */
function Mirror(node: Node2) {
	if (node.left || node.right) {
		// 先从底部换和先从顶部换, 结果是一样的.

		this.Mirror(node.left)
		this.Mirror(node.right)

		const temp = node.left
		node.left = node.right
		node.right = temp
	}
}

/**
 *  对称二叉树
 *  要求: 左右子树深度相等,
 */
function isSymmetrical(node: Node2) {
	return isSymmetricalTree(node.left, node.right)
}

function isSymmetricalTree(node1: Node2, node2: Node2): boolean {
	if (!node1 && !node2) {
		return true;
	}

	if (!node1 || !node2) {
		return false;
	}

	if (node1.data !== node2.data) {
		return false;
	}

	return isSymmetricalTree(node1.left, node2.right) && isSymmetricalTree(node1.right, node2.left);
}


/**
 * 二叉搜索树的第K个节点
 */
function KthNode(node, k) {
	const arr = []
	loopThrough(node, arr)
	if (k > 0 && k <= arr.length) {
		return arr[k - 1]
	}
	return null
}

// 中序遍历(递归)
function loopThrough(node: Node2, arr) {
	if (node) {
		loopThrough(node.left, arr)
		arr.push(node.data)
		loopThrough(node.right, arr)
	}
}


/**
 * 二叉搜索树的后序遍历
 */
// 问题：输入一个整数数组，判断该数组是不是某二叉搜索树的后续遍历的结果，
// 如果是则输出Yes,否则输出No。假设输入的数组的任意两个数字都互不相同。

// 思路：
// 二叉搜索树的中序遍历必是一个升序的序列，而后续遍历的最后一个数的根节点。
// 中序遍历中根节点左边是左子树的的节点

function verifySequenceOfBST(sequence: number[]): boolean {
	if (sequence && sequence.length) {
		const root = sequence[sequence.length - 1];

		for (let i = 0; i < sequence.length - 1; i++) {
			if (sequence[i] > root) {
				break
			}

			for (let j = i; j < sequence.length - 1; j++) {
				if (sequence[j] < root) {
					return false
				}
			}

			let left = true;
			if (i > 0) {
				left = verifySequenceOfBST(sequence.slice(0, i))
			}

			let right = true;
			if (i < sequence.length - 1) {
				right = verifySequenceOfBST(sequence.slice(i, sequence.length - 1))
			}

			return left && right;
		}
	}
}
