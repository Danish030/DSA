/**
 * 🚀 LeetCode Problem #268: Missing Number
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * 📊 CONSTRAINTS:
 * - n == nums.length
 * - 1 <= n <= 10^4
 * - 0 <= nums[i] <= n
 * - All the numbers of nums are unique
 *
 * 🎯 EXAMPLES:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3].
 * 2 is the missing number in the range since it does not appear in nums.
 *
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2].
 * 2 is the missing number in the range since it does not appear in nums.
 *
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 * Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9].
 * 8 is the missing number in the range since it does not appear in nums.
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH 1: Counting Array (Current Implementation)
 *
 * KEY CONCEPT:
 * - Create a counting array to track which numbers are present
 * - Mark each number as seen in the counting array
 * - Find the index that remains unmarked (missing number)
 *
 * ALGORITHM STEPS:
 * 1. Create counting array of size (n+1) initialized to 0
 * 2. For each number in input array, increment count at that index
 * 3. Find the first index with count 0 - that's the missing number
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Two passes through array
 * 💾 SPACE COMPLEXITY: O(n) - Additional counting array
 *
 * 🎨 OPTIMIZATION: Mathematical approach would use O(1) space
 */

// Test case array - should contain numbers from 0 to n with one missing
let nums = [0, 1, 3]; // Missing number: 2

/**
 * 🔧 MAIN FUNCTION: Find Missing Number (Counting Array Approach)
 * @param {number[]} nums - Array of distinct numbers in range [0, n]
 * @returns {number} - The missing number in the range
 */
function missingNumber(nums) {
  // Create counting array of size n+1 (to include number n)
  const count = new Array(nums.length + 1).fill(0);

  // Mark each number as present in the counting array
  for (let i = 0; i < nums.length; i++) {
    count[nums[i]]++;
  }

  // Find the number that wasn't marked (count remains 0)
  for (let i = 0; i <= nums.length; i++) {
    if (count[i] === 0) {
      return i;
    }
  }

  // This should never be reached given problem constraints
  return -1;
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [0,1,3] (n=3, range=[0,1,2,3])
 *
 * Step 1: Create count array [0,0,0,0] (size 4)
 * Step 2: Process each number:
 *   - nums[0]=0 → count[0]++ → count=[1,0,0,0]
 *   - nums[1]=1 → count[1]++ → count=[1,1,0,0]
 *   - nums[2]=3 → count[3]++ → count=[1,1,0,1]
 * Step 3: Find first zero:
 *   - count[0]=1 ✗
 *   - count[1]=1 ✗
 *   - count[2]=0 ✓ → return 2
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Missing number:", missingNumber(nums));

/**
 * 🚀 OPTIMIZED APPROACHES:
 */

/**
 * APPROACH 2: Mathematical Sum (Optimal)
 * Uses formula: sum of [0...n] - sum of given array = missing number
 * Time: O(n), Space: O(1)
 */
function missingNumberMath(nums) {
  const n = nums.length;
  // Sum of numbers from 0 to n: n*(n+1)/2
  const expectedSum = (n * (n + 1)) / 2;

  // Calculate actual sum of given array
  const actualSum = nums.reduce((sum, num) => sum + num, 0);

  // Missing number = expected - actual
  return expectedSum - actualSum;
}

/**
 * APPROACH 3: XOR Bit Manipulation (Most Elegant)
 * Uses property: a ⊕ a = 0, a ⊕ 0 = a
 * Time: O(n), Space: O(1)
 */
function missingNumberXOR(nums) {
  let result = nums.length; // Start with n

  // XOR with both index and value
  for (let i = 0; i < nums.length; i++) {
    result ^= i ^ nums[i];
  }

  return result;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

// Test cases
const testCases = [
  [3, 0, 1], // Expected: 2
  [0, 1], // Expected: 2
  [9, 6, 4, 2, 3, 5, 7, 0, 1], // Expected: 8
  [1], // Expected: 0
  [0], // Expected: 1
  [0, 1, 2, 3, 5], // Expected: 4
];

testCases.forEach((testCase, index) => {
  console.log(`\nTest Case ${index + 1}: [${testCase.join(", ")}]`);
  console.log(`Counting Array: ${missingNumber(testCase)}`);
  console.log(`Mathematical:   ${missingNumberMath(testCase)}`);
  console.log(`XOR Approach:   ${missingNumberXOR(testCase)}`);
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach        | Time | Space | Pros                    | Cons                |
 * |----------------|------|-------|-------------------------|---------------------|
 * | Counting Array | O(n) | O(n)  | Easy to understand      | Extra space needed  |
 * | Mathematical   | O(n) | O(1)  | Space efficient         | Potential overflow  |
 * | XOR Manipulation| O(n) | O(1)  | Elegant, no overflow   | Less intuitive      |
 *
 * 🏆 RECOMMENDED: XOR approach for interviews (shows bit manipulation knowledge)
 * 📚 EDUCATIONAL: Counting array approach (easiest to understand)
 * ⚡ PRACTICAL: Mathematical approach (good balance of simplicity and efficiency)
 */

/**
 * 💡 KEY INSIGHTS:
 *
 * 1. **Problem Pattern**: This is a classic "find the missing element" problem
 * 2. **Range Knowledge**: Knowing the range [0,n] enables mathematical solutions
 * 3. **Space-Time Tradeoff**: Can trade extra space for simpler logic
 * 4. **Bit Manipulation**: XOR properties provide elegant solution
 * 5. **Multiple Solutions**: Always consider different approaches in interviews
 */
