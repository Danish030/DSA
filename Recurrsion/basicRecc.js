/**
 * 🚀 Recursive Fibonacci - Debugging Guide
 *
 * 📝 PROBLEM: Calculate nth Fibonacci number using recursion
 * Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55...
 * Formula: F(n) = F(n-1) + F(n-2), where F(0) = 0, F(1) = 1
 */

/**
 * 🐛 DEBUGGING TECHNIQUE 1: Console Logging
 * Add console.log statements to trace function calls
 */
function fiboWithLogs(n, depth = 0) {
  // Visual indentation to show recursion depth
  const indent = "  ".repeat(depth);

  console.log(`${indent}📞 Calling fibo(${n}) at depth ${depth}`);

  // Base case
  if (n < 2) {
    console.log(`${indent}🎯 Base case: fibo(${n}) = ${n}`);
    return n;
  }

  console.log(
    `${indent}🔄 Recursive case: fibo(${n}) = fibo(${n - 1}) + fibo(${n - 2})`
  );

  // Recursive calls
  const left = fiboWithLogs(n - 1, depth + 1);
  const right = fiboWithLogs(n - 2, depth + 2);

  const result = left + right;
  console.log(`${indent}✅ fibo(${n}) = ${left} + ${right} = ${result}`);

  return result;
}

/**
 * 🐛 DEBUGGING TECHNIQUE 2: Call Stack Visualization
 * Track the order of function calls and returns
 */
function fiboWithCallStack(n) {
  const callStack = [];

  function fiboHelper(num, path = []) {
    const currentPath = [...path, `fibo(${num})`];
    callStack.push(`CALL: ${currentPath.join(" → ")}`);

    if (num < 2) {
      callStack.push(`RETURN: fibo(${num}) = ${num}`);
      return num;
    }

    const left = fiboHelper(num - 1, currentPath);
    const right = fiboHelper(num - 2, currentPath);
    const result = left + right;

    callStack.push(`RETURN: fibo(${num}) = ${left} + ${right} = ${result}`);
    return result;
  }

  const result = fiboHelper(n);

  console.log("\n📚 Complete Call Stack:");
  callStack.forEach((call, index) => {
    console.log(`${index + 1}: ${call}`);
  });

  return result;
}

/**
 * 🐛 DEBUGGING TECHNIQUE 3: Step Counter
 * Count how many function calls are made (shows inefficiency)
 */
let stepCounter = 0;
function fiboWithSteps(n) {
  stepCounter++;
  console.log(`Step ${stepCounter}: Computing fibo(${n})`);

  if (n < 2) {
    console.log(`  → Base case reached: ${n}`);
    return n;
  }

  console.log(`  → Need to compute fibo(${n - 1}) and fibo(${n - 2})`);
  const result = fiboWithSteps(n - 1) + fiboWithSteps(n - 2);

  console.log(`  → fibo(${n}) calculated: ${result}`);
  return result;
}

/**
 * 🐛 DEBUGGING TECHNIQUE 4: Memoization with Debug Info
 * Shows how caching eliminates redundant calculations
 */
function fiboWithMemo(n, memo = {}, callCount = { count: 0 }) {
  callCount.count++;

  if (memo[n] !== undefined) {
    console.log(`💾 Cache HIT: fibo(${n}) = ${memo[n]} (saved computation!)`);
    return memo[n];
  }

  console.log(`🔍 Computing fibo(${n}) for the first time...`);

  if (n < 2) {
    memo[n] = n;
    console.log(`🎯 Base case: fibo(${n}) = ${n}`);
    return n;
  }

  const result =
    fiboWithMemo(n - 1, memo, callCount) + fiboWithMemo(n - 2, memo, callCount);
  memo[n] = result;

  console.log(`✅ Computed and cached: fibo(${n}) = ${result}`);
  return result;
}

/**
 * 🐛 DEBUGGING TECHNIQUE 5: Performance Comparison
 * Compare different approaches with timing
 */
function performanceTest(n) {
  console.log(`\n🏁 Performance Test for fibo(${n}):\n`);

  // Reset step counter
  stepCounter = 0;

  // Test 1: Original recursive (slow)
  console.time("⏱️  Recursive Time");
  const recursiveResult = fibo(n);
  console.timeEnd("⏱️  Recursive Time");
  console.log(
    `📊 Recursive Result: ${recursiveResult}, Steps: ${stepCounter}\n`
  );

  // Test 2: Memoized (fast)
  const callCount = { count: 0 };
  console.time("⏱️  Memoized Time");
  const memoResult = fiboWithMemo(n, {}, callCount);
  console.timeEnd("⏱️  Memoized Time");
  console.log(`📊 Memoized Result: ${memoResult}, Calls: ${callCount.count}\n`);

  // Test 3: Iterative (fastest)
  console.time("⏱️  Iterative Time");
  const iterativeResult = fiboIterative(n);
  console.timeEnd("⏱️  Iterative Time");
  console.log(`📊 Iterative Result: ${iterativeResult}\n`);
}

