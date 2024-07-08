var countBits = function (n) {
  const arr = new Array(n + 1).fill(0);
  let offset = 1;
  for (let i = 1; i <= n; i++) {
    if (i === offset * 2) {
      offset = i;
    }
    arr[i] = 1 + arr[i - offset];
  }
  return arr;
};
console.log(countBits(50));
