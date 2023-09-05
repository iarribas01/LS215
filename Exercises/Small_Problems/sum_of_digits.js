function sum(n) {
  console.log(String(n).split('').map(digit => parseInt(digit, 10)).reduce((total, currentVal) => total + currentVal));
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45