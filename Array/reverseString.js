/*
 * REVERSE STRING SOLUTION - TWO POINTER APPROACH
 *
 * Problem: Reverse a string represented as an array of characters in-place
 *
 * Algorithm: Two Pointer Technique
 * - Use two pointers: left (start) and right (end)
 * - Swap characters at left and right positions
 * - Move pointers toward each other until they meet
 *
 * Time Complexity: O(n/2) = O(n) - we visit each element once
 * Space Complexity: O(1) - only using constant extra space for pointers and temp variable
 *
 * Key Concepts:
 * 1. In-place modification (no extra array needed)
 * 2. Two-pointer technique for efficient traversal
 * 3. Character swapping using temporary variable
 */

let s = ["h", "e", "l", "l", "o"];

function reveseString(s) {
  // Initialize two pointers
  let left = 0; // Points to the first character
  let right = s.length - 1; // Points to the last character

  // Continue until pointers meet in the middle
  while (left < right) {
    // Swap characters at left and right positions
    let temp = s[left]; // Store left character temporarily
    s[left] = s[right]; // Move right character to left position
    s[right] = temp; // Move temp (original left) to right position

    // Move pointers toward each other
    left++; // Move left pointer forward
    right--; // Move right pointer backward
  }

  return s; // Return the modified array (reversed)
}

// Test the function
console.log("Original:", ["h", "e", "l", "l", "o"]);
console.log("Reversed:", reveseString(s));

/*
 * STEP-BY-STEP EXECUTION TRACE:
 *
 * Initial: ["h", "e", "l", "l", "o"]
 *           ↑                    ↑
 *         left=0              right=4
 *
 * Step 1: Swap s[0] and s[4] → ["o", "e", "l", "l", "h"]
 *                ↑         ↑
 *              left=1    right=3
 *
 * Step 2: Swap s[1] and s[3] → ["o", "l", "l", "e", "h"]
 *                     ↑   ↑
 *                   left=2, right=2
 *
 * Step 3: left >= right, so loop terminates
 *
 * Final: ["o", "l", "l", "e", "h"]
 *
 * ALTERNATIVE APPROACHES:
 * 1. Using built-in reverse(): s.reverse() - O(n) time, O(1) space
 * 2. Using recursion: More space due to call stack O(n)
 * 3. Using additional array: O(n) space complexity
 *
 * WHY TWO-POINTER IS OPTIMAL:
 * - Minimal space usage (only 3 variables)
 * - Single pass through half the array
 * - No additional data structures needed
 * - Clear and readable logic
 */

//leetcode:-https://leetcode.com/problems/reverse-string/
