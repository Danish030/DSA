/**
 * 🚀 Array Left Rotation (Counterclockwise)
 *
 * 📝 PROBLEM DESCRIPTION:
 * Given an array of integers and a number d, rotate the array to the left (counterclockwise)
 * by d positions. Left rotation means elements move towards the beginning of the array.
 *
 * 📊 CONSTRAINTS:
 * - 1 <= arr.length <= 10^5
 * - 0 <= d <= 10^9
 * - Array elements can be any integers
 * - d can be larger than array length
 *
 * 🎯 EXAMPLES:
 * Input: arr = [1,2,3,4,5], d = 2
 * Output: [3,4,5,1,2]
 * Explanation: After 2 left rotations:
 * - 1st rotation: [2,3,4,5,1]
 * - 2nd rotation: [3,4,5,1,2]
 *
 * Input: arr = [1,2,3,4,5,6], d = 3
 * Output: [4,5,6,1,2,3]
 *
 * Input: arr = [1,2,3], d = 7
 * Output: [2,3,1]
 * Explanation: d=7 is equivalent to d=1 (7%3=1) for array of length 3
 */

/**
 * 🧠 ALGORITHM EXPLANATION:
 *
 * APPROACH: Array Slicing and Concatenation
 *
 * KEY CONCEPT:
 * Left rotation by d positions means:
 * - First d elements move to the end
 * - Remaining elements move to the beginning
 * - This is equivalent to: [d...n-1] + [0...d-1]
 *
 * VISUAL REPRESENTATION:
 * Original: [1, 2, 3, 4, 5] with d=2
 *
 * Split at position d=2:
 * - First part: [1, 2] (elements 0 to d-1)
 * - Second part: [3, 4, 5] (elements d to n-1)
 *
 * Concatenate: Second + First = [3, 4, 5] + [1, 2] = [3, 4, 5, 1, 2]
 *
 * ALGORITHM STEPS:
 * 1. Handle d > array.length using modulo operation
 * 2. Split array at position d: arr.slice(d) and arr.slice(0, d)
 * 3. Concatenate: second part + first part
 * 4. Return the rotated array
 *
 * ⏱️ TIME COMPLEXITY: O(n) - Array slicing and concatenation
 * 💾 SPACE COMPLEXITY: O(n) - Creates new array (not in-place)
 *
 * 🎨 OPTIMIZATION: For in-place rotation, reversal method would be O(1) space
 */

// Test case - demonstrates left rotation
let arr = [1, 2, 3, 4, 5];
let d = 2;

/**
 * 🔧 MAIN FUNCTION: Rotate Array Left by d positions
 * @param {number[]} arr - Array to rotate
 * @param {number} d - Number of positions to rotate left
 * @returns {number[]} - New rotated array
 */
function rotateCounterCwise(arr, d) {
  let len = arr.length;

  // Handle cases where d > len (d=7 same as d=2 for array of length 5)
  d = d % len;

  // If d is 0, no rotation needed
  if (d === 0) return [...arr];

  // Split array at position d and concatenate in reverse order
  // arr.slice(d): elements from index d to end
  // arr.slice(0, d): elements from start to index d-1
  return arr.slice(d).concat(arr.slice(0, d));
}

/**
 * 🔍 EXECUTION TRACE:
 * Input: arr = [1, 2, 3, 4, 5], d = 2
 *
 * Step 1: len = 5, d = 2 % 5 = 2
 *
 * Step 2: Split array at position d=2
 *   - arr.slice(2) = [3, 4, 5] (elements from index 2 to end)
 *   - arr.slice(0, 2) = [1, 2] (elements from start to index 1)
 *
 * Step 3: Concatenate
 *   - [3, 4, 5].concat([1, 2]) = [3, 4, 5, 1, 2]
 *
 * Result: [3, 4, 5, 1, 2] ✅
 *
 * Verification:
 * - Original positions: 1(0), 2(1), 3(2), 4(3), 5(4)
 * - After 2 left rotations: 3(0), 4(1), 5(2), 1(3), 2(4)
 */

// Execute and display result
console.log("Original array:", arr);
console.log("Left rotate by", d, "positions:", rotateCounterCwise(arr, d));

/**
 * 🔄 ALTERNATIVE APPROACHES:
 */

/**
 * APPROACH 1: Three-Step Reversal (In-Place)
 * More space-efficient approach using array reversal
 * Time: O(n), Space: O(1)
 */
function rotateLeftReversal(arr, d) {
  const len = arr.length;
  d = d % len;

  // Helper function to reverse array section
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  // Step 1: Reverse first d elements
  reverse(0, d - 1);

  // Step 2: Reverse remaining elements
  reverse(d, len - 1);

  // Step 3: Reverse entire array
  reverse(0, len - 1);

  return arr;
}

/**
 * APPROACH 2: Using Temporary Array
 * Create new array and place elements at correct positions
 * Time: O(n), Space: O(n)
 */
function rotateLeftTemp(arr, d) {
  const len = arr.length;
  d = d % len;
  const temp = new Array(len);

  // Place each element at its new position
  for (let i = 0; i < len; i++) {
    temp[i] = arr[(i + d) % len];
  }

  return temp;
}

/**
 * APPROACH 3: Brute Force (One by One)
 * Rotate one position d times
 * Time: O(n*d), Space: O(1)
 */
function rotateLeftBruteForce(arr, d) {
  const len = arr.length;
  d = d % len;

  // Make a copy to avoid modifying original
  const result = [...arr];

  // Rotate one position d times
  for (let i = 0; i < d; i++) {
    const first = result.shift(); // Remove first element
    result.push(first); // Add to end
  }

  return result;
}

