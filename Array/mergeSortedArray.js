 let nums1 = [1, 2, 3, 0, 0, 0];
  let m = 3;
  let nums2 = [2, 5, 6];
  let n = 3;
  
 
 function merge (nums1, m, nums2, n) { 
    let l = m - 1;
    let r = n - 1;
    let i = m + n - 1;
    while (r >= 0) {
        if (l >= 0 && nums1[l] > nums2[r]) {
            nums1[i--] = nums1[l--];
        } else {
            nums1[i--] = nums2[r--]; 
        }
    }
};

console.log(merge(nums1, m, nums2, n));
