const nums = [3, 5, 7, 1, 2, 8];

const evenNums = nums.filter((n) => { return n % 2 === 0 })
console.log(evenNums);

// WAP to filter all numbers less than 5

const sqrNums = nums.map((n) => { return n ** 2 });
console.log(sqrNums);

const prices = [1200, 300, 700, 540, 980, 1680];

console.log(200 * 1.18);

const gstPrices = prices.map((p) => { return p * 1.18 });
console.log(gstPrices);

// filter all prices between 500 and 1000