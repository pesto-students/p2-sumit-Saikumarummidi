function fib(n)
{

    let array = [0, 1]
    let first = 0
    let second = 1
    let i = 0
    for(let value of array[Symbol.iterator]())
    {
        if(i > 1 && i <= n)
        {
            console.log(first + second);
            let temp = second;
            array.push(second);
            second = first + second;
            first = temp;
        }
        else if( i == 0)
        {
            first = value
        }
        else if(i == 1)
        {
            second = value
        }
        if(i > n) {break;}
        i++;

    }
}

for (const val of fib(8));
console.log
