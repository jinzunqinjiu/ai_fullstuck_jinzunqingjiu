var mostPoints = function (questions) {
    const n = questions.length, dp = new Array(n).fill(0);
    // let max = 0;
    // for (let i = 0; i < n; i++) {
    //     dp[i + 1] = Math.max(dp[i], dp[i + 1] || 0);
    //     const j = questions[i][1] + i + 1;
    //     dp[j] = Math.max(dp[i] + questions[i][0], dp[j] || 0);
    //     max = Math.max(dp[i + 1], dp[j], max);
    // }
    // return max;
    return dp
};

questions=[[3, 2], [4, 3], [4, 4], [2, 5]]
console.log( mostPoints(questions))

