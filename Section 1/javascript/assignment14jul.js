let num = 121;
let reverse = 0;
let temp = num;

while (num > 0) {

    console.log(num, reverse);
    let d = num % 10;
    reverse = reverse * 10 + d;
    num = parseInt(num / 10);
}

console.log(num, reverse);
if (temp === reverse) {
    console.log('palindrome');
}

let [a, b] = [0, 1];
console.log(a);
console.log(b);


for (let i = 0; i < 8; i++) {
    c = a + b;
    console.log(c);
    [a, b] = [b, c]
}

let [s1, s2, s3] = [3, 3, 3];

if (s1 === s2 && s2 === s3) {
    console.log('equilateral triangle');
} else if (s1 === s2 || s2 === s3 || s3 === s1) {
    console.log('isoceles triangle');
} else {
    console.log('scalene triangle');
}