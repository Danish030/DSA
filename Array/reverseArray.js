/**
 * 🚀 Array Reversal Problem
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array of integers, reverse the array in-place and return the modified array.
 * The reversal should be done without using extra space for another array.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= arr.length <= 10^5
 * - -10^9 <= arr[i] <= 10^9
 * - Must reverse in-place (constant extra space)
 * - Original array should be modified
 *
 * 🎯 EXAMPLES:
 * Input: arr = [1,2,3,4,5]
 * Output: [5,4,3,2,1]
 * Explanation: Array is reversed in-place
 *
 * Input: arr = [1]
 * Output: [1]
 * Explanation: Single element array remains unchanged
 *
 * Input: arr = [10,20]
 * Output: [20,10]
 * Explanation: Two elements are swapped
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Two Pointer Technique (In-place Swapping)
 *
 * KEY CONCEPT:
 * - Use two pointers: one from start, one from end
 * - Swap elements at these positions
 * - Move pointers towards center until they meet
 * - Only need to iterate through first half of array
 *
 * ALGORITHM STEPS:
 * 1. Initialize left pointer at start (i = 0)
 * 2. Calculate right pointer position (len - 1 - i)
 * 3. Swap elements at left and right positions
 * 4. Move to next pair (increment i)
 * 5. Continue until i reaches middle (i < len/2)
 *
 * ⏱️ TIME COMPLEXITY: O(n/2) = O(n) - Visit each element once
 * 💾 SPACE COMPLEXITY: O(1) - Only using constant extra space for temp variable
 *
 * 🎨 OPTIMIZATION: This is already optimal for in-place reversal
 */

// Test case array - contains various integers to demonstrate reversal
let arr = [1, 4, 5, 6, 7];

/**
 * 🔧 MAIN FUNCTION: Reverse Array In-Place
 * @param {number[]} arr - Array of integers to reverse
 * @returns {number[]} - The same array reversed in-place
 */
function reverseArray(arr) {
  let len = arr.length;

  // Only need to iterate through first half
  // Math.floor handles both odd and even length arrays
  for (let i = 0; i < Math.floor(len / 2); i++) {
    // Three-step swap using temporary variable
    let temp = arr[i]; // Store left element
    arr[i] = arr[len - 1 - i]; // Move right to left
    arr[len - 1 - i] = temp; // Move stored left to right
  }

  return arr; // Return the modified array
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: [1, 4, 5, 6, 7] (length = 5)
 *
 * Initial: arr = [1, 4, 5, 6, 7]
 * Loop condition: i < Math.floor(5/2) = i < 2
 *
 * Iteration 1 (i = 0):
 *   - Swap positions 0 and 4: arr[0] ↔ arr[4]
 *   - temp = 1, arr[0] = 7, arr[4] = 1
 *   - Result: [7, 4, 5, 6, 1]
 *
 * Iteration 2 (i = 1):
 *   - Swap positions 1 and 3: arr[1] ↔ arr[3]
 *   - temp = 4, arr[1] = 6, arr[3] = 4
 *   - Result: [7, 6, 5, 4, 1]
 *
 * Loop ends (i = 2, not < 2)
 * Middle element (index 2) stays in place
 *
 * Final: [7, 6, 5, 4, 1]
 */

// Execute and display result
console.log("Original array:", [...arr]); // Create copy to show original
console.log("Reversed array:", reverseArray(arr));
console.log("Array after reversal:", arr); // Show that original is modified

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Built-in Reverse Method
 * Uses JavaScript's built-in reverse() method
 * Time: O(n), Space: O(1)
 */
function reverseArrayBuiltIn(arr) {
  return arr.reverse();
}

/**
 * APPROACH 2: Two Pointers with While Loop
 * Alternative implementation using while loop and explicit pointers
 * Time: O(n), Space: O(1)
 */
function reverseArrayTwoPointers(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    // Swap elements at left and right positions
    [arr[left], arr[right]] = [arr[right], arr[left]]; // ES6 destructuring swap
    left++;
    right--;
  }

  return arr;
}

