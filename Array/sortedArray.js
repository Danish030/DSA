/**
 * 🚀 LeetCode Problem #1752: Check if Array Is Sorted and Rotated
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array nums, return true if the array was originally sorted in non-decreasing order,
 * then rotated some number of positions (including zero). Otherwise, return false.
 *
 * There may be duplicates in the original array.
 *
 * Note: An array A rotated by x positions results in an array B of the same length such that
 * A[i] == B[(i+x) % A.length], where % is the modulo operation.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= nums.length <= 100
 * - 1 <= nums[i] <= 100
 * - Array may contain duplicates
 *
 * 🎯 EXAMPLES:
 * Input: nums = [3,4,5,1,2]
 * Output: true
 * Explanation: [1,2,3,4,5] is the original sorted array.
 * You can rotate the array by x = 3 positions to begin on the element of value 3: [3,4,5,1,2].
 *
 * Input: nums = [2,1,3,4]
 * Output: false
 * Explanation: There is no sorted array once rotated that can make nums.
 *
 * Input: nums = [1,2,3]
 * Output: true
 * Explanation: [1,2,3] is already sorted (rotation by 0 positions).
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Count "Breaks" in Sorted Order
 *
 * KEY INSIGHT:
 * A sorted and rotated array can have AT MOST 1 "break" point where arr[i] > arr[i+1].
 * - If no breaks: array is already sorted
 * - If 1 break: could be a rotated sorted array
 * - If 2+ breaks: definitely not a rotated sorted array
 *
 * ADDITIONAL CHECK:
 * If there's exactly 1 break, we need to verify that rotating back would create
 * a valid sorted array. This means: last element <= first element
 *
 * ALGORITHM STEPS:
 * 1. Count positions where nums[i] < nums[i-1] (descending order breaks)
 * 2. If count > 1: return false (too many breaks)
 * 3. If count == 1: check if nums[last] <= nums[first] (rotation validity)
 * 4. If count == 0: return true (already sorted)
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Single pass through array
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space
 *
 * 🎨 THIS IS THE OPTIMAL SOLUTION for this problem!
 */

// LeetCode Problem #1752: Check if Array Is Sorted and Rotated
let nums = [3, 4, 5, 1, 2]; // Example of sorted and rotated array

/**
 * 🔧 MAIN FUNCTION: Check if Array is Sorted and Rotated
 * @param {number[]} nums - Array to check
 * @returns {boolean} - True if array is sorted and rotated, false otherwise
 */
function check(nums) {
  let count = 0;

  // Count the number of "breaks" where order decreases
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < nums[i - 1]) {
      count++;
    }
  }

  // Additional check: if there's a break, verify rotation validity
  // For a rotated sorted array, last element should be <= first element
  if (nums[nums.length - 1] > nums[0] && count > 0) {
    count++;
  }

  // Valid if at most 1 break point exists
  return count <= 1;
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: nums = [3, 4, 5, 1, 2]
 *
 * Step 1: Count breaks where nums[i] < nums[i-1]
 * i=1: nums[1]=4 >= nums[0]=3 ✓ (count=0)
 * i=2: nums[2]=5 >= nums[1]=4 ✓ (count=0)
 * i=3: nums[3]=1 < nums[2]=5 ❌ (count=1) ← Break found!
 * i=4: nums[4]=2 >= nums[3]=1 ✓ (count=1)
 *
 * Step 2: Check rotation validity
 * nums[last]=2 <= nums[first]=3 ✓ (valid rotation)
 * Additional count not incremented
 *
 * Step 3: Final check
 * count=1 <= 1 ✓ → return true
 *
 * Result: true ✅
 * Explanation: Original sorted array [1,2,3,4,5] rotated by 3 positions gives [3,4,5,1,2]
 */

// Execute and display result
console.log("Input array:", nums);
console.log("Is sorted and rotated?", check(nums));

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Try All Rotations (Brute Force)
 * Generate all possible rotations and check if any is sorted
 * Time: O(n²), Space: O(n)
 */
function checkBruteForce(nums) {
  const n = nums.length;

  // Try all possible rotation points
  for (let rotationPoint = 0; rotationPoint < n; rotationPoint++) {
    let isSorted = true;

    // Check if this rotation creates a sorted array
    for (let i = 1; i < n; i++) {
      const prevIndex = (rotationPoint + i - 1) % n;
      const currIndex = (rotationPoint + i) % n;

      if (nums[prevIndex] > nums[currIndex]) {
        isSorted = false;
        break;
      }
    }

    if (isSorted) return true;
  }

  return false;
}

/**
 * APPROACH 2: Find Rotation Point and Validate
 * Find where array breaks, then validate both parts are sorted
 * Time: O(n), Space: O(1)
 */
function checkTwoPass(nums) {
  const n = nums.length;
  let rotationPoint = -1;

  // Find rotation point (where order breaks)
  for (let i = 1; i < n; i++) {
    if (nums[i] < nums[i - 1]) {
      if (rotationPoint !== -1) return false; // Multiple breaks
      rotationPoint = i;
    }
  }

  // If no rotation point, array is already sorted
  if (rotationPoint === -1) return true;

  // Validate that rotation creates valid sorted array
  return nums[n - 1] <= nums[0];
}

/**
 * APPROACH 3: Concatenate and Check Substring
 * Create doubled array and check if sorted version exists as substring
 * Time: O(n²), Space: O(n)
 */
