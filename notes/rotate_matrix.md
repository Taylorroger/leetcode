<!--
 * @Author: your name
 * @Date: 2020-05-27 11:15:07
 * @LastEditTime: 2020-05-27 12:57:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /JavaDailyTask/rotate_matrix.md
--> 
### 每日一题——旋转矩阵
* 题目描述: 给定一个n*n的矩阵，将矩阵旋转90度。需要才给矩阵内进行操作，不能声明先数组进行赋值。eg1:
```
[
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
```
旋转之后得到的结果为:
```
[
    [7,4,1],
    [8,5,2],
    [9,6,3]
]
```
eg2：
```
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
],
```
旋转后得到的结果:
```
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

* 解题思路: 首选，我想到的是采用线性代数中的矩阵乘法对该矩阵做变化，但是构造这个中间矩阵的难度应该不小于解答当前这个题目的难度，因此不予考虑。其次，可以对原数组进行遍历，按照变换规律存入新数组，再讲新数组赋值给原数组，此方法可行，思路简单清晰，容易让人接受，代码如下：
```
const rotate = (matrix) => {
    const len = matrix.length;
    const newMatrix = [];
    for (let i = 0; i < len; i++) {
        const arr = [];
        for (let j = len - 1; j >= 0; j--) {
            arr.push(matrix[j][i]); //按列进行遍历
        }
        newMatrix.push(arr);
    }
}
```
借助新数组newMatrix,我们可以轻易的将数组旋转，思路简介明了，但是这并不能满足题目要求。

* 通过观察，能发现数组旋转是有规律可循的，以eg2为例，我们将数组看作是一个图片，按照水平中心对称轴进行变化：得到数组如下
```
[
    [15,14,12,16],
    [13,3,6,7],
    [2,4,8,10],
    [5,1,9,11]
]
```
然后再沿着主对角线进项一次对称变化，将数组的matrix[i][j]与matrix[j][i]交换，则可以得到我们需要的解，
```
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```
代码实现如下：
```
{
    const rotate = (matrix) => {
    const m = matrix.length;
    let i = 0;
    let j = m - 1;
    let temp = null;
    while (j - i >= 1) {
        temp = matrix[i];
        matrix[i] = matrix[j];
        matrix[j] = temp;
        ++i;
        --j;
    }
    
    for (let i = 0; i < m; i++) {
        for (let j = i; j < m; j++) {
            let temp = matrix[j][i];
            matrix[j][i] = matrix[i][j];
            matrix[i][j] = temp;
        }
    }
}
```

问题的到完美解决。这种方法在实现和想法上都相当简洁明了。但是在此我也想采用另外一种按照次对角线进行交换的方法， 虽然这种方法不是最简洁的。首先在从次对角线上的端点[0,n]开始进行将次对角线两边的项进行交换,分享个方向进行，向左和向下，没到一个阶段则改变方向，向下，向左，然后在对数组做对称变化，代码实现如下；
```
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
```
这种方法虽然不是最简洁，思路最明了的，但是有点遍历的味道。

编者水平有限，有错误之处请指正！


