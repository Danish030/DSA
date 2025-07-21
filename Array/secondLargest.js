/**
 * 🚀 Find Second Largest Element in Array
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array of integers, find the second largest element in the array.
 * If the second largest element doesn't exist, return -1.
 *
 * 📊 CONSTRAINTS:
 * - Array can contain duplicate elements
 * - Array can be empty or have only one element
 * - Elements can be negative numbers
 * - If all elements are the same, return -1
 *
 * 🎯 EXAMPLES:
 * Input: nums = [12, 35, 1, 10, 34, 77, 98]
 * Output: 77
 * Explanation: Largest is 98, second largest is 77
 *
 * Input: nums = [10, 10, 10]
 * Output: -1
 * Explanation: All elements are same, no second largest exists
 *
 * Input: nums = [5]
 * Output: -1
 * Explanation: Only one element, no second largest exists
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Two-Variable Tracking (Optimal Single Pass)
 *
 * KEY CONCEPT:
 * - Track the largest and second largest elements simultaneously
 * - Update both variables as we encounter larger elements
 * - Handle duplicates by ensuring second largest ≠ first largest
 *
 * ALGORITHM STEPS:
 * 1. Initialize firstLargest and secondLargest to -Infinity
 * 2. For each element in array:
 *    a) If current > firstLargest:
 *       - Move firstLargest to secondLargest
 *       - Update firstLargest to current element
 *    b) Else if current > secondLargest AND current ≠ firstLargest:
 *       - Update secondLargest to current element
 * 3. Return secondLargest if valid, otherwise -1
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Single pass through array
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space
 *
 * 🎨 OPTIMIZATION: This is already optimal for this problem
 */

// Test case array - contains various integers with clear largest and second largest
let nums = [12, 35, 1, 10, 34, 77, 98];

/**
 * 🔧 MAIN FUNCTION: Find Second Largest Element
 * @param {number[]} nums - Array of integers
 * @returns {number} - Second largest element, or -1 if doesn't exist
 */
function findSecondLargest(nums) {
  // Initialize tracking variables to negative infinity
  // This handles negative numbers correctly
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  let size = nums.length;

  // Single pass through the array
  for (let i = 0; i < size; i++) {
    if (nums[i] > firstLargest) {
      // Found new largest element
      // Move current largest to second largest
      secondLargest = firstLargest;
      // Update largest to current element
      firstLargest = nums[i];
    } else if (
      nums[i] > secondLargest && // Greater than current second largest
      nums[i] !== firstLargest // Not equal to first largest (handles duplicates)
    ) {
      // Found new second largest element
      secondLargest = nums[i];
    }
  }

  // Return -1 if no valid second largest found
  return secondLargest === -Infinity ? -1 : secondLargest;
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [12, 35, 1, 10, 34, 77, 98]
 *
 * Initial: firstLargest = -∞, secondLargest = -∞
 *
 * i=0, nums[0]=12:
 *   12 > -∞ → secondLargest = -∞, firstLargest = 12
 *
 * i=1, nums[1]=35:
 *   35 > 12 → secondLargest = 12, firstLargest = 35
 *
 * i=2, nums[2]=1:
 *   1 < 35 and 1 < 12 → no change
 *
 * i=3, nums[3]=10:
 *   10 < 35 and 10 < 12 → no change
 *
 * i=4, nums[4]=34:
 *   34 < 35 but 34 > 12 and 34 ≠ 35 → secondLargest = 34
 *
 * i=5, nums[5]=77:
 *   77 > 35 → secondLargest = 35, firstLargest = 77
 *
 * i=6, nums[6]=98:
 *   98 > 77 → secondLargest = 77, firstLargest = 98
 *
 * Final: firstLargest = 98, secondLargest = 77
 * Result: 77
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Second largest element:", findSecondLargest(nums));

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Sorting Method
 * Sort array and pick second unique element
 * Time: O(n log n), Space: O(1) or O(n) depending on sort
 */
function findSecondLargestSort(nums) {
  if (nums.length < 2) return -1;

  // Sort in descending order
  nums.sort((a, b) => b - a);

  // Find first element different from largest
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[0]) {
      return nums[i];
    }
  }

  return -1; // All elements are same
}

