// var isValid = function (s) {
//     const stack = [];
//     for (let i = 0; i < s.length; i++) {
//         let c = s[i];
//         switch (c) {
//             case '(':
//                 stack.push(')');
//                 break;
//             case '[':
//                 stack.push(']');
//                 break;
//             case '{':
//                 stack.push('}');
//                 break;
//             default:
//                 if (c !== stack.pop()) {
//                     return false;
//                 }
//         }
//     }
//     return stack.length === 0;
// };//这就是有效括号的写法。


// var isValid = function (s) {
//     const stack = []//首先第一步，用栈的结构
//     for (let i = 0; i < s.length; i++) {
//         let c = s[i];
//         switch (c) {
//             case '(':
//                 stack.push(')')
//                 break;
//             case '[':
//                 stack.push(']')
//                 break
//             case '{':
//                 stack.push('}')
//                 break;
//             default:
//                 if (c != stack.pop()) {
//                     return false
//                 }
//         }
//     }
//     return stack.length == 0
// }//用栈来写的这个思想特别的简单高效，而且更加的优化性能。