/**
 * APPROACH 4: Cyclic Replacements (Advanced)
 * Move elements to their final positions in cycles
 * Time: O(n), Space: O(1) - modifies original
 */
function rotateLeftCyclic(arr, d) {
  const len = arr.length;
  d = d % len;

  let count = 0;
  for (let start = 0; count < len; start++) {
    let current = start;
    let prev = arr[start];

    do {
      const next = (current + len - d) % len;
      [arr[next], prev] = [prev, arr[next]];
      current = next;
      count++;
    } while (start !== current);
  }

  return arr;
}

/**
 * 🧪 COMPREHENSIVE TEST CASES:
 */
console.log("\n--- Testing All Approaches ---");

const testCases = [
  { arr: [1, 2, 3, 4, 5], d: 2 }, // Expected: [3,4,5,1,2]
  { arr: [1, 2, 3, 4, 5, 6], d: 3 }, // Expected: [4,5,6,1,2,3]
  { arr: [1, 2, 3], d: 7 }, // d > length, Expected: [2,3,1]
  { arr: [1, 2], d: 1 }, // Expected: [2,1]
  { arr: [1], d: 4 }, // Single element, Expected: [1]
  { arr: [1, 2, 3, 4], d: 0 }, // No rotation, Expected: [1,2,3,4]
  { arr: [-1, -2, -3, -4], d: 2 }, // Negative numbers, Expected: [-3,-4,-1,-2]
];

testCases.forEach((testCase, index) => {
  console.log(
    `\nTest Case ${index + 1}: arr=[${testCase.arr.join(",")}], d=${testCase.d}`
  );

  console.log(
    `Slice & Concat:  [${rotateCounterCwise([...testCase.arr], testCase.d).join(
      ","
    )}]`
  );
  console.log(
    `Reversal:        [${rotateLeftReversal([...testCase.arr], testCase.d).join(
      ","
    )}]`
  );
  console.log(
    `Temp Array:      [${rotateLeftTemp([...testCase.arr], testCase.d).join(
      ","
    )}]`
  );
  console.log(
    `Brute Force:     [${rotateLeftBruteForce(
      [...testCase.arr],
      testCase.d
    ).join(",")}]`
  );
  console.log(
    `Cyclic:          [${rotateLeftCyclic([...testCase.arr], testCase.d).join(
      ","
    )}]`
  );
});

/**
 * 📊 APPROACH COMPARISON:
 *
 * | Approach          | Time     | Space | In-Place | Ease of Understanding |
 * |-------------------|----------|-------|----------|-----------------------|
 * | Slice & Concat    | O(n)     | O(n)  | ❌       | ⭐⭐⭐⭐⭐            |
 * | Three Reversals   | O(n)     | O(1)  | ✅       | ⭐⭐⭐                |
 * | Temp Array        | O(n)     | O(n)  | ❌       | ⭐⭐⭐⭐              |
 * | Brute Force       | O(n*d)   | O(1)  | ❌       | ⭐⭐⭐⭐⭐            |
 * | Cyclic Replace    | O(n)     | O(1)  | ✅       | ⭐⭐                  |
 *
 * 🏆 YOUR APPROACH (Slice & Concat): Perfect balance of simplicity and efficiency!
 */

/**
 * 💡 LEFT vs RIGHT ROTATION COMPARISON:
 *
 * LEFT ROTATION (Your implementation):
 * [1,2,3,4,5] rotate left by 2 → [3,4,5,1,2]
 * Formula: arr.slice(d).concat(arr.slice(0, d))
 *
 * RIGHT ROTATION:
 * [1,2,3,4,5] rotate right by 2 → [4,5,1,2,3]
 * Formula: arr.slice(-d).concat(arr.slice(0, -d))
 *
 * RELATIONSHIP:
 * Left rotation by d = Right rotation by (n-d)
 * Right rotation by d = Left rotation by (n-d)
 */

/**
 * 🎓 KEY INSIGHTS & INTERVIEW TIPS:
 *
 * 1. **Modulo Operation**: Always use d % length to handle large d values
 * 2. **Array Slicing**: Understand slice(start, end) behavior
 * 3. **Space Trade-offs**: Simple approach vs in-place optimization
 * 4. **Edge Cases**: d=0, d>length, single element, empty array
 * 5. **Direction Clarity**: Be clear about left vs right rotation
 *
 * 🔗 PRACTICAL APPLICATIONS:
 * - Circular buffers in data structures
 * - Image rotation and manipulation
 * - Cryptographic shift operations
 * - Game development (rotating game boards)
 * - String matching algorithms
 */

/**
 * ⚠️ COMMON MISTAKES TO AVOID:
 *
 * 1. **Direction Confusion**: Left rotation moves elements towards index 0
 * 2. **Modulo Oversight**: Not handling d > array.length cases
 * 3. **Slice Parameters**: slice(d) vs slice(0, d) - understand the difference
 * 4. **Zero Rotation**: Handle d=0 case properly
 * 5. **Original Array**: Decide if you want to modify original or create new one
 */

/**
 * 🏅 CONGRATULATIONS!
 *
 * Your implementation using slice() and concat() is excellent because:
 * ✅ **Clean and Readable**: Easy to understand the logic
 * ✅ **Efficient**: O(n) time complexity
 * ✅ **Handles Edge Cases**: Properly uses modulo for large d
 * ✅ **Functional Style**: Doesn't modify original array
 * ✅ **Interview Friendly**: Can be written quickly and explained clearly
 *
 * This approach demonstrates good understanding of JavaScript array methods
 * and is perfect for most practical applications!
 */
