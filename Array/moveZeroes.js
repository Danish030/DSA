/*
 * MOVE ZEROES - TWO POINTER APPROACH
 *
 * Problem: Move all zeroes to the end while maintaining relative order of non-zero elements
 *
 * Algorithm: Two Pointer Technique (Slow-Fast Pointers)
 * - i (slow pointer): Points to the position where next non-zero element should be placed
 * - j (fast pointer): Scans through the array to find non-zero elements
 * - When non-zero element is found, swap it with element at position i and increment i
 * - This maintains relative order of non-zero elements and moves zeros to end
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space for pointers
 *
 * Key Concepts:
 * 1. In-place modification (no extra array needed)
 * 2. Two-pointer technique for array rearrangement
 * 3. Maintaining relative order of non-zero elements
 * 4. Optimal swapping strategy
 */

let num = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  // Handle edge case: empty array or single element
  if (nums.length <= 1) return nums;

  // Initialize slow pointer
  let i = 0; // Points to position where next non-zero element should be placed

  // Traverse array with fast pointer
  for (let j = 0; j < nums.length; j++) {
    // If current element is non-zero
    if (nums[j] !== 0) {
      // Swap current non-zero element with element at position i
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;

      // Move slow pointer forward (ready for next non-zero element)
      i++;
    }
    // If nums[j] === 0, just continue (don't increment i)
  }

  return nums; // Return modified array
}

// Test the function
console.log("Original array:", [0, 1, 0, 3, 12]);
console.log("After moving zeros:", moveZeroes(num));

/*
 * STEP-BY-STEP EXECUTION TRACE:
 *
 * Initial: [0, 1, 0, 3, 12]
 *           ↑
 *          i=0, j=0
 *
 * Step 1: nums[0] = 0, so skip (don't increment i)
 *         [0, 1, 0, 3, 12]
 *          ↑     ↑
 *         i=0   j=1
 *
 * Step 2: nums[1] = 1 ≠ 0, so swap(i=0, j=1) and i++
 *         [1, 0, 0, 3, 12]
 *             ↑     ↑
 *            i=1   j=2
 *
 * Step 3: nums[2] = 0, so skip (don't increment i)
 *         [1, 0, 0, 3, 12]
 *             ↑        ↑
 *            i=1      j=3
 *
 * Step 4: nums[3] = 3 ≠ 0, so swap(i=1, j=3) and i++
 *         [1, 3, 0, 0, 12]
 *                ↑        ↑
 *               i=2      j=4
 *
 * Step 5: nums[4] = 12 ≠ 0, so swap(i=2, j=4) and i++
 *         [1, 3, 12, 0, 0]
 *                   ↑
 *                  i=3, j=5 (end)
 *
 * Final: [1, 3, 12, 0, 0]
 *        All non-zeros moved to front, zeros moved to end
 *
 * ALTERNATIVE APPROACHES:
 * 1. Two-pass approach: Count zeros, then rebuild array - O(n) time, O(1) space
 * 2. Using extra space: Create new array - O(n) time, O(n) space
 * 3. Remove and append: Remove zeros and append at end - O(n²) time worst case
 *
 * WHY TWO-POINTER IS OPTIMAL:
 * - Single pass through the array
 * - In-place modification (no extra space)
 * - Maintains relative order of non-zero elements
 * - Minimal number of swaps
 * - Clear and intuitive logic
 */
