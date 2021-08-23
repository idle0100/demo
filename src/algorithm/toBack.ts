/**
 * 	回溯算法
 * 		相关题目：
 * 				1. 二叉树中和为某一值的路径
 * 				2. 字符串的排列
 * 				3. 和为sum的n个数
 * 				4. 矩阵中的路径
 * 				5. 机器人的运动范围
 * 				6. N皇后问题
 */

// 和为sum的n个数
function getAllCombine(array: number[], n: number, sum: number, temp: number[]) {
	if (temp.length === n) {
		if (temp.reduce((t, c) => t + c) === sum) {
			return temp;
		}
		return;
	}

	for (let i = 0; i < array.length; i++) {
		const current = array.shift();
		temp.push(current);
		const result = getAllCombine(array, n, sum, temp);
		if (result) {
			// 如果内层得到正确结果的话，将直接结束，不允许回溯过程执行下列语句。
			return result;
		}
		temp.pop();
		array.push(current)
		// array的数据被从头取，然后放置到尾部。
	}
}


// 矩阵中的路径
function hasPath(matrix: string[], rows, cols, path) {
	const flag = new Array(matrix.length).fill(false);

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (hasPathCore(matrix, i, j, rows, cols, path, flag, 0)) {
				return true;
			}
		}
	}
	return false;
}

function hasPathCore(matrix, i, j, rows, cols, path, flag, k): boolean {
	// 起始点
	const index = i * cols + j; // (i, j)
	// 终止异常情况
	if (i < 0 || j < 0 || i >= rows || j >= cols || matrix[index] != path[k] || flag[index]) {
		return false;
	}
	// 终止已完全匹配情况
	if (k === path.length - 1) { //
		return true;
	}

	flag[index] = true; // 防止重复使用

	// 执行到这说明，这一个起点到目前为止与path一致。

	if (hasPathCore(matrix, i + 1, j, rows, cols, path, flag, k + 1) ||
		hasPathCore(matrix, i - 1, j, rows, cols, path, flag, k + 1) ||
		hasPathCore(matrix, i, j + 1, rows, cols, path, flag, k + 1) ||
		hasPathCore(matrix, i, j - 1, rows, cols, path, flag, k + 1)) {
		return true;
	}

	flag[index] = false; // 上面if语句没有进去，说明，下一个字符不匹配，再将字符置为false.并且结束这次查询
	return false;
}

const str = ['a', 'b', 'c', 'e', 's', 'f', 'c', 's', 'a', 'd', 'e', 'e'];

// console.log(hasPath(str, 3, 4, 'bcced'));

// 机器人运动范围
function movingCount(m, n, k) {
	const flag = new Array(m * n).fill(false);
	movingCountCore(m, n, k, flag, 0, 0);

	return flag.filter(item => item).length;
}

//
function movingCountCore(m, n, k, flag, i, j): number {
	const total = ('' + i + j).split('').map(item => +item).reduce((t, c) => t + c);
	const index = i * n + j;
	if (i < 0 || i >= m || j < 0 || j >= n || total > k || flag[index]) {
		return 0;
	}

	flag[index] = true;

	movingCountCore(m, n, k, flag, i - 1, j);
	movingCountCore(m, n, k, flag, i, j + 1);
	movingCountCore(m, n, k, flag, i + 1, j);
	movingCountCore(m, n, k, flag, i, j - 1);
}

// console.log(movingCount(5, 6, 7));


function createArray(rows, cols) {
	const result = new Array(rows) || [];
	for (let i = 0; i < rows; i++) {
		const arr = new Array(cols);
		for (let j = 0; j < cols; j++) {
			arr[j] = false;
		}
		result[i] = arr;
	}
	return result;
}



