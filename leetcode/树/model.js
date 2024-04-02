let root = {
    val: 'A',
    left: {
        val: 'B',
        left: {
            val: 'C'
        },
        right: {
            val: 'D'
        }
    },
    right: {
        val: 'E',
        left: {
            val: 'F'
        },
        right: {
            val: 'G'
        }
    }

}//这就是一棵树的形状，得慢慢的去进行转换了
//前序遍历  根左右
function preOrder(root) {
    if (!root) return []
    let res = []
    res.push(root.val)
    let resl = preOrder(root.left)
    let resr = preOrder(root.right)
    return res.concat(resl, resr)
}
console.log(Order(root));


function midOrder(root) {
    if (!root) return []
    let res = []//只要递归的顺序不一样，就可以完成不同的遍历
    let resl = midOrder(root.left)
    res.push(root.val)
    let resr = midOrder(root.right)
    return resl.concat(res, resr)
}
console.log(midOrder(root));
//这个就是中序遍历

function lastOrder(root) {
    if (!root) return []
    let res = []
    let resl = lastOrder(root.left)
    let resr = lastOrder(root.right)
    res.push(root.val)
    return resl.concat(resr, res)
}
console.log(lastOrder(root));
//这样子通过递归的思想就实现了树的三种遍历方式。