/*
 * @Author: your name
 * @Date: 2020-05-26 17:51:01
 * @LastEditTime: 2020-05-27 12:49:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/48.rotate-image.js
 */
/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
    const len = matrix.length;
    let i = 0; //垂直向量
    let j = len - 1; //水平向量
    let temp = null;
    let left = null;
    let down = null;
    while (i < len - 1 && j > 0) {
        ++i;
        --j;
        left = [0, j];
        down = [i, len - 1];
        console.log(left, down);
        while (left[0] !== down[0] && left[1] !== down[1]) {
            temp = matrix[left[0]][left[1]];
            matrix[left[0]][left[1]] = matrix[down[0]][down[1]];
            matrix[down[0]][down[1]] = temp;
            left[0] += 1;
            down[1] -= 1;
        }
    }
    // 数组项调换
    i = 0;
    j = len - 1;
    while (j - i > 0) {
        temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
        ++i;
        --j;
    }
};


// java
// const rotate = (matrix) => {
//     const m = matrix.length;
//     let i = 0;
//     let j = m - 1;
//     let temp = null;
//     while (j - i >= 1) {
//         temp = matrix[i];
//         matrix[i] = matrix[j];
//         matrix[j] = temp;
//         ++i;
//         --j;
//     }
//     //transpose matrix
//     for (let i = 0; i < m; i++) {
//         for (let j = i; j < m; j++) {
//             let temp = matrix[j][i];
//             matrix[j][i] = matrix[i][j];
//             matrix[i][j] = temp;
//         }
//     }
//     console.log(matrix)
//         //reverse rows
//         // for (let i = 0; i < matrix.length; i++) {
//         //     for (let j = 0, k = matrix[0].length - 1; j < k; j++, k--) {
//         //         let temp = matrix[i][j];
//         //         matrix[i][j] = matrix[i][k];
//         //         matrix[i][k] = temp;
//         //     }
//         // }
// }

// const rotate = (matrix) => {
//     const len = matrix.length;
//     const newMatrix = [];
//     for (let i = 0; i < len; i++) {
//         const arr = []
//         for (let j = len - 1; j >= 0; j--) {
//             arr.push(matrix[j][i])
//         }
//         newMatrix.push(arr);
//     }
//     console.log(newMatrix)
// }
rotate([
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ])
    // @lc code=end