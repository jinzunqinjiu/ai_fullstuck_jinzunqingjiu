// 使用两个数组的栈方法（push, pop） 实现队列
/**
* Initialize your data structure here.
*/
// var MyQueue = function () {
//     this.stackIn = [];
//     this.stackOut = [];
// };

// /**
// * Push element x to the back of queue. 
// * @param {number} x
// * @return {void}
// */
// MyQueue.prototype.push = function (x) {
//     this.stackIn.push(x);
// };//这个存的办法特别的简单

// /**
// * Removes the element from in front of queue and returns that element.
// * @return {number}
// */
// MyQueue.prototype.pop = function () {
//     const size = this.stackOut.length;
//     if (size) {
//         return this.stackOut.pop();
//     }
//     while (this.stackIn.length) {
//         this.stackOut.push(this.stackIn.pop());
//     }
//     return this.stackOut.pop();
// };

// /**
// * Get the front element.
// * @return {number}
// */
// MyQueue.prototype.peek = function () {
//     const x = this.pop();
//     this.stackOut.push(x);
//     return x;
// };

// /**
// * Returns whether the queue is empty.
// * @return {boolean}
// */
// MyQueue.prototype.empty = function () {
//     return !this.stackIn.length && !this.stackOut.length
// };//empty看是否为空


//使用两个数组的栈方法来实现队列，好办法，直接用class构造函数的办法

class MyQueue {
    constructor() {
        this.stackIn = [];//用来进队
        this.stackOut = [];//用来出队
    }
    push(x) {
        this.stackIn.push(x)
    }
    pop() {
        let size = this.stackOut.length
        if (size) {
            this.stackOut.pop()
        }
        while (this.stackIn.length) {
            this.stackOut.push(this.stackIn.pop())
        }
        return this.stackOut.pop()
    }
    empty() {
        return this.stackIn.length && this.stackOut.length
    }
    peek() {
        const x = this.pop();
        this.stackOut.push(x);
        return x;//那还是比较简单的
    }
}//这样用栈完成一个队列就完成了，但是peek共能是做什么用的呢？
