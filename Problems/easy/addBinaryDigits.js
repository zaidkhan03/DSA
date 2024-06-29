const a = "111";
const b = "111";
// const a = '1010100'
// const b = '10101'

var addBinary = function (a, b) {
  let result = "";
  let carry = 0;
  const maxLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxLength; i++) {
    const val1 = i < a.length ? parseInt(a[a.length - 1 - i]) : 0;
    const val2 = i < b.length ? parseInt(b[b.length - 1 - i]) : 0;
    const add = val1 + val2 + carry;

    if (add === 0 || add === 1) {
      result = add.toString() + result;
      carry = 0;
    } else if (add === 2) {
      result = "0" + result;
      carry = 1;
    } else {
      result = "1" + result;
      carry = 1;
    }
  }

  if (carry > 0) {
    result = "1" + result;
  }

  return result;
};
console.log(addBinary(a, b));
