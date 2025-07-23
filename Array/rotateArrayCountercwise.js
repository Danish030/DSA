
let arr = [1, 2, 3, 4, 5];
let  d = 2

function rotateCounterCwise(arr, d) {
    let len = arr.length;
    d = d % len; // handle cases where d > len
    return arr.slice(d).concat(arr.slice(0, d));
}

console.log(rotateCounterCwise(arr,d));
