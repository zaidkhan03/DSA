//DFS (Brute)
var climbStairs = function (n) {
  let memo = {};
  function climb(n) {
    if (n === 0) return 1;
    if (n < 0) return 0;
    if (memo[n]) return memo[n];
    memo[n] = climb(n - 1) + climb(n - 2);
    console.log(memo);
    return memo[n];
  }
  return climb(n);
};

//Optimal

var climbStairs = function (n) {
  if (n <= 2) return n;
  let first = 1;
  let second = 2;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
