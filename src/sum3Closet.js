/*
 * @Author: your name
 * @Date: 2020-05-25 09:42:29
 * @LastEditTime: 2020-05-25 19:00:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/sum3Closet.js
 */
const threeSumClosest = function(nums, target) {
    nums = nums.sort((a, b) => a - b);
    let sum = 0;
    let arr = [];
    let newArr = nums.slice();
    let flag = -1;
    let diff = target - sum;
    while (arr.length < 3) {
        if (flag > -1) {
            newArr.splice(flag, 1);
        }
        const { num, index } = findMinDiff(newArr, diff);
        flag = index;
        sum += num;
        diff = target - sum;
        arr.push(num);
    }
    if (sum !== target) {
        diff = target - sum;
    }
    return sum
};

const findMinDiff = (arr, target) => {
        let diff = Math.abs(target - arr[0]);
        let index = -1;
        let num = null;
        for (let i = 0; i < arr.length; i++) {
            if (Math.abs(target - arr[i]) <= diff) {
                num = arr[i];
                index = i;
                diff = target - arr[i];
            }
        }
        return { num, index }
    }
    // threeSumClosest([-1, 0, 1, 2, -1, -4], 0)
    // threeSumClosest([0, 2, 1, -3], 0)


function sqInRect(lng, wdth) {
    //your code here
    let arr = [];
    a(lng, wdth, arr)
        // console.log(arr)
    return arr
}

function a(lng, wdth, arr) {
    if (lng <= 1 && wdth <= 1) {
        arr.push(1);
        // arr
        return
    }
    if (lng < wdth) {
        arr.push(lng);
        wdth = wdth - lng;
    } else {
        arr.push(wdth);
        lng = lng - wdth;
    }
    // console.log(lng, wdth, arr)
    a(lng, wdth, arr)
}
sqInRect(5, 3)