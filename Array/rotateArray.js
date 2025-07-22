/**
 * 🚀 LeetCode Problem #189: Rotate Array
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= nums.length <= 10^5
 * - -2^31 <= nums[i] <= 2^31 - 1
 * - 0 <= k <= 10^5
 * - Follow up: Try to come up with as many solutions as you can.
 *   There are at least three different ways to solve this problem.
 * - Could you do it in-place with O(1) extra space?
 *
 * 🎯 EXAMPLES:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 * Explanation:
 * rotate 1 steps to the right: [7,1,2,3,4,5,6]
 * rotate 2 steps to the right: [6,7,1,2,3,4,5]
 * rotate 3 steps to the right: [5,6,7,1,2,3,4]
 *
 * Input: nums = [-1,-100,3,99], k = 2
 * Output: [3,99,-1,-100]
 * Explanation:
 * rotate 1 steps to the right: [99,-1,-100,3]
 * rotate 2 steps to the right: [3,99,-1,-100]
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * ❌ WRONG APPROACH (Your Original):
 * Swapping first k elements with last k elements does NOT rotate the array.
 * This only affects 2k elements and doesn't move elements to correct positions.
 *
 * ✅ CORRECT APPROACH: Three-Step Reversal Method
 *
 * KEY INSIGHT:
 * Rotating right by k is equivalent to:
 * 1. Reverse the entire array
 * 2. Reverse the first k elements
 * 3. Reverse the remaining n-k elements
 *
 * WHY THIS WORKS:
 * Example: [1,2,3,4,5,6,7], k=3
 * Step 1: Reverse all → [7,6,5,4,3,2,1]
 * Step 2: Reverse first 3 → [5,6,7,4,3,2,1]
 * Step 3: Reverse last 4 → [5,6,7,1,2,3,4] ✅
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Three passes through array
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space
 */

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 3;

/**
 * 🔧 OPTIMAL SOLUTION: Three-Step Reversal Method
 * @param {number[]} nums - Array to rotate
 * @param {number} k - Number of steps to rotate right
 * @returns {number[]} - The rotated array (modified in-place)
 */
