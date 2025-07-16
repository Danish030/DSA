/*
 * BEST TIME TO BUY AND SELL STOCK - TWO POINTER APPROACH
 *
 * Problem: Find the maximum profit from buying and selling a stock once
 *
 * Algorithm: Two Pointer Technique (Buy-Sell Pointers)
 * - i (buy pointer): Points to the potential buy day (lowest price so far)
 * - j (sell pointer): Points to the potential sell day (current day)
 * - Track maximum profit by comparing current profit with previous maximum
 * - Update buy pointer when a lower price is found
 *
 * Time Complexity: O(n) - single pass through the array
 * Space Complexity: O(1) - only using constant extra space for pointers and variables
 *
 * Key Concepts:
 * 1. Two-pointer technique for optimization problems
 * 2. Greedy approach: always buy at the lowest price seen so far
 * 3. Dynamic maximum tracking
 * 4. Single transaction constraint (buy once, sell once)
 */

let prices = [7, 2, 5, 3, 6, 4];

function maxProfit(prices) {
  // Handle edge cases
  if (prices.length < 2) return 0;

  // Initialize pointers
  let i = 0; // Buy pointer: points to the day with minimum price so far
  let j = 1; // Sell pointer: points to the current day (potential sell day)
  let maxP = 0; // Maximum profit found so far

  // Traverse through all possible sell days
  while (j < prices.length) {
    // If current price is higher than buy price, we can make profit
    if (prices[i] < prices[j]) {
      let profit = prices[j] - prices[i]; // Calculate current profit
      maxP = Math.max(maxP, profit); // Update maximum profit
    } else {
      // If current price is lower, update buy pointer to current day
      // This is because we want to buy at the lowest price possible
      i = j;
    }
    j++; // Move to next day
  }

  return maxP; // Return maximum profit achievable
}

// Test the function
console.log("Stock prices:", prices);
console.log("Maximum profit:", maxProfit(prices));

/*
 * STEP-BY-STEP EXECUTION TRACE:
 *
 * Stock prices: [7, 2, 5, 3, 6, 4]
 * Goal: Find maximum profit from one buy-sell transaction
 *
 * Initial: [7, 2, 5, 3, 6, 4]
 *           ↑  ↑
 *          i=0 j=1, maxP=0
 *
 * Step 1: prices[0]=7 > prices[1]=2, so update buy pointer
 *         [7, 2, 5, 3, 6, 4]
 *             ↑  ↑
 *            i=1 j=2, maxP=0
 *
 * Step 2: prices[1]=2 < prices[2]=5, so profit = 5-2 = 3
 *         maxP = max(0, 3) = 3
 *         [7, 2, 5, 3, 6, 4]
 *             ↑     ↑
 *            i=1   j=3, maxP=3
 *
 * Step 3: prices[1]=2 < prices[3]=3, so profit = 3-2 = 1
 *         maxP = max(3, 1) = 3
 *         [7, 2, 5, 3, 6, 4]
 *             ↑        ↑
 *            i=1      j=4, maxP=3
 *
 * Step 4: prices[1]=2 < prices[4]=6, so profit = 6-2 = 4
 *         maxP = max(3, 4) = 4
 *         [7, 2, 5, 3, 6, 4]
 *             ↑           ↑
 *            i=1         j=5, maxP=4
 *
 * Step 5: prices[1]=2 < prices[5]=4, so profit = 4-2 = 2
 *         maxP = max(4, 2) = 4
 *         [7, 2, 5, 3, 6, 4]
 *             ↑              ↑
 *            i=1            j=6, maxP=4
 *
 * Final: Return maxP = 4
 *        Best strategy: Buy on day 2 (price=2), sell on day 5 (price=6)
 *
 * ALTERNATIVE APPROACHES:
 * 1. Brute Force: Check all pairs - O(n²) time, O(1) space
 * 2. Single Pass with Min Price: Track minimum price seen so far - O(n) time, O(1) space
 * 3. Dynamic Programming: DP approach - O(n) time, O(n) space
 *
 * WHY TWO-POINTER IS OPTIMAL:
 * - Single pass through the array
 * - Constant space usage
 * - Intuitive buy-sell logic
 * - Handles edge cases naturally
 * - Easy to understand and implement
 */
