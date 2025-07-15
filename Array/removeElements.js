/*
 * REMOVE ELEMENT - TWO POINTER APPROACH
 *
 * Problem: Remove all instances of a given value from an array in-place and return the new length
 *
 * Algorithm: Two Pointer Technique (Slow-Fast Pointers)
 * - i (slow pointer): Points to the position where next valid element should be placed
 * - j (fast pointer): Scans through the array to find valid elements (not equal to val)
 * - When valid element is found, place it at position i and increment i
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space for pointers
 *
 * Key Concepts:
 * 1. In-place modification (no extra array needed)
 * 2. Two-pointer technique for efficient traversal
 * 3. Works on unsorted arrays
 * 4. Returns length of valid elements, not the modified array
 */

let nums = [0, 1, 2, 2, 3, 0, 4, 2];
let val = 2;

function removeElements(nums, val) {
  let i = 0; // Slow pointer: points to next position for valid element

  // Traverse the array with fast pointer (j is implicit in for loop)
  for (let j = 0; j < nums.length; j++) {
    // If current element is NOT the target value
    if (nums[j] !== val) {
      nums[i] = nums[j]; // Place valid element at position i
      i++; // Move slow pointer forward
    }
    // If nums[j] === val, we skip it (don't increment i)
  }

  return i; // Return length of valid elements
}

// Test the function
console.log("Original array:", [0, 1, 2, 2, 3, 0, 4, 2]);
console.log("Removing value:", val);
console.log("New length:", removeElements(nums, val));
console.log(
  "Modified array (first",
  removeElements([0, 1, 2, 2, 3, 0, 4, 2], val),
  "elements):",
  nums.slice(0, removeElements([0, 1, 2, 2, 3, 0, 4, 2], val))
);

/*
 * STEP-BY-STEP EXECUTION TRACE:
 *
 * Target value to remove: 2
 * Initial: [0, 1, 2, 2, 3, 0, 4, 2]
 *           ↑
 *          i=0, j=0
 *
 * Step 1: nums[0] = 0 ≠ 2, so nums[0] = 0, i++
 *         [0, 1, 2, 2, 3, 0, 4, 2]
 *              ↑
 *             i=1, j=1
 *
 * Step 2: nums[1] = 1 ≠ 2, so nums[1] = 1, i++
 *         [0, 1, 2, 2, 3, 0, 4, 2]
 *                 ↑
 *                i=2, j=2
 *
 * Step 3: nums[2] = 2 = 2, so skip (don't increment i)
 *         [0, 1, 2, 2, 3, 0, 4, 2]
 *                 ↑
 *                i=2, j=3
 *
 * Step 4: nums[3] = 2 = 2, so skip (don't increment i)
 *         [0, 1, 2, 2, 3, 0, 4, 2]
 *                 ↑
 *                i=2, j=4
 *
 * Step 5: nums[4] = 3 ≠ 2, so nums[2] = 3, i++
 *         [0, 1, 3, 2, 3, 0, 4, 2]
 *                    ↑
 *                   i=3, j=5
 *
 * Step 6: nums[5] = 0 ≠ 2, so nums[3] = 0, i++
 *         [0, 1, 3, 0, 3, 0, 4, 2]
 *                       ↑
 *                      i=4, j=6
 *
 * Step 7: nums[6] = 4 ≠ 2, so nums[4] = 4, i++
 *         [0, 1, 3, 0, 4, 0, 4, 2]
 *                          ↑
 *                         i=5, j=7
 *
 * Step 8: nums[7] = 2 = 2, so skip (don't increment i)
 *         [0, 1, 3, 0, 4, 0, 4, 2]
 *                          ↑
 *                         i=5, j=8
 *
 * Final: Return i = 5 (length of valid elements)
 *        First 5 elements: [0, 1, 3, 0, 4]
 *
 * ALTERNATIVE APPROACHES:
 * 1. Using filter(): nums.filter(x => x !== val) - O(n) time, O(n) space
 * 2. Using splice() in reverse: More complex, O(n²) in worst case
 * 3. Creating new array: O(n) space complexity
 *
 * WHY TWO-POINTER IS OPTIMAL:
 * - Minimal space usage (only 1 extra variable)
 * - Single pass through the array
 * - In-place modification saves memory
 * - Efficient for both sorted and unsorted arrays
 * - Meets LeetCode requirements perfectly
 */
//leetcode:-https://leetcode.com/problems/remove-element/description/