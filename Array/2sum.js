/**
 * 🚀 LeetCode Problem #1: Two Sum
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array of integers nums and an integer target, return indices of the two numbers
 * such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may not use
 * the same element twice.
 *
 * You can return the answer in any order.
 *
 * 📊 CONSTRAINTS:
 * - 2 <= nums.length <= 10^4
 * - -10^9 <= nums[i] <= 10^9
 * - -10^9 <= target <= 10^9
 * - Only one valid answer exists
 *
 * 🎯 EXAMPLES:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Hash Map (One-Pass) - OPTIMAL SOLUTION
 *
 * KEY CONCEPT:
 * - For each number, calculate what complement is needed: complement = target - current
 * - Check if complement exists in hash map (already seen)
 * - If yes: return indices, if no: store current number and continue
 *
 * WHY HASH MAP WORKS:
 * - Hash map provides O(1) lookup time
 * - We only need to look backwards (already processed elements)
 * - Guarantees we don't use same element twice
 *
 * ALGORITHM STEPS:
 * 1. Create hash map to store {value: index} pairs
 * 2. For each element in array:
 *    a) Calculate complement = target - current element
 *    b) Check if complement exists in hash map
 *    c) If exists: return [complement_index, current_index]
 *    d) If not: store current element in hash map
 * 3. Continue until solution found
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Single pass through array
 * 💾 SPACE COMPLEXITY: O(n) - Hash map can store up to n elements
 *
 * 🎨 THIS IS THE OPTIMAL SOLUTION for general case!
 */

// Test case - represents the classic two sum example
const nums = [2, 7, 11, 15];
const target = 13; // Should return [0, 2] since nums[0] + nums[2] = 2 + 11 = 13

/**
 * ❌ INCORRECT APPROACH (Commented out - shows common mistake):
 * The commented code only checks consecutive elements (i and i+1)
 * This is wrong because two sum can use ANY two elements, not just adjacent ones
 */
// function twoSum(nums,target) {
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i]+nums[i+1]===target) {  // ❌ WRONG: only checks adjacent
//             return [i,i+1]
//         }
//     }
// }

/**
 * 🔧 OPTIMAL SOLUTION: Hash Map One-Pass Approach
 * @param {number[]} nums - Array of integers
 * @param {number} target - Target sum to find
 * @returns {number[]} - Array of two indices that sum to target
 */
function twoSum(nums, target) {
  // Hash map to store previously seen values and their indices
  let preValue = new Map();

  // Single pass through the array
  for (let i = 0; i < nums.length; i++) {
    // Calculate what number we need to reach the target
    let diff = target - nums[i];

    // Check if we've seen the complement before
    if (preValue.has(diff)) {
      // Found the pair! Return indices
      return [preValue.get(diff), i];
    }

    // Store current number and its index for future lookups
    preValue.set(nums[i], i);
  }

  // This should never be reached given problem constraints
  return null;
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: nums = [2, 7, 11, 15], target = 13
 *
 * Initial: preValue = {}, target = 13
 *
 * i=0, nums[0]=2:
 *   diff = 13 - 2 = 11
 *   preValue.has(11)? No
 *   preValue.set(2, 0) → preValue = {2: 0}
 *
 * i=1, nums[1]=7:
 *   diff = 13 - 7 = 6
 *   preValue.has(6)? No
 *   preValue.set(7, 1) → preValue = {2: 0, 7: 1}
 *
 * i=2, nums[2]=11:
 *   diff = 13 - 11 = 2
 *   preValue.has(2)? Yes! (index 0)
 *   return [0, 2] ✅
 *
 * Result: [0, 2] because nums[0] + nums[2] = 2 + 11 = 13
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Target sum:", target);
console.log("Indices that sum to target:", twoSum(nums, target));

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Brute Force (Nested Loops)
 * Check every pair of elements
 * Time: O(n²), Space: O(1)
 */
function twoSumBruteForce(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

/**
 * APPROACH 2: Two-Pass Hash Map
 * First pass: build hash map, Second pass: find complement
 * Time: O(n), Space: O(n)
 */
function twoSumTwoPass(nums, target) {
  const map = new Map();

  // First pass: store all values and indices
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i);
  }

  // Second pass: find complement
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement) && map.get(complement) !== i) {
      return [i, map.get(complement)];
    }
  }

  return null;
}

