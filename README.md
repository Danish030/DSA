# 🚀 Data Structures & Algorithms - LeetCode Solutions

This repository contains well-documented solutions to various LeetCode problems, implemented in JavaScript with comprehensive explanations and analysis.

## 📚 Problems Solved

### 1. **Remove Duplicates from Sorted Array** 
- **File**: `removeDuplicates.js`
- **LeetCode Problem**: #26
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (Slow-Fast Pointers)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 2. **Remove Element**
- **File**: `removeElements.js`
- **LeetCode Problem**: #27
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (Slow-Fast Pointers)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 3. **Reverse String**
- **File**: `reverseString.js`
- **LeetCode Problem**: #344
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (Left-Right Pointers)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 4. **Best Time to Buy and Sell Stock**
- **File**: `Array/besttimebuyandsellStocks.js`
- **LeetCode Problem**: #121
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (Buy-Sell Pointers)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 5. **Move Zeroes**
- **File**: `Array/moveZeroes.js`
- **LeetCode Problem**: #283
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (Slow-Fast Pointers)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 6. **Max Consecutive Ones**
- **File**: `Array/maxConsectutive1s.js`
- **LeetCode Problem**: #485
- **Difficulty**: Easy
- **Approach**: Single Pass with Counter Tracking
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 7. **Missing Number**
- **File**: `Array/missingNumber.js`
- **LeetCode Problem**: #268
- **Difficulty**: Easy
- **Approach**: Multiple Solutions (Counting Array, Mathematical, XOR)
- **Time Complexity**: O(n)
- **Space Complexity**: O(n) for counting, O(1) for optimized approaches

### 8. **Single Number**
- **File**: `Array/singleNumber.js`
- **LeetCode Problem**: #136
- **Difficulty**: Easy
- **Approach**: XOR Bit Manipulation (Optimal)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 9. **Second Largest Element**
- **File**: `Array/secondLargest.js`
- **Problem Type**: Array Traversal
- **Difficulty**: Easy
- **Approach**: Two-Variable Tracking (Single Pass)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 10. **Reverse Array**
- **File**: `Array/reverseArray.js`
- **Problem Type**: Array Manipulation
- **Difficulty**: Easy
- **Approach**: Two Pointer Technique (In-place Swapping)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 11. **Rotate Array**
- **File**: `Array/rotateArray.js`
- **LeetCode Problem**: #189
- **Difficulty**: Medium
- **Approach**: Three-Step Reversal Method (Optimal)
- **Time Complexity**: O(n)
- **Space Complexity**: O(1)

### 12. **Two Sum**
- **File**: `Array/2sum.js`
- **LeetCode Problem**: #1
- **Difficulty**: Easy
- **Approach**: Hash Map One-Pass (Optimal)
- **Time Complexity**: O(n)
- **Space Complexity**: O(n)

## 🧠 Key Concepts Covered

### Two Pointer Technique
Most solutions utilize the **Two Pointer Technique**, which is a fundamental algorithmic pattern:

- **Slow-Fast Pointers**: Used in array modification and rearrangement problems
- **Left-Right Pointers**: Used in symmetric operations like reversing and palindromes
- **Buy-Sell Pointers**: Used in optimization problems like stock trading
- **Convergent Pointers**: Start from ends and move toward center for in-place operations
- **In-place Operations**: Memory-efficient solutions without extra space

### Counter Tracking
Some solutions use **Counter Tracking** for sequence analysis:

- **Consecutive Element Counting**: Track sequences of similar elements
- **Maximum Value Tracking**: Maintain running maximum during iteration
- **State Reset Logic**: Reset counters at sequence boundaries

### Mathematical Approaches
Advanced solutions leverage **Mathematical Properties**:

- **Sum Formulas**: Use arithmetic series formulas for optimization
- **Expected vs Actual**: Compare theoretical and actual results
- **Range Analysis**: Exploit known ranges for efficient solutions

### Bit Manipulation
Elegant solutions using **Bit Operations**:

- **XOR Properties**: Leverage a ⊕ a = 0 and a ⊕ 0 = a for finding unique elements
- **Self-Cancellation**: Use XOR's property where pairs cancel out perfectly
- **Bitwise Optimization**: Reduce space complexity using bit tricks
- **Toggle Operations**: Apply XOR for efficient element detection

### Array Traversal Optimization
Efficient single-pass solutions using **Smart Tracking**:

- **Multi-Variable Tracking**: Maintain multiple state variables during traversal
- **Edge Case Handling**: Proper initialization and boundary condition management
- **Duplicate Awareness**: Handle repeated elements correctly
- **Single-Pass Efficiency**: Solve problems in one iteration when possible

### Hash Map Optimization
Powerful technique for **O(1) Lookup Operations**:

