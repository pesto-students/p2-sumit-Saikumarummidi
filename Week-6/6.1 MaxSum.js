function maxSubArraySum (array, n) {
    let maxValue = Number.MIN_VALUE;
    for(let i = 1; i <= n; i++) { // no of elements
        for(let j = 0; j < n; j++) { // starting with index j
            sum = 0;
            for(let k = j; k < j+i; k++) { //actual sum
                sum = sum + array[k]
            }
            //maxValue = Math.max(maxValue, sum)
            if(maxValue < sum)
            {
                maxValue = sum;
            }
        }
    }
    return maxValue;
}

let maxValue = maxSubArraySum([1, 2, 3, 4, -5], 5)
console.log(maxValue)

maxValue = maxSubArraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4], 9)
console.log(maxValue)