/**
 * APPROACH 3: Recursive Reversal
 * Recursive approach for educational purposes
 * Time: O(n), Space: O(n) due to recursion stack
 */
function reverseArrayRecursive(arr, start = 0, end = arr.length - 1) {
  // Base case: pointers meet or cross
  if (start >= end) return arr;

  // Swap current elements
  let temp = arr[start];
  arr[start] = arr[end];
  arr[end] = temp;

  // Recursive call for inner elements
  return reverseArrayRecursive(arr, start + 1, end - 1);
}

/**
 * APPROACH 4: Creating New Array (Not In-Place)
 * Creates new reversed array instead of modifying original
 * Time: O(n), Space: O(n)
 */
function reverseArrayNew(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  [1, 4, 5, 6, 7], // Odd length
  [2, 4, 6, 8], // Even length
  [42], // Single element
  [-1, -2, -3, -4], // Negative numbers
  [1, 2], // Two elements
  [5, 5, 5, 5, 5], // All same elements
  [100, 200, 300, 400, 500, 600], // Larger array
];

testCases.forEach((testCase, index) => {
  console.log(`\nTest Case ${index + 1}: [${testCase.join(", ")}]`);

  // Test each approach with a copy of the array
  console.log(`Original:       [${testCase.join(", ")}]`);
  console.log(`For Loop:       [${reverseArray([...testCase]).join(", ")}]`);
  console.log(
    `Built-in:       [${reverseArrayBuiltIn([...testCase]).join(", ")}]`
  );
  console.log(
    `Two Pointers:   [${reverseArrayTwoPointers([...testCase]).join(", ")}]`
  );
  console.log(
    `Recursive:      [${reverseArrayRecursive([...testCase]).join(", ")}]`
  );
  console.log(`New Array:      [${reverseArrayNew([...testCase]).join(", ")}]`);
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach          | Time | Space | In-Place | Pros                    | Cons                     |
 * |-------------------|------|-------|----------|-------------------------|--------------------------|
 * | For Loop Swap     | O(n) | O(1)  | ✅       | Optimal, educational    | Manual implementation    |
 * | Built-in reverse()| O(n) | O(1)  | ✅       | Simple, readable        | Less educational         |
 * | Two Pointers      | O(n) | O(1)  | ✅       | Clear logic             | Slightly more code       |
 * | Recursive         | O(n) | O(n)  | ✅       | Educational             | Stack overhead           |
 * | New Array         | O(n) | O(n)  | ❌       | Preserves original      | Extra space needed       |
 *
 * 🏆 RECOMMENDED: For Loop Swap - optimal and demonstrates algorithmic thinking
 */

/**
 * 💡 KEY INSIGHTS & INTERVIEW TIPS:
 *
 * 1. **In-Place Requirement**: Critical to understand when extra space is not allowed
 * 2. **Two Pointer Pattern**: Fundamental technique for array problems
 * 3. **Swap Implementation**: Multiple ways to swap (temp variable, destructuring, XOR)
 * 4. **Loop Boundary**: Understanding why we only need to iterate through half
 * 5. **Edge Cases**: Single element, empty array, two elements
 *
 * 🎓 LEARNING OUTCOMES:
 * - Master the two-pointer technique
 * - Understand in-place algorithm constraints
 * - Learn different swapping methods
 * - Recognize symmetric operation patterns
 * - Practice edge case handling
 */

/**
 * 🔗 RELATED PROBLEMS:
 * - Reverse String (LeetCode #344) - similar concept with characters
 * - Rotate Array (LeetCode #189) - partial reversal technique
 * - Palindrome Check - uses two-pointer approach
 * - Reverse Linked List (LeetCode #206) - reversal with different data structure
 */

/**
 * ⚠️ COMMON MISTAKES TO AVOID:
 *
 * 1. **Wrong Loop Condition**: Using i < len instead of i < len/2
 * 2. **Index Calculation**: Incorrect right pointer calculation
 * 3. **Swap Logic**: Forgetting temporary variable or incorrect order
 * 4. **Edge Cases**: Not handling single element or empty arrays
 * 5. **Modifying vs New**: Confusing in-place vs creating new array requirements
 */