- **Complement Pattern**: Store what you've seen, look for what you need
- **Index Mapping**: Map values to their positions for quick retrieval
- **One-Pass vs Two-Pass**: Trade-offs between clarity and efficiency
- **Space-Time Tradeoff**: Use O(n) space to achieve O(1) lookup time

- **Slow-Fast Pointers**: Used in array modification and rearrangement problems
- **Left-Right Pointers**: Used in symmetric operations like reversing
- **Buy-Sell Pointers**: Used in optimization problems like stock trading
- **In-place Operations**: Memory-efficient solutions without extra space

### Common Patterns
1. **Array Modification**: Removing elements while maintaining order
2. **String Manipulation**: Character swapping and reversing
3. **Duplicate Handling**: Efficient removal from sorted arrays
4. **Array Rearrangement**: Moving elements to specific positions
5. **Optimization Problems**: Finding maximum profit with constraints
6. **Sequence Analysis**: Finding patterns and consecutive elements
7. **Missing Element Detection**: Using mathematical or bit manipulation approaches
8. **Unique Element Finding**: Leveraging XOR properties for single occurrence detection
9. **Extremum Finding**: Efficiently finding maximum, minimum, or nth largest elements
10. **Symmetric Operations**: In-place reversal and palindrome-related problems
11. **Pair Finding**: Using hash maps to find elements that satisfy sum conditions

## 🔧 How to Run

Each file can be executed independently:

```bash
# Run individual solutions
node Array/removeDuplicates.js
node Array/removeElements.js
node Array/reverseString.js
node Array/besttimebuyandsellStocks.js
node Array/moveZeroes.js
node Array/maxConsectutive1s.js
node Array/missingNumber.js
node Array/singleNumber.js
node Array/secondLargest.js
node Array/reverseArray.js
node Array/rotateArray.js
node Array/2sum.js
```

## 📖 Documentation Structure

Each solution file contains:

### 1. **Problem Description**
- Clear statement of the problem
- Input/output specifications
- Constraints and requirements

### 2. **Algorithm Explanation**
- Step-by-step approach
- Key concepts and techniques used
- Why this approach is optimal

### 3. **Complexity Analysis**
- Time complexity with explanation
- Space complexity breakdown
- Big O notation analysis

### 4. **Implementation**
- Clean, readable code
- Detailed inline comments
- Variable naming conventions

### 5. **Execution Trace**
- Step-by-step walkthrough
- Visual representation of pointer movements
- Example input/output transformations

### 6. **Alternative Approaches**
- Other possible solutions
- Trade-offs between different methods
- Why the chosen approach is optimal

## 🎯 Learning Outcomes

After studying these solutions, you will understand:

- **Two Pointer Technique**: Master this fundamental algorithmic pattern including convergent pointers
- **Hash Map Mastery**: Use hash maps for O(1) lookups and complement-based problem solving
- **Counter Tracking**: Efficiently analyze sequences and patterns
- **Mathematical Optimization**: Use formulas and properties for efficient solutions
- **Bit Manipulation Mastery**: Apply XOR and other bitwise operations for elegant solutions
- **XOR Properties**: Understand self-cancellation and unique element detection
- **Array Traversal Optimization**: Single-pass solutions with smart variable tracking
- **In-Place Algorithms**: Modify data structures without using extra space
- **Symmetric Operations**: Handle reversal, rotation, and palindrome problems
- **Space-Time Tradeoffs**: When to use extra space for better time complexity
- **Complement Pattern**: Think backwards - find what you need instead of what you have
- **Edge Case Handling**: Proper management of boundary conditions and special cases
- **Swapping Techniques**: Multiple methods for element exchange (temp variable, destructuring, XOR)
- **Time/Space Complexity**: Analyze and optimize algorithm performance
- **Multiple Solution Approaches**: Consider different strategies for the same problem
- **Code Documentation**: Write clear, professional code documentation
- **Problem-Solving Approach**: Systematic way to tackle algorithmic challenges

## 📝 Code Quality Standards

All solutions follow these standards:
- **Comprehensive Comments**: Every solution is thoroughly documented
- **Performance Optimization**: O(1) space complexity for all solutions
- **Clean Code**: Readable variable names and clear logic flow
- **Test Cases**: Each solution includes test examples
- **Error Handling**: Edge cases are considered and handled

## 🤖 AI-Generated Documentation

**Generated by**: GitHub Copilot  
**Date**: July 15, 2025  
**Documentation Level**: Comprehensive with step-by-step analysis

The detailed comments and explanations in each file were generated using AI assistance to provide:
- In-depth algorithmic analysis
- Visual execution traces
- Alternative approach comparisons
- Best practice recommendations

---

**Note**: This repository serves as both a reference for LeetCode solutions and a learning resource for understanding fundamental algorithmic techniques. Each solution prioritizes clarity and educational value over brevity.