function rotate(nums, k) {
  const len = nums.length;

  // Handle cases where k > len (k=8 is same as k=1 for array of length 7)
  k = k % len;

  // If k is 0, no rotation needed
  if (k === 0) return nums;

  // Helper function to reverse array section
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse the entire array
  reverse(0, len - 1);

  // Step 2: Reverse the first k elements
  reverse(0, k - 1);

  // Step 3: Reverse the remaining elements
  reverse(k, len - 1);

  return nums;
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [1,2,3,4,5,6,7], k = 3
 *
 * Initial: [1,2,3,4,5,6,7]
 * k = 3 % 7 = 3
 *
 * Step 1 - Reverse entire array (0 to 6):
 *   [1,2,3,4,5,6,7] → [7,6,5,4,3,2,1]
 *
 * Step 2 - Reverse first k=3 elements (0 to 2):
 *   [7,6,5,4,3,2,1] → [5,6,7,4,3,2,1]
 *
 * Step 3 - Reverse remaining elements (3 to 6):
 *   [5,6,7,4,3,2,1] → [5,6,7,1,2,3,4]
 *
 * Final Result: [5,6,7,1,2,3,4] ✅
 */

console.log("Original array:", [...nums]); // Show original
console.log("Rotated array:", rotate(nums, k));

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Extra Array (Easiest to Understand)
 * Create new array and place each element at correct position
 * Time: O(n), Space: O(n)
 */
function rotateExtraArray(nums, k) {
  const len = nums.length;
  k = k % len;
  const result = new Array(len);

  for (let i = 0; i < len; i++) {
    result[(i + k) % len] = nums[i];
  }

  // Copy back to original array
  for (let i = 0; i < len; i++) {
    nums[i] = result[i];
  }

  return nums;
}

/**
 * APPROACH 2: Cyclic Replacements (Advanced)
 * Move elements to their final positions in cycles
 * Time: O(n), Space: O(1)
 */
function rotateCyclic(nums, k) {
  const len = nums.length;
  k = k % len;

  let count = 0;
  for (let start = 0; count < len; start++) {
    let current = start;
    let prev = nums[start];

    do {
      const next = (current + k) % len;
      [nums[next], prev] = [prev, nums[next]];
      current = next;
      count++;
    } while (start !== current);
  }

  return nums;
}

/**
 * APPROACH 3: Brute Force (One by One)
 * Rotate one position k times
 * Time: O(n*k), Space: O(1)
 */
function rotateBruteForce(nums, k) {
  const len = nums.length;
  k = k % len;

  for (let i = 0; i < k; i++) {
    const temp = nums[len - 1];
    for (let j = len - 1; j > 0; j--) {
      nums[j] = nums[j - 1];
    }
    nums[0] = temp;
  }

  return nums;
}

/**
 * ❌ YOUR ORIGINAL APPROACH (Why it doesn't work):
 * This swaps first k with last k elements, but doesn't rotate
 */
function rotateWrong(nums, k) {
  const len = nums.length;
  for (let i = 0; i < k; i++) {
    let temp = nums[i];
    nums[i] = nums[len - k + i];
    nums[len - k + i] = temp;
  }
  return nums;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  { nums: [1, 2, 3, 4, 5, 6, 7], k: 3 }, // Expected: [5,6,7,1,2,3,4]
  { nums: [-1, -100, 3, 99], k: 2 }, // Expected: [3,99,-1,-100]
  { nums: [1, 2], k: 1 }, // Expected: [2,1]
  { nums: [1], k: 1 }, // Expected: [1]
  { nums: [1, 2, 3, 4, 5, 6], k: 4 }, // Expected: [3,4,5,6,1,2]
  { nums: [1, 2, 3], k: 4 }, // k > length, Expected: [3,1,2]
];

testCases.forEach((testCase, index) => {
  console.log(
    `\nTest Case ${index + 1}: nums=[${testCase.nums.join(",")}], k=${
      testCase.k
    }`
  );

  console.log(
    `Three Reversals: [${rotate([...testCase.nums], testCase.k).join(",")}]`
  );
  console.log(
    `Extra Array:     [${rotateExtraArray([...testCase.nums], testCase.k).join(
      ","
    )}]`
  );
  console.log(
    `Cyclic:          [${rotateCyclic([...testCase.nums], testCase.k).join(
      ","
    )}]`
  );
  console.log(
    `Brute Force:     [${rotateBruteForce([...testCase.nums], testCase.k).join(
      ","
    )}]`
  );
  console.log(
    `❌ Wrong Method:  [${rotateWrong([...testCase.nums], testCase.k).join(
      ","
    )}]`
  );
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach           | Time     | Space | In-Place | Difficulty | Interview Score |
 * |--------------------|----------|-------|----------|------------|-----------------|
 * | Three Reversals    | O(n)     | O(1)  | ✅       | Medium     | ⭐⭐⭐⭐⭐      |
 * | Extra Array        | O(n)     | O(n)  | ❌       | Easy       | ⭐⭐⭐          |
 * | Cyclic Replacement | O(n)     | O(1)  | ✅       | Hard       | ⭐⭐⭐⭐        |
 * | Brute Force        | O(n*k)   | O(1)  | ✅       | Easy       | ⭐⭐            |
 * | ❌ Swapping         | O(k)     | O(1)  | ✅       | Wrong      | ❌             |
 *
 * 🏆 RECOMMENDED: Three Reversals - optimal time/space with clear logic
 */

/**
 * 💡 WHY YOUR ORIGINAL APPROACH FAILS:
 *
 * Your code: [1,2,3,4,5,6,7] with k=3
 *
 * i=0: swap nums[0] and nums[4] → [5,2,3,4,1,6,7]
 * i=1: swap nums[1] and nums[5] → [5,6,3,4,1,2,7]
 * i=2: swap nums[2] and nums[6] → [5,6,7,4,1,2,3]
 *
 * Result: [5,6,7,4,1,2,3] ❌
 * Correct: [5,6,7,1,2,3,4] ✅
 *
 * The issue: Element 4 should be at the end, not in the middle!
 * Swapping doesn't achieve the rotation pattern where every element
 * moves exactly k positions to the right.
 */

/**
 * 🎓 KEY LEARNING POINTS:
 *
 * 1. **Rotation vs Swapping**: Rotation moves ALL elements, swapping affects only pairs
 * 2. **Modular Arithmetic**: Use k % length to handle k > array length
 * 3. **In-Place Algorithms**: Three reversals achieves O(1) space complexity
 * 4. **Problem Pattern**: Many array problems can be solved with reversal technique
 * 5. **Edge Cases**: Handle k=0, k>length, single element arrays
 */
