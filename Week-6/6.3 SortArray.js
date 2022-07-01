function order(array, n) {
    let result = []
    
    let frequency = [0,0,0]
    for(let i = 0; i < n; i++) {
        let temp = array[i]
        frequency[temp]++;
        }
    for(let i =0; i < 3; i++) {
        while(frequency[i] > 0) {
            frequency[i]--;
            result.push(i);
        }
    }  
    return result; 
}
let arr1 = [0, 2, 1, 2, 0]
let arr2 = [0, 1, 0]
console.log(order(arr1, 5));
console.log(order(arr2, 3));