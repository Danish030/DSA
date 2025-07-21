/**
 * 🚀 LeetCode Problem #136: Single Number
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given a non-empty array of integers nums, every element appears twice except for one.
 * Find that single one.
 *
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= nums.length <= 3 * 10^4
 * - -3 * 10^4 <= nums[i] <= 3 * 10^4
 * - Each element in the array appears twice except for one element which appears only once
 *
 * 🎯 EXAMPLES:
 * Input: nums = [2,2,1]
 * Output: 1
 *
 * Input: nums = [4,1,2,1,2]
 * Output: 4
 *
 * Input: nums = [1]
 * Output: 1
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: XOR Bit Manipulation (Optimal Solution)
 *
 * KEY CONCEPT:
 * XOR (Exclusive OR) has special properties that make this problem elegant:
 * - a ⊕ a = 0 (any number XORed with itself equals 0)
 * - a ⊕ 0 = a (any number XORed with 0 equals itself)
 * - XOR is commutative and associative (order doesn't matter)
 *
 * ALGORITHM LOGIC:
 * When we XOR all numbers together:
 * - All pairs will cancel out (become 0)
 * - Only the single number will remain
 *
 * EXAMPLE: [4,1,2,1,2]
 * 4 ⊕ 1 ⊕ 2 ⊕ 1 ⊕ 2
 * = 4 ⊕ (1 ⊕ 1) ⊕ (2 ⊕ 2)  [grouping pairs]
 * = 4 ⊕ 0 ⊕ 0                [pairs cancel out]
 * = 4                         [single number remains]
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Single pass through array
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space
 *
 * 🎨 THIS IS THE OPTIMAL SOLUTION - meets all problem requirements!
 */

// Test case array - contains pairs of numbers except one single number
let nums = [4, 1, 2, 1, 2];

/**
 * 🔧 MAIN FUNCTION: Find Single Number using XOR
 * @param {number[]} nums - Array where every element appears twice except one
 * @returns {number} - The single number that appears only once
 */
function singleNumber(nums) {
  // Use reduce with XOR to find the single number
  // Starting with 0 (XOR identity), XOR all numbers
  return nums.reduce((acc, cur) => acc ^ cur, 0);
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [4,1,2,1,2]
 *
 * Initial: acc = 0
 * Step 1: acc = 0 ^ 4 = 4
 * Step 2: acc = 4 ^ 1 = 5 (binary: 100 ^ 001 = 101)
 * Step 3: acc = 5 ^ 2 = 7 (binary: 101 ^ 010 = 111)
 * Step 4: acc = 7 ^ 1 = 6 (binary: 111 ^ 001 = 110)
 * Step 5: acc = 6 ^ 2 = 4 (binary: 110 ^ 010 = 100)
 *
 * Result: 4 (the single number)
 *
 * Visual representation:
 * 4 ⊕ 1 ⊕ 2 ⊕ 1 ⊕ 2 = 4 ⊕ (1⊕1) ⊕ (2⊕2) = 4 ⊕ 0 ⊕ 0 = 4
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Single number:", singleNumber(nums));

/**
 * 🔄 ALTERNATIVE APPROACHES (Less Optimal):
 */

/**
 * APPROACH 1: Using Set/Map (Hash Table)
 * Track occurrences and find the one with single count
 * Time: O(n), Space: O(n)
 */
function singleNumberHashMap(nums) {
  const map = new Map();

  // Count occurrences
  for (const num of nums) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  // Find the number with count 1
  for (const [num, count] of map) {
    if (count === 1) return num;
  }
}

/**
 * APPROACH 2: Using Set Add/Remove
 * Add new numbers, remove duplicates
 * Time: O(n), Space: O(n)
 */
function singleNumberSet(nums) {
  const set = new Set();

  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num); // Remove if seen before
    } else {
      set.add(num); // Add if new
    }
  }

  // Set will contain only the single number
  return [...set][0];
}

/**
 * APPROACH 3: Mathematical (2 * sum of unique - total sum)
 * Time: O(n), Space: O(n) for Set
 */
function singleNumberMath(nums) {
  const uniqueSum = [...new Set(nums)].reduce((a, b) => a + b, 0);
  const totalSum = nums.reduce((a, b) => a + b, 0);
  return 2 * uniqueSum - totalSum;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  [2, 2, 1], // Expected: 1
  [4, 1, 2, 1, 2], // Expected: 4
  [1], // Expected: 1
  [7, 3, 7], // Expected: 3
  [-1, -1, 2], // Expected: 2
  [0, 1, 0], // Expected: 1
];

testCases.forEach((testCase, index) => {
  console.log(`\nTest Case ${index + 1}: [${testCase.join(", ")}]`);
  console.log(`XOR Approach:  ${singleNumber(testCase)}`);
  console.log(`HashMap:       ${singleNumberHashMap(testCase)}`);
  console.log(`Set Method:    ${singleNumberSet(testCase)}`);
  console.log(`Mathematical:  ${singleNumberMath(testCase)}`);
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach        | Time | Space | Pros                    | Cons                    |
 * |----------------|------|-------|-------------------------|-------------------------|
 * | XOR Manipulation| O(n) | O(1)  | Optimal, elegant        | Requires bit knowledge  |
 * | HashMap        | O(n) | O(n)  | Intuitive               | Extra space needed      |
 * | Set Add/Remove | O(n) | O(n)  | Clear logic             | Extra space needed      |
 * | Mathematical   | O(n) | O(n)  | Creative approach       | Potential overflow      |
 *
 * 🏆 WINNER: XOR Manipulation - meets all problem constraints perfectly!
 */

/**
 * 💡 KEY INSIGHTS & INTERVIEW TIPS:
 *
 * 1. **Bit Manipulation Mastery**: This problem is a classic introduction to XOR properties
 * 2. **Problem Constraints**: The O(1) space requirement eliminates hash-based solutions
 * 3. **Mathematical Thinking**: XOR properties make seemingly complex problems simple
 * 4. **Interview Strategy**: Start with brute force, then optimize to XOR
 * 5. **Edge Cases**: Single element array, negative numbers, zero values
 *
 * 🎓 LEARNING OUTCOMES:
 * - Understanding XOR bitwise operation
 * - Recognizing when bit manipulation is optimal
 * - Thinking beyond traditional data structures
 * - Appreciating mathematical properties in algorithms
 */

/**
 * 🔗 RELATED PROBLEMS:
 * - Single Number II (LeetCode #137) - element appears 3 times except one
 * - Single Number III (LeetCode #260) - two elements appear once
 * - Missing Number (LeetCode #268) - find missing number in range
 * - Find the Duplicate Number (LeetCode #287) - similar XOR application
 */
