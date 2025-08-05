// 1480. Running Sum of 1d Array -Easy

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

let nums = [1, 2, 3, 4];
function runningSum(nums) {
  let n = nums.length;

  let prefixSum = new Array(n);

  prefixSum[0] = nums[0];

  for (let i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }

  return prefixSum;
}

console.log(runningSum(nums));
