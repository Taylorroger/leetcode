/*
 * @Author: your name
 * @Date: 2020-05-21 17:56:54
 * @LastEditTime: 2020-05-22 17:31:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /.leetcode/2.add-two-numbers.js
 */
/*
 * @lc app=leetcode id=2 lang=javascript
 *
 * [2] Add Two Numbers
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// const addTwoNumbers = function(l1, l2) {
//     const num1 = traveseList(l1);
//     const num2 = traveseList(l2);
//     const result = (num2 + num1).toString().split('');
//     const len = result.length;
//     const head = null;
//     const list = null;
//     for (let i = len - 1; i >= 0; i--) {
//         const node = listNode(parseInt(result[i]));
//         if (!head) {
//             head = node;
//             list = head;
//         } else {
//             list.next = node;
//             list = node;
//         }
//     }
//     return head
// };

const traveseList = (list) => {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

const listNode = (value) => {
    return {
        val: value,
        next: null
    }
}

const getList = (arr) => {
    let head = null;
    let list = null;
    for (let i = 0; i < arr.length; i++) {
        const node = listNode(arr[i]);
        if (i === 0) {
            head = node;
            list = head;
        } else {
            list.next = node;
            list = node;
        }
    }
    return head
}


const addTwoNumbers = (l1, l2) => {
    let head = null;
    let list = null;
    let sum = 0;
    let prev = 0;
    while (l1 || l2 || prev > 0) {
        sum = prev;
        if (l1) {
            sum += l1.val
            l1 = l1.next;
        }
        if (l2) {
            sum += l2.val;
            l2 = l2.next;
        }
        const node = listNode(sum % 10);
        prev = parseInt(sum / 10);
        if (!head) {
            head = node;
            list = head;
        } else {
            list.next = node;
            list = node;
        }
    }
    return head;
}

const listLength = (list) => {
    let len = 0;
    while (list) {
        ++len;
        list = list.next
    }
    return len;
}

const addTwoNumbers = (l1, l2) => {
    const str1 = traveseList(l1);
    const str2 = traveseList(l2);

}

addTwoNumbers(getList([1, 2, 3, 4, 5]), getList([1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))
addTwoNumbers(getList([]), getList([1, 2, 3, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]))
addTwoNumbers(getList([1, 2, 3, 4, 5]), getList([]))
addTwoNumbers(getList([]), getList([]))
    // console.log(listLength(getList([])))