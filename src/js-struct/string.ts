/**
 * 1. 判断字符串是否表示数值（锻炼思想）
 */
function isNumeric(s: string): boolean {
  if (s === undefined) return false;
  
  let hasPoint = false;
  let hasExp = false;
  
  for (let i = 0; i < s.length; i++) {
    const target = s[i];
    if (/[0-9]/.test(target)) {
      continue;
    } else if (/[eE]/.test(target)) {
      if (hasExp || i === 0 || i === s.length - 1) {
        return false;
      } else {
        hasExp = true;
        continue;
      }
    } else if (target === '.') {
      if (hasPoint || hasExp || i === 0 || i === s.length - 1) {
        // 当这个点出现时，前面有e/E/.了或这个点在首位或尾部时，返回false
        return false;
      } else {
        hasPoint = true;
        continue;
      }
    } else if (target === '-' || target === '+') {
      // 只能出现在两个位置
      if (i === 0 || s[i - 1] === 'e' || s[i - 1] === 'E') {
        continue;
      } else {
        return false;
      }
    } else {
      // 存在其它字符
      return false
    }
  }
  
  return true;
}

/**
 * 2. 替换空格
 */
function replaceSpace(str: string): string {
  return str.split(' ').join('%20');
}

function replaceSpace2(str: string): string {
  return str.replace(/\s/g, '%20');
}

// 两数之和
function twoSum(nums: number[], target: number): number[] {
  // 遍历？
  for (let i = 0; i < nums.length - 1; i++) {
    const minus = target - nums[i];
    if (nums.includes(minus) && nums[i] !== minus) {
      // 一般后面的索引都是比i大的。
      return [i, nums.findIndex(num => num === minus)]
    }
  }
  return [];
}

function twoSum2(nums: number[], target: number): number[] {
  const map = {};
  if (Array.isArray(nums)) {
    for (let i = 0; i < nums.length; i++) {
      if (map[target - nums[i]] != undefined) {
        return [map[target - nums[i]], i];
      } else {
        map[nums[i]] = i;
      }
    }
  }
  return [];
}

