function findFactors(number) {//找因数
    var factors = [];
    let zfactors = []
    // 循环查找因数
    for (var i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            // 找到因数时，将其添加到数组中
            factors.push(i);

            // 如果因数不是平方根，则添加它的对应的另一个因数
            if (number / i !== i) {
                factors.push(number / i);
            }
        }
    }
    for (let i = 0; i < factors.length; i++) {
        if (isPrime(factors[i])) {
            zfactors.push(factors[i])
        }
    }
    return zfactors
}
function isPrime(number) {//判断质数
    // 检查特殊情况
    if (number <= 1) {
        return false;
    }
    // 遍历可能的因子
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(findFactors(100));
//但是质数和因数为什么是这样子的呢？