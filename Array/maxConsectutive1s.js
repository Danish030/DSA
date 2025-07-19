/**
 * 🚀 LeetCode Problem #485: Max Consecutive Ones
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given a binary array nums, return the maximum number of consecutive 1's in the array.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= nums.length <= 10^5
 * - nums[i] is either 0 or 1
 *
 * 🎯 EXAMPLES:
 * Input: nums = [1,1,0,1,1,1]
 * Output: 3
 * Explanation: The first two digits or the last three digits are consecutive 1s.
 * The maximum number of consecutive 1s is 3.
 *
 * Input: nums = [1,0,1,1,0,1]
 * Output: 2
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Single Pass with Counter Tracking
 *
 * KEY CONCEPT:
 * - Use a counter to track current consecutive 1's
 * - Keep track of maximum consecutive 1's seen so far
 * - Reset counter when encountering 0
 * - Update maximum when counter resets or at the end
 *
 * ALGORITHM STEPS:
 * 1. Initialize counter (cnt) for current consecutive 1's
 * 2. Initialize answer (ans) for maximum consecutive 1's found
 * 3. Iterate through array:
 *    - If current element is 1: increment counter
 *    - If current element is 0:
 *      * Update maximum with current counter
 *      * Reset counter to 0
 * 4. Return maximum of stored answer and final counter
 *    (handles case where array ends with consecutive 1's)
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Single pass through array
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space
 *
 * 🎨 OPTIMIZATION: This is already optimal for this problem
 */

// Test case array - represents binary array with 1's and 0's
let nums = [1, 1, 0, 1, 1, 1, 0, 1];

/**
 * 🔧 MAIN FUNCTION: Find Maximum Consecutive Ones
 * @param {number[]} nums - Binary array containing only 0's and 1's
 * @returns {number} - Maximum number of consecutive 1's
 */
function findMaxConsecutiveOnes(nums) {
  // Counter for current consecutive 1's sequence
  let cnt = 0;

  // Maximum consecutive 1's found so far
  let ans = 0;

  // Single pass through the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      // Found a 1: extend current consecutive sequence
      cnt++;
    } else {
      // Found a 0: end current sequence
      // Update maximum before resetting counter
      ans = Math.max(ans, cnt);
      cnt = 0; // Reset counter for next sequence
    }
  }

  // Return maximum of stored answer and final counter
  // This handles the case where array ends with consecutive 1's
  return Math.max(ans, cnt);
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [1,1,0,1,1,1,0,1]
 *
 * i=0: nums[0]=1 → cnt=1, ans=0
 * i=1: nums[1]=1 → cnt=2, ans=0
 * i=2: nums[2]=0 → ans=max(0,2)=2, cnt=0
 * i=3: nums[3]=1 → cnt=1, ans=2
 * i=4: nums[4]=1 → cnt=2, ans=2
 * i=5: nums[5]=1 → cnt=3, ans=2
 * i=6: nums[6]=0 → ans=max(2,3)=3, cnt=0
 * i=7: nums[7]=1 → cnt=1, ans=3
 *
 * Final: max(3,1) = 3
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Maximum consecutive 1's:", findMaxConsecutiveOnes(nums));

/**
 * 💡 ALTERNATIVE APPROACHES:
 *
 * 1. Using Split Method:
 *    - Convert array to string, split by '0', find longest '1' substring
 *    - Time: O(n), Space: O(n)
 *    - Less efficient due to string operations
 *
 * 2. Two Pointers:
 *    - Use left and right pointers to track consecutive 1's
 *    - Time: O(n), Space: O(1)
 *    - More complex implementation for same result
 *
 * 3. Sliding Window:
 *    - Maintain window of consecutive 1's
 *    - Time: O(n), Space: O(1)
 *    - Overkill for this simple problem
 *
 * 🏆 CHOSEN APPROACH ADVANTAGES:
 * - Simplest and most intuitive
 * - Optimal time and space complexity
 * - Easy to understand and implement
 * - Handles all edge cases naturally
 */

/**
 * 🧪 ADDITIONAL TEST CASES:
 */

// Test Case 1: All ones
console.log("\n--- Additional Test Cases ---");
console.log("All 1's [1,1,1,1]:", findMaxConsecutiveOnes([1, 1, 1, 1])); // Expected: 4

// Test Case 2: All zeros
console.log("All 0's [0,0,0,0]:", findMaxConsecutiveOnes([0, 0, 0, 0])); // Expected: 0

// Test Case 3: Single element
console.log("Single 1 [1]:", findMaxConsecutiveOnes([1])); // Expected: 1
console.log("Single 0 [0]:", findMaxConsecutiveOnes([0])); // Expected: 0

// Test Case 4: Alternating pattern
console.log(
  "Alternating [1,0,1,0,1]:",
  findMaxConsecutiveOnes([1, 0, 1, 0, 1])
); // Expected: 1

// Test Case 5: Ends with consecutive 1's
console.log("Ends with 1's [0,1,1,1]:", findMaxConsecutiveOnes([0, 1, 1, 1])); // Expected: 3
