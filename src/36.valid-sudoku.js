/*
 * @Author: your name
 * @Date: 2020-05-27 15:42:04
 * @LastEditTime: 2020-05-27 17:26:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/36.valid-sudoku.js
 */
/*
 * @lc app=leetcode id=36 lang=javascript
 *
 * [36] Valid Sudoku
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
    let square = null; //宫格
    for (let i = 0; i < 9; i++) {
        if (i % 3 === 0) {
            square = [
                [],
                [],
                []
            ];
        }
        let hor = []; //水平
        let ver = []; //列
        for (let j = 0; j < 9; j++) {
            const horIndex = hor.indexOf(board[i][j]);
            const verIndex = ver.indexOf(board[j][i]);
            const squareIndex = square[parseInt(j / 3)].indexOf(board[i][j]);
            if (horIndex >= 0 || verIndex >= 0 || squareIndex >= 0) {
                return false;
            } else {
                if (board[i][j] !== '.') {
                    hor.push(board[i][j]);
                    square[parseInt(j / 3)].push(board[i][j]);
                }
                if (board[j][i] !== '.') {
                    ver.push(board[j][i]);
                }

            }
        }
    }
    return true
};


isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
])

isValidSudoku([
        ["8", "3", ".", ".", "7", ".", ".", ".", "."],
        ["6", ".", ".", "1", "9", "5", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", "6", "."],
        ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
        ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", "6", ".", ".", ".", ".", "2", "8", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "5"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"]
    ])
    // @lc code=end