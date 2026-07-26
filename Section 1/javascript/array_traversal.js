const nums = [3, 5, 7, 1, 2, 8];

console.log('------- indexing -------');

for (let i = 0; i < nums.length; i++) {
    console.log(nums[i]);
};

console.log('------ for-of loop------');

for (let i of nums) {
    console.log(i);
}

console.log('------- for each function ------');

nums.forEach((n, i, a) => { console.log(n, i, a); });

// WAP to print all even numbers

nums.forEach((n) => {
    if (n % 2 === 0) {
        console.log(n);
    }
});

// WAP to print square all numbers

console.log(3 ** 2);

nums.forEach((n) => {
    console.log(n * n);
});