/*
 * REMOVE DUPLICATES FROM SORTED ARRAY - TWO POINTER APPROACH
 *
 * Problem: Remove duplicates from a sorted array in-place and return the length of unique elements
 *
 * Algorithm: Two Pointer Technique (Slow-Fast Pointers)
 * - i (slow pointer): Points to the position where next unique element should be placed
 * - j (fast pointer): Scans through the array to find unique elements
 * - When unique element is found, place it at position i+1 and increment i
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space for pointers
 *
 * Key Concepts:
 * 1. In-place modification (no extra array needed)
 * 2. Two-pointer technique for efficient traversal
 * 3. Works only on sorted arrays
 * 4. Returns length of unique elements, not the modified array
 */

let nums = [0, 0, 1, 1, 2, 4, 5];

var removeDuplicates = function (nums) {
  // Handle edge case: empty array
  if (nums.length === 0) return 0;

  // Initialize two pointers
  let i = 0; // Slow pointer: points to last unique element position
  let j = 1; // Fast pointer: scans for next unique element

  // Traverse the array with fast pointer
  while (j < nums.length) {
    // If current element is different from previous unique element
    if (nums[i] !== nums[j]) {
      i++; // Move slow pointer to next position
      nums[i] = nums[j]; // Place unique element at new position
    }
    j++; // Always move fast pointer forward
  }

  return i + 1; // Return length of unique elements (i is 0-indexed)
};

// Test the function
console.log("Original array:", [0, 0, 1, 1, 2, 4, 5]);
console.log("Length of unique elements:", removeDuplicates(nums));
console.log(
  "Modified array (first",
  removeDuplicates([0, 0, 1, 1, 2, 4, 5]),
  "elements):",
  nums.slice(0, removeDuplicates([0, 0, 1, 1, 2, 4, 5]))
);

/*
 * STEP-BY-STEP EXECUTION TRACE:
 *
 * Initial: [0, 0, 1, 1, 2, 4, 5]
 *           ↑  ↑
 *          i=0 j=1
 *
 * Step 1: nums[0] === nums[1] (0 === 0), so just move j
 *         [0, 0, 1, 1, 2, 4, 5]
 *          ↑     ↑
 *         i=0   j=2
 *
 * Step 2: nums[0] !== nums[2] (0 !== 1), so i++, nums[i] = nums[j]
 *         [0, 1, 1, 1, 2, 4, 5]
 *             ↑     ↑
 *            i=1   j=3
 *
 * Step 3: nums[1] === nums[3] (1 === 1), so just move j
 *         [0, 1, 1, 1, 2, 4, 5]
 *             ↑        ↑
 *            i=1      j=4
 *
 * Step 4: nums[1] !== nums[4] (1 !== 2), so i++, nums[i] = nums[j]
 *         [0, 1, 2, 1, 2, 4, 5]
 *                ↑        ↑
 *               i=2      j=5
 *
 * Step 5: nums[2] !== nums[5] (2 !== 4), so i++, nums[i] = nums[j]
 *         [0, 1, 2, 4, 2, 4, 5]
 *                   ↑        ↑
 *                  i=3      j=6
 *
 * Step 6: nums[3] !== nums[6] (4 !== 5), so i++, nums[i] = nums[j]
 *         [0, 1, 2, 4, 5, 4, 5]
 *                      ↑        ↑
 *                     i=4      j=7
 *
 * Final: Return i+1 = 5 (length of unique elements)
 *        First 5 elements: [0, 1, 2, 4, 5]
 *
 * ALTERNATIVE APPROACHES:
 * 1. Using Set: new Set(nums) - O(n) time, O(n) space
 * 2. Using filter with indexOf: nums.filter((v,i) => nums.indexOf(v) === i) - O(n²) time
 * 3. Using Map for counting: O(n) time, O(n) space
 *
 * WHY TWO-POINTER IS OPTIMAL:
 * - Minimal space usage (only 2 variables)
 * - Single pass through the array
 * - In-place modification saves memory
 * - Works efficiently on sorted arrays
 * - Meets LeetCode requirements perfectly
 */

//leetcode-https://leetcode.com/problems/remove-duplicates-from-sorted-array/
