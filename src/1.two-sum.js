/*
 * @Author: your name
 * @Date: 2020-05-20 17:07:39
 * @LastEditTime: 2020-05-20 17:11:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/1.two-sum.js
 */
/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let item of nums) {
        let diff = target - item;
        const index = nums.indexOf(diff);
        if (diff > -1) {
            return [item, nums[index]]
        }
    }
};
// @lc code=end