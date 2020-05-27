/*
 * @Author: your name
 * @Date: 2020-05-26 09:37:42
 * @LastEditTime: 2020-05-26 11:05:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/15.3-sum.js
 */
/*
 * @lc app=leetcode id=15 lang=javascript
 *
 * [15] 3Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
    let res = [];
    const len = nums.length;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < len - 2; i++) {
        if (i >= 1 && nums[i] === nums[i - 1]) {
            continue;
        }
        let arr = [nums[i]];
        for (let j = i + 1; j < len - 1; j++) {
            if (j + 1 > (len - 1) && nums[j] === nums[j + 1]) {
                continue;
            }
            arr[1] = nums[j]
            for (let k = j + 1; k < len; k++) {
                if (k + 1 < len && nums[k] === nums[k + 1]) {
                    continue;
                }
                arr.push(nums[k]);
                const sum = arr.reduce((a, b) => a + b);
                if (sum === 0) {
                    const newArr = arr.slice()
                    res.push(newArr)
                }
                arr.pop();
            }
        }
    }
    console.log(res)
    return res;
};

// const checkSamePart = (arr, entry) => {
//     for (let item of arr) {
//         const isSame = item.every((a, index) => {
//             return a === entry[index]
//         })
//         if (isSame) {
//             return true
//         }
//     }
// }

threeSum([-1, 0, 1, 2, -1, -4])
threeSum([0, 0, 0, 0])


// @lc code=end