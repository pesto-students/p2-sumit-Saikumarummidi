function getNumber()
{
    let returnValue = Math.floor((Math.random() * 100) + 1);
    return returnValue;
}

let randomNumber = getNumber();

console.log(randomNumber);

let promiseValue = new Promise(function(resolve, reject) {
    if(randomNumber%5 === 0) 
    {
        reject("Rejected");
    }
    else {
        resolve("Resolved");
    }
});

// executes when promise is resolved successfully
promiseValue.then(
    function successValue(result) {
        console.log(result);
    },
)
// executes if there is an error
.catch(
    function errorValue(result) {
        console.log(result);
    }
)
.finally
(
    result =>  console.log("Promise completed" + result)
);