/**
 * APPROACH 2: Two-Pass Method
 * First pass finds maximum, second pass finds second maximum
 * Time: O(n), Space: O(1)
 */
function findSecondLargestTwoPass(nums) {
  if (nums.length < 2) return -1;

  // First pass: find maximum
  let max = Math.max(...nums);

  // Second pass: find largest element that's not equal to max
  let secondMax = -Infinity;
  for (let num of nums) {
    if (num !== max && num > secondMax) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? -1 : secondMax;
}

/**
 * APPROACH 3: Using Set and Sort
 * Remove duplicates, then sort and pick second element
 * Time: O(n log n), Space: O(n)
 */
function findSecondLargestSet(nums) {
  const uniqueNums = [...new Set(nums)].sort((a, b) => b - a);
  return uniqueNums.length >= 2 ? uniqueNums[1] : -1;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  [12, 35, 1, 10, 34, 77, 98], // Expected: 77
  [10, 10, 10], // Expected: -1 (all same)
  [5], // Expected: -1 (single element)
  [], // Expected: -1 (empty array)
  [1, 2], // Expected: 1
  [2, 1], // Expected: 1
  [-1, -2, -3], // Expected: -2
  [5, 5, 4, 4, 3], // Expected: 4
  [100], // Expected: -1
  [7, 7, 7, 6, 6, 5], // Expected: 6
];

testCases.forEach((testCase, index) => {
  console.log(`\nTest Case ${index + 1}: [${testCase.join(", ")}]`);
  console.log(`Two-Variable:  ${findSecondLargest(testCase)}`);
  console.log(`Sorting:       ${findSecondLargestSort([...testCase])}`); // Copy to avoid mutation
  console.log(`Two-Pass:      ${findSecondLargestTwoPass(testCase)}`);
  console.log(`Set Method:    ${findSecondLargestSet(testCase)}`);
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach          | Time     | Space | Pros                    | Cons                    |
 * |-------------------|----------|-------|-------------------------|-------------------------|
 * | Two-Variable      | O(n)     | O(1)  | Optimal, single pass    | Slightly complex logic  |
 * | Sorting           | O(n log n)| O(1)  | Simple to understand    | Slower, modifies array  |
 * | Two-Pass          | O(n)     | O(1)  | Easy logic              | Two passes needed       |
 * | Set + Sort        | O(n log n)| O(n)  | Handles duplicates well | Extra space, slower     |
 *
 * 🏆 RECOMMENDED: Two-Variable approach - optimal time and space complexity
 */

/**
 * 💡 KEY INSIGHTS & EDGE CASES:
 *
 * 1. **Duplicate Handling**: Must ensure second largest ≠ first largest
 * 2. **Negative Numbers**: Using -Infinity handles negative arrays correctly
 * 3. **Single Element**: Arrays with < 2 unique elements should return -1
 * 4. **Empty Arrays**: Proper handling of edge case
 * 5. **All Same Elements**: Should return -1, not the repeated element
 *
 * 🎓 LEARNING OUTCOMES:
 * - Single-pass optimization techniques
 * - Proper handling of edge cases
 * - Variable initialization strategies
 * - Duplicate element considerations
 * - Time vs space complexity trade-offs
 */

/**
 * ⚠️ COMMON MISTAKES TO AVOID:
 *
 * 1. **Wrong Initialization**: Using 0 or nums[0] instead of -Infinity
 * 2. **Duplicate Issues**: Not checking nums[i] !== firstLargest
 * 3. **Edge Cases**: Not handling empty arrays or single elements
 * 4. **Logic Errors**: Incorrect condition in else-if statement
 * 5. **Return Values**: Not returning -1 for invalid cases
 */
