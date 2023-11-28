const coinchange = function (coins, amount) {
    const f = []
    f[0] = 0
    for (let i = 1; i <= amount; i++) {
        f[i] = Infinity//先将原值变为无穷
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                f[i] = Math.min(f[i], f[i - coins[j]] + 1)
            }
        }
    }
    if (f[amount] === Infinity) {
        return -1
    }
    return f[amount]
}