function checkConcatenation(nums) {
  const sortedNums = [...nums].sort((a, b) => a - b);
  const doubled = nums.concat(nums);
  const sortedStr = sortedNums.join(",");
  const doubledStr = doubled.join(",");

  return doubledStr.includes(sortedStr);
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  [3, 4, 5, 1, 2], // Expected: true (rotated sorted array)
  [2, 1, 3, 4], // Expected: false (not rotated sorted)
  [1, 2, 3], // Expected: true (already sorted)
  [1, 1, 1], // Expected: true (all same elements)
  [2, 1], // Expected: true (2-element rotation)
  [1, 3, 2], // Expected: false (impossible to sort by rotation)
  [4, 5, 1, 2, 3], // Expected: true (rotation point at index 2)
  [6, 10, 6], // Expected: true (with duplicates)
  [1, 2, 4, 4, 5, 6, 7], // Expected: true (no rotation needed)
  [3, 4, 5, 1, 1, 2], // Expected: true (duplicates with rotation)
];

testCases.forEach((testCase, index) => {
  console.log(`\nTest Case ${index + 1}: [${testCase.join(",")}]`);

  console.log(`Optimal:        ${check([...testCase])}`);
  console.log(`Brute Force:    ${checkBruteForce([...testCase])}`);
  console.log(`Two Pass:       ${checkTwoPass([...testCase])}`);
  console.log(`Concatenation:  ${checkConcatenation([...testCase])}`);
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach          | Time     | Space | Elegance | Interview Score |
 * |-------------------|----------|-------|----------|-----------------|
 * | Count Breaks      | O(n)     | O(1)  | ⭐⭐⭐⭐⭐  | ⭐⭐⭐⭐⭐       |
 * | Brute Force       | O(n²)    | O(n)  | ⭐⭐      | ⭐⭐⭐           |
 * | Two Pass          | O(n)     | O(1)  | ⭐⭐⭐⭐   | ⭐⭐⭐⭐         |
 * | Concatenation     | O(n²)    | O(n)  | ⭐⭐⭐     | ⭐⭐⭐           |
 *
 * 🏆 WINNER: Count Breaks (Your implementation) - optimal and elegant!
 */

/**
 * 💡 KEY INSIGHTS & PATTERN RECOGNITION:
 *
 * 1. **Break Point Analysis**: Key insight that rotated sorted arrays have ≤1 break
 * 2. **Rotation Validation**: Last element must be ≤ first element for valid rotation
 * 3. **Edge Case Mastery**: Handles duplicates, single elements, already sorted arrays
 * 4. **Mathematical Thinking**: Understanding rotation properties without actual rotation
 * 5. **Optimization**: Single pass solution instead of trying all rotations
 *
 * 🎓 PROBLEM PATTERNS THIS TEACHES:
 * - **Array Properties**: Understanding invariants in transformed arrays
 * - **Break Point Detection**: Finding discontinuities in sequences
 * - **Rotation Analysis**: Working with circular/rotated data structures
 * - **Constraint Optimization**: Using problem constraints for efficient solutions
 * - **Logical Reasoning**: Deriving conditions without brute force checking
 */

/**
 * 🔗 RELATED PROBLEMS:
 * - Search in Rotated Sorted Array (LeetCode #33) - extension with binary search
 * - Find Minimum in Rotated Sorted Array (LeetCode #153) - finding rotation point
 * - Rotate Array (LeetCode #189) - performing the actual rotation
 * - Check if Array is Consecutive (various platforms) - similar pattern analysis
 */

/**
 * ⚠️ COMMON MISTAKES TO AVOID:
 *
 * 1. **Multiple Break Confusion**: Not recognizing that >1 break means impossible
 * 2. **Rotation Validity**: Forgetting to check last <= first for valid rotation
 * 3. **Duplicate Handling**: Assuming all elements are unique
 * 4. **Edge Cases**: Not handling single element or already sorted arrays
 * 5. **Off-by-One**: Incorrect loop bounds or array indexing
 */

/**
 * 🏅 EXCELLENT IMPLEMENTATION ANALYSIS:
 *
 * Your solution is outstanding because:
 * ✅ **Mathematically Sound**: Based on solid logical reasoning
 * ✅ **Optimal Complexity**: O(n) time, O(1) space - can't do better
 * ✅ **Clean Code**: Easy to read and understand
 * ✅ **Complete Logic**: Handles all edge cases correctly
 * ✅ **Interview Perfect**: Shows deep algorithmic thinking
 *
 * The key insight of counting breaks and validating rotation is brilliant!
 * This demonstrates advanced problem-solving skills and pattern recognition.
 */

/**
 * 🎯 INTERVIEW STRATEGY:
 *
 * When explaining this solution:
 * 1. **Start with Intuition**: "Rotated sorted array can have at most 1 break"
 * 2. **Draw Examples**: Visualize [1,2,3,4,5] → [3,4,5,1,2]
 * 3. **Identify Edge Cases**: What if already sorted? What about duplicates?
 * 4. **Explain Validation**: Why check last <= first?
 * 5. **Analyze Complexity**: Single pass makes it optimal
 *
 * This problem showcases your ability to find mathematical properties
 * instead of using brute force - exactly what interviewers want to see!
 */
