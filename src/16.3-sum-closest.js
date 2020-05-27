/*
 * @Author: your name
 * @Date: 2020-05-25 09:42:49
 * @LastEditTime: 2020-05-25 09:58:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/16.3-sum-closest.js
 */
/*
 * @lc app=leetcode id=16 lang=javascript
 *
 * [16] 3Sum Closest
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function(nums, target) {
    let arr = [];
    let diff = 0;
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        arr = [nums[i]]
        for (let j = i + 1; j < arr.length; j++) {
            if (arr.length < 3) {
                arr.push(arr[j])
            } else {
                const minus = Math.abs(target - arr.reduce((a, b) => a + b));
                if (minus <= diff) {
                    diff = minus;
                    res = arr;
                }
                arr.pop();
                arr.push(item)
            }
        }
    }
    console.log(res, diff)
    return { res, diff };
};
// @lc code=end