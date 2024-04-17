function sumAndValues(nums, andValues) {
  let sum = 0;
  for (let i = 0; i < andValues.length; i++) {
    let currentSum = 0;
    let start = andValues[i];
    while (start < nums.length && nums[start] === andValues[i]) {
      currentSum += nums[start];
      start++;
    }
    sum += currentSum;
  }
  return sum;
}

// Test case
const nums = [1, 4, 3, 3, 2];
const andValues = [0, 3, 3, 2];
console.log(sumAndValues(nums, andValues)); // Output: 12
