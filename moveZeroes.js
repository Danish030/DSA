let num = [0, 1, 0, 3, 12];

function moveZeroes(nums) {
  let i = -1;
  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== 0) {
      const temp = nums[j];
      nums[j] = nums[i];
      nums[i] = temp;
    } else {
      i--
    }
    return nums;
  }
} 

console.log(moveZeroes(num));
