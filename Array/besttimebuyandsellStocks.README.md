# Best Time to Buy and Sell Stock

## 🎯 Problem Description

**LeetCode Problem**: #121  
**Difficulty**: Easy  
**Category**: Array, Dynamic Programming, Greedy  

You are given an array `prices` where `prices[i]` is the price of a given stock on the `i`th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return `0`.

### Input/Output
- **Input**: `prices = [7,2,5,3,6,4]`
- **Output**: `4`
- **Explanation**: Buy on day 2 (price = 2) and sell on day 5 (price = 6), profit = 6-2 = 4

### Constraints
- `1 <= prices.length <= 10^5`
- `0 <= prices[i] <= 10^4`

## 🧠 Solution Approach

### Algorithm: Two Pointer Technique (Buy-Sell Pointers)

```
1. Initialize buy pointer (i) to day 0 and sell pointer (j) to day 1
2. Initialize maxProfit to 0
3. For each day j:
   a. If prices[i] < prices[j], calculate profit and update maxProfit
   b. If prices[i] >= prices[j], update buy pointer to current day
   c. Move to next day
4. Return maxProfit
```

### Why This Approach Works
- **Single Pass**: Only one traversal through the array
- **Greedy Strategy**: Always buy at the lowest price seen so far
- **Future Selling**: Can only sell after buying (j > i constraint)
- **Optimal**: Tracks maximum profit dynamically

## 📊 Complexity Analysis

- **Time Complexity**: O(n) - Single pass through the array
- **Space Complexity**: O(1) - Only using constant extra space for pointers and variables

## 🔍 Step-by-Step Execution

**Input**: `[7, 2, 5, 3, 6, 4]`

```
Goal: Find maximum profit from one buy-sell transaction

Initial: [7, 2, 5, 3, 6, 4]
          ↑  ↑
         i=0 j=1, maxP=0

Step 1: prices[0]=7 > prices[1]=2, so update buy pointer
        [7, 2, 5, 3, 6, 4]
             ↑  ↑
            i=1 j=2, maxP=0

Step 2: prices[1]=2 < prices[2]=5, so profit = 5-2 = 3
        maxP = max(0, 3) = 3
        [7, 2, 5, 3, 6, 4]
             ↑     ↑
            i=1   j=3, maxP=3

Step 3: prices[1]=2 < prices[3]=3, so profit = 3-2 = 1
        maxP = max(3, 1) = 3
        [7, 2, 5, 3, 6, 4]
             ↑        ↑
            i=1      j=4, maxP=3

Step 4: prices[1]=2 < prices[4]=6, so profit = 6-2 = 4
        maxP = max(3, 4) = 4
        [7, 2, 5, 3, 6, 4]
             ↑           ↑
            i=1         j=5, maxP=4

Step 5: prices[1]=2 < prices[5]=4, so profit = 4-2 = 2
        maxP = max(4, 2) = 4
        [7, 2, 5, 3, 6, 4]
             ↑              ↑
            i=1            j=6, maxP=4

Final: Return maxP = 4
       Best strategy: Buy on day 2 (price=2), sell on day 5 (price=6)
```

## 🔄 Alternative Approaches

### 1. Brute Force (Check All Pairs)
```javascript
function maxProfit(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            maxProfit = Math.max(maxProfit, prices[j] - prices[i]);
        }
    }
    return maxProfit;
}
// Time: O(n²), Space: O(1)
```

### 2. Single Pass with Min Price Tracking
```javascript
function maxProfit(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minPrice);
        }
    }
    return maxProfit;
}
// Time: O(n), Space: O(1)
```

### 3. Dynamic Programming Approach
```javascript
function maxProfit(prices) {
    if (prices.length <= 1) return 0;
    
    let buy = -prices[0];  // Max profit after buying
    let sell = 0;          // Max profit after selling
    
    for (let i = 1; i < prices.length; i++) {
        buy = Math.max(buy, -prices[i]);
        sell = Math.max(sell, buy + prices[i]);
    }
    return sell;
}
// Time: O(n), Space: O(1)
```

## ✅ Why Two Pointer is Optimal

1. **Intuitive Logic**: Mimics real trading behavior
2. **Clear Separation**: Buy and sell days are clearly distinguished
3. **Efficient**: Single pass with constant space
4. **Greedy Strategy**: Always chooses the best option at each step
5. **Easy to Understand**: Visual representation of buy/sell decisions

## 🧪 Test Cases

```javascript
// Test Case 1
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price=1), sell on day 5 (price=6)

// Test Case 2
Input: [7,6,4,3,1]
Output: 0
Explanation: Prices only decrease, no profit possible

// Test Case 3
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price=1), sell on day 5 (price=5)

// Test Case 4
Input: [2,4,1]
Output: 2
Explanation: Buy on day 1 (price=2), sell on day 2 (price=4)
```

## 🔧 Implementation Variations

### Version 1: Two Explicit Pointers
```javascript
function maxProfit(prices) {
    let i = 0, j = 1, maxP = 0;
    while (j < prices.length) {
        if (prices[i] < prices[j]) {
            maxP = Math.max(maxP, prices[j] - prices[i]);
        } else {
            i = j;
        }
        j++;
    }
    return maxP;
}
```

### Version 2: Min Price Tracking
```javascript
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else {
            maxProfit = Math.max(maxProfit, price - minPrice);
        }
    }
    return maxProfit;
}
```

## 📚 Key Learning Points

1. **Greedy Algorithm**: Making locally optimal choices
2. **Single Transaction**: Buy once, sell once constraint
3. **Future Constraint**: Can only sell after buying
4. **Dynamic Tracking**: Continuously update maximum profit
5. **Edge Case Handling**: Empty arrays, single elements, decreasing prices

## 🎯 Real-World Applications

- **Stock Trading**: Actual financial market analysis
- **Resource Allocation**: Buy low, sell high principle
- **Optimization Problems**: Finding maximum difference in sequences
- **Time Series Analysis**: Peak and valley detection
- **Supply Chain**: Inventory purchase and sale timing

---

**Generated by**: GitHub Copilot  
**File**: `Array/besttimebuyandsellStocks.js`  
**Date**: July 16, 2025
