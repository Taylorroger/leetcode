### 今天的每日一题

* 以前虽然也在LeetCode上刷过题，但是并不系统。深感这一年的工作中进步有限，于是准备开始再拾起LeetCode，希望能在刷题中有一点进步。LeetCode的一大好处是，在提交代码后不但能给你反馈代码的执行效率，同时也会解锁别人提交的Solution，这里是每次编写完代码之后都应该仔细看看的部分。在这里有官网提供的优秀解题思路，也有其他人的解题思路，是LeetCode的精华部分。
* 今天的题目是LeetCode的第一题[Two Sum](https://leetcode.com/problems/two-sum/ 'Two Sum')_

* 题目描述: 给定一个整数数组nums和一个数字target，找到数组中两项之和等于该数的项，返回这两项对应的索引值，每个给定的数字相对于这个数都有唯一解，但给定数组中的每一项只能使用一次。

* 解题思路: 当我看到题目的第一眼想到的思路是：对数组进项循环，对每一项和目标数求差，然后在用indexOf在数组中查找，如果返回值大于-1，则结束当前循环，返回结果，否则继续执行， 代码如下:

```
const twoSum = (nums, target)=> {
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        const index = nums.indexOf(diff, i + 1);
        if (index > -1) {
            return [i, index]
        }
    }
};
```

* 在顺利Run Code和Submit后得到反馈: 代码执行时间120ms，执行时间超过了28.06%的JavaScript语言编写的代码，运行内存34MB,内存占用优于96%的JavaScript的代码。可以看到，这种常规思路使用了更少的内存但是却需要消耗更多的时间来执行。从反馈结果来说，并不能让人满意，同时上述示例代码的编写思路不能给人眼前一亮的感觉。
* 上述方法因为是双重循环，那么对于需要的时间复杂度是O(n^2), 空间复杂度是O(1).那么能否有其他的答案呢？有！
* 官方提供了两种思路，第一种和上述思路一致，详情不表。第二种是思路是用空间换取时间: 声明一个对象comp，对象的key为数组各项与目标数的差值，然后在每次循环检查comp[nums[i]]是否存在，如果存在，则返回。示例代码如下:

```
const twoSum = function(nums, target) {
    const comp = {};
    for (let i = 0; i < nums.length; i++) {
        if (comp[nums[i]] >= 0) {
            return [comp[nums[i]], i]
        }
        comp[target - nums[i]] = i;
    }
};
```
* 这种思路的优点在于只做了一次循环，将每次循环结算出来的差值存在comp中，然后在下一次循环中去以nums[i]取值，代码执行的时间复杂度从O(n^2) 降至O(n),空间复杂度则从O(1)上升至O(n);
* 上述两种思路是总两方面进行考虑，具体采用哪种，需要在实践中根据不同的需求采用不同的思路，但是作为开发人员的我们，需要对此多加思考,由于在下水平有限，如有错误，欢迎指正！
* 以上就是今天的题目，明天的题目是[Add Two Number](https://leetcode.com/problems/add-two-numbers/ 'Add Two Number'), 明天见！



>愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者的说话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般；也可以在黑暗里发一点光，不必等候炬火。—————— 鲁迅