/**
 * APPROACH 3: Sorting + Two Pointers (Modified)
 * Note: This changes indices, so we need to track original positions
 * Time: O(n log n), Space: O(n)
 */
function twoSumSorted(nums, target) {
  // Create array of [value, originalIndex] pairs
  const indexed = nums.map((val, idx) => [val, idx]);

  // Sort by value
  indexed.sort((a, b) => a[0] - b[0]);

  let left = 0;
  let right = indexed.length - 1;

  while (left < right) {
    const sum = indexed[left][0] + indexed[right][0];

    if (sum === target) {
      return [indexed[left][1], indexed[right][1]].sort((a, b) => a - b);
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  { nums: [2, 7, 11, 15], target: 9 }, // Expected: [0,1]
  { nums: [3, 2, 4], target: 6 }, // Expected: [1,2]
  { nums: [3, 3], target: 6 }, // Expected: [0,1]
  { nums: [2, 7, 11, 15], target: 13 }, // Expected: [0,2]
  { nums: [-1, -2, -3, -4, -5], target: -8 }, // Expected: [2,4]
  { nums: [0, 4, 3, 0], target: 0 }, // Expected: [0,3]
  { nums: [-3, 4, 3, 90], target: 0 }, // Expected: [0,2]
];

testCases.forEach((testCase, index) => {
  console.log(
    `\nTest Case ${index + 1}: nums=[${testCase.nums.join(",")}], target=${
      testCase.target
    }`
  );

  console.log(
    `Hash Map:       [${
      twoSum([...testCase.nums], testCase.target)?.join(",") || "null"
    }]`
  );
  console.log(
    `Brute Force:    [${
      twoSumBruteForce([...testCase.nums], testCase.target)?.join(",") || "null"
    }]`
  );
  console.log(
    `Two Pass:       [${
      twoSumTwoPass([...testCase.nums], testCase.target)?.join(",") || "null"
    }]`
  );
  console.log(
    `Sorted:         [${
      twoSumSorted([...testCase.nums], testCase.target)?.join(",") || "null"
    }]`
  );
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach          | Time      | Space | Pros                    | Cons                     |
 * |-------------------|-----------|-------|-------------------------|--------------------------|
 * | Hash Map (1-pass) | O(n)      | O(n)  | Optimal, single pass    | Extra space needed       |
 * | Brute Force       | O(n²)     | O(1)  | No extra space          | Too slow for large input |
 * | Hash Map (2-pass) | O(n)      | O(n)  | Clear logic             | Two passes needed        |
 * | Sort + Two Pointers| O(n log n)| O(n) | Space efficient concept | Slower due to sorting    |
 *
 * 🏆 WINNER: Hash Map One-Pass - optimal time complexity with clear logic
 */

/**
 * 💡 KEY INSIGHTS & INTERVIEW TIPS:
 *
 * 1. **Hash Map Pattern**: Classic use of hash map for O(1) lookups
 * 2. **Complement Thinking**: Instead of finding pair, find what's missing
 * 3. **One vs Two Pass**: One-pass is more elegant and slightly faster
 * 4. **Index Handling**: Be careful about returning indices in correct order
 * 5. **Edge Cases**: Duplicate values, negative numbers, zero values
 *
 * 🎓 LEARNING OUTCOMES:
 * - Master hash map for optimization problems
 * - Understand complement-based problem solving
 * - Recognize when to trade space for time
 * - Practice handling duplicate values correctly
 * - Learn to think backwards (what do I need vs what do I have)
 */

/**
 * 🔗 RELATED PROBLEMS:
 * - 3Sum (LeetCode #15) - extension to three numbers
 * - 4Sum (LeetCode #18) - extension to four numbers
 * - Two Sum II - Input array is sorted (LeetCode #167)
 * - Two Sum IV - BST (LeetCode #653) - same concept, different data structure
 */

/**
 * ⚠️ COMMON MISTAKES TO AVOID:
 *
 * 1. **Adjacent Elements Only**: Don't assume elements must be consecutive
 * 2. **Same Element Twice**: Don't use same index twice (i !== j)
 * 3. **Index Order**: Problem doesn't require specific index order
 * 4. **Hash Map Key**: Store value as key, index as value (not opposite)
 * 5. **Early Return**: Return immediately when solution found
 */
