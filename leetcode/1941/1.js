/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    salary.sort((a, b) => a - b)
    let len = salary.length
    let sums = 0
    for (let i = 1; i < len - 1; i++) {
        sums = sums + salary[i]
    }
    return sums / (len - 2)
};
salary = [25000, 48000, 57000, 86000, 33000, 10000, 42000, 3000, 54000, 29000, 79000, 40000]
console.log(average(salary))