// Helper: Iterative Fibonacci for comparison
function fiboIterative(n) {
  if (n < 2) return n;
  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}

// Original function (your code)
function fibo(n) {
  if (n < 2) return n;
  return fibo(n - 1) + fibo(n - 2);
}

/**
 * 🎯 DEBUGGING DEMONSTRATIONS
 */
console.log("=".repeat(60));
console.log("🐛 FIBONACCI DEBUGGING MASTERCLASS");
console.log("=".repeat(60));

// Demo 1: Small number with detailed logging
console.log("\n1️⃣ TECHNIQUE 1: Console Logging (fibo(5))");
console.log("-".repeat(40));
fiboWithLogs(5);

// Demo 2: Call stack visualization
console.log("\n2️⃣ TECHNIQUE 2: Call Stack Visualization (fibo(4))");
console.log("-".repeat(40));
fiboWithCallStack(4);

// Demo 3: Step counting
console.log("\n3️⃣ TECHNIQUE 3: Step Counter (fibo(6))");
console.log("-".repeat(40));
stepCounter = 0; // Reset counter
const result = fiboWithSteps(6);
console.log(`\n🎯 Final Result: fibo(6) = ${result}`);
console.log(`📊 Total Steps: ${stepCounter}`);

// Demo 4: Memoization debugging
console.log("\n4️⃣ TECHNIQUE 4: Memoization Debug (fibo(7))");
console.log("-".repeat(40));
const memoResult = fiboWithMemo(7);
console.log(`\n🎯 Final Memoized Result: fibo(7) = ${memoResult}`);

// Demo 5: Performance comparison
console.log("\n5️⃣ TECHNIQUE 5: Performance Analysis");
console.log("-".repeat(40));
performanceTest(10);

// Your original call
console.log("\n📝 YOUR ORIGINAL CODE OUTPUT:");
console.log("-".repeat(40));
console.log(`fibo(7) = ${fibo(7)}`);

/**
 * 🛠️ VS CODE DEBUGGING GUIDE
 *
 * 1️⃣ SETTING BREAKPOINTS:
 * - Click on line number gutter (red dot appears)
 * - Or press F9 on the line you want to break
 * - Good places to set breakpoints:
 *   ✅ Line 1: function fibo(n) {
 *   ✅ Line 2: if (n < 2) return n;
 *   ✅ Line 3: return fibo(n - 1) + fibo(n - 2);
 *
 * 2️⃣ STARTING DEBUG SESSION:
 * - Press F5 or go to Run → Start Debugging
 * - Or click the play button with bug icon
 * - Choose "Node.js" when prompted
 *
 * 3️⃣ DEBUG CONTROLS:
 * - F10: Step Over (execute current line)
 * - F11: Step Into (enter function calls)
 * - Shift+F11: Step Out (exit current function)
 * - F5: Continue (run to next breakpoint)
 * - Shift+F5: Stop debugging
 *
 * 4️⃣ WATCH VARIABLES:
 * - In debug mode, hover over variables to see values
 * - Use "Variables" panel to see all local variables
 * - Add expressions to "Watch" panel to track values
 * - Call Stack panel shows function call hierarchy
 *
 * 5️⃣ DEBUG CONSOLE:
 * - Type expressions to evaluate in current context
 * - Example: type 'n' to see current value of n
 * - Type 'fibo(3)' to test function with different input
 */

/**
 * 🎯 DEBUGGING BEST PRACTICES:
 *
 * ✅ Start with small inputs (n=3 or n=4)
 * ✅ Use console.log to trace execution flow
 * ✅ Set breakpoints at key decision points
 * ✅ Watch variable values change over time
 * ✅ Use call stack to understand recursion depth
 * ✅ Compare iterative vs recursive approaches
 * ✅ Test edge cases (n=0, n=1, n=2)
 * ✅ Measure performance for larger inputs
 *
 * ❌ Don't test with large numbers initially (n>10)
 * ❌ Don't ignore the exponential time complexity
 * ❌ Don't forget to reset counters between tests
 * ❌ Don't set too many breakpoints at once
 */

/**
 * 🚨 RECURSION DEBUGGING TIPS:
 *
 * 1. TRACE THE CALLS: Draw the recursion tree on paper
 * 2. CHECK BASE CASES: Make sure they terminate correctly
 * 3. VERIFY RECURSIVE LOGIC: Ensure problem reduces correctly
 * 4. MONITOR STACK DEPTH: Watch for stack overflow
 * 5. USE MEMOIZATION: Cache results to avoid redundant calls
 *
 * 🌳 RECURSION TREE for fibo(4):
 *                    fibo(4)
 *                   /        \
 *               fibo(3)      fibo(2)
 *              /      \      /      \
 *         fibo(2)  fibo(1) fibo(1) fibo(0)
 *        /      \
 *   fibo(1)  fibo(0)
 *
 * Notice: fibo(2) is calculated 2 times, fibo(1) is calculated 3 times!
 * This is why the recursive approach is inefficient.
 */
