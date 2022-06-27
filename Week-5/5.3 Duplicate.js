const array1 = [1, 5, -1, 4]
const array2 = [5, 2, 1, 6, 1]
function hasDuplicate(arr) {
   
    for(let i = 0; i < arr.length; i++)
    {
        let temp = arr[i];
        for(let j = i +1; j < arr.length; j++) {
            if(temp == arr[j]){
                return true;
            }
        }
    }
    return false;
    // const hasDuplicate=arr=>newSet(arr).size!==arr.length
}
let result1 = hasDuplicate(array1);
let result2 = hasDuplicate(array2)
console.log(result1);
console.log(result2);




// function sum(a, b) {
//    return a + b;
// }
// sum(5,6);