/**
 * 格式化日期
 */
function formatDate(date: Date, format = 'YYYY-MM-DD HH:mm:ss'): string {
    const o = {
        // 'Y+': date.getFullYear(),
        'M+': date.getMonth() + 1,
        'D+': date.getDate(),
        'H+': date.getHours(),  // 24小时制
        'h+': date.getHours() > 12 ? date.getHours() - 12 : date.getHours(), // 12小时制
        'm+': date.getMinutes(),
        's+': date.getSeconds(),
    }

    // 1. 匹配年份
    if (/(Y+)/.test(format)) {
        format = format.replace(RegExp.$1, (date.getFullYear() + '').slice(4 - RegExp.$1.length));
    }

    // 2. 匹配其他(注意位数问题)
    for (let key in o) {
        if (new RegExp(`(${key})`).test(format)) {
            const str = '00' + o[key]
            format = format.replace(RegExp.$1, str.slice(str.length - 2))
        }
    }

    return format;
}

// console.log(formatDate(new Date(), 'YYYY-MM-DD hh:mm:ss'))


/**
 * 排序问题（字符串中数字按数值排序）
 */
function sortNumber(str1: string, str2: string): boolean {
    const len1 = str1.length
    const len2 = str2.length
    const minLen = len1 < len2 ? len1 : len2
    // 主要针对两个字符串中，其中一个字符串与另一个字符串前面相同的情况

    let num1: string = ''
    let num2: string = ''

    // 分情况讨论
    // 1. 1a a1 | a1 a2 | 1a 1b

    let i = 0, j = 0;
    while (i < minLen && j < minLen) {
        if (/[0-9]/.test(str1.charAt(i)) && /[0-9]/.test(str2.charAt(j))) {
            // 出现数字了，需要获取连续出现的所有数字
            num1 += str1.charAt(i++)
            num2 += str2.charAt(j++)

            while (/[0-9]/.test(str1.charAt(i))) {
                num1 += str1.charAt(i++)
            }

            while (/[0-9]/.test(str2.charAt(j))) {
                num2 += str2.charAt(j++)
            }

            // 此时，可以判断连续数字的数值大小了
            const res1 = +num1
            const res2 = +num2
            num1 = ''
            num2 = ''
            if (res1 > res2) {
                return false
            } else if (res1 < res2) {
                return true
            }
            // 继续下一步即可，i,j 已经自增过了，这里不需要自增了

        } else {
            // 1a / aa / a1
            if (str1.charAt(i) > str2.charAt(j)) {
                return false
            } else if (str1.charAt(i) < str2.charAt(j)) {
                return true;
            } else {
                // 继续比较
                i++;
                j++;
            }
        }
    }

    // true: str1<=str2; false: str1> str2

    // 能到这里说明，其中一个字符串与另一个字符串的前面相同
    return len1 <= len2
}


// console.log(sortNumber('a2', 'a11'));

const target: string[] = ['a1c', 'b9', 'a2', 'a21', 'a11', 'b21', 'b1']

// 升序
// 下面问题就转化位排序问题，选一种排序方法吧
for (let i = 0; i < target.length - 1; i++) {
    for (let j = i + 1; j < target.length; j++) {
        if (!sortNumber(target[i], target[j])) {
            [target[i], target[j]] = [target[j], target[i]]
        }
    }
}


// console.log(target)


// 中序遍历（递归实现）
function inorderTraversal(root, array = []) {
    if (root) {
        inorderTraversal(root.left, array)
        array.push(root.val)
        inorderTraversal(root.right, array)
    }
    return array;
}

// 中序遍历（非递归遍历）
function inorderTraversal2(root) {
    const res = []
    const stack = []

    let current = root
    while (current || stack.length > 0) {
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        res.push(current.val)
        current = current.right
    }
    return res;
}


// 前序遍历（递归实现）
function preorderTraversal(root, array = []) {
    if (root) {
        array.push(root.val)
        preorderTraversal(root.left, array)
        preorderTraversal(root.right, array)
    }

    return array;
}


// 后序遍历（递归实现）
function postorderTraversal(root, array = []) {
    if (root) {
        postorderTraversal(root.left, array)
        postorderTraversal(root.right, array)
        array.push(root.val)
    }

    return array;
}