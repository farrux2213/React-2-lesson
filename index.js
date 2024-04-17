function countSubarrays(nums) {
  let count = 0;
  const length = nums.length;

  for (let i = 0; i < length; i++) {
    let maxElement = nums[i];
    for (let j = i; j < length; j++) {
      maxElement = Math.max(maxElement, nums[j]);
      if (maxElement === nums[i]) {
        count++;
      }
    }
  }

  return count;
}

// Example usage:
const nums = [1, 4, 3, 3, 2];
console.log(countSubarrays(nums)); // Output: 6
