
function maximumProfit(price, n) {
    let  buy = price[0];
    let maxProfit = 0;
    for(let i = 1; i < n; i++) {
        if(buy > price[i]) {
            buy = price[i]
        }
        else if(price[i] - buy > maxProfit) {
            maxProfit = price[i] - buy;
        }
       
    }
    return maxProfit;
}
let price = [7, 1, 5, 3, 6, 4]
let price2 = [7, 6, 4, 3, 1]
let n = price.length;
//let n2 = price2.length


console.log(maximumProfit(price, n));
console.log(maximumProfit(price2, n));