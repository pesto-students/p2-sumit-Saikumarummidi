
async function f() {
    
    let promise1 = new Promise(function (resolve, reject) {
        setTimeout(function() {
            resolve('Promise resolved')}
            ,1000);
    });

    let Promise2 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Promise resolved')}
        ,1000);
    });

    let promise3 = new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('Promise resolved')}
        ,1000);
    });

    let result1 = await promise1;
    let result2 = await Promise2;
    let result3 = await promise3;
    console.log(result1);
    console.log(result2);
    console.log(result3);
    console.log('hello');
}
f();

function* generatorFunc() {
    console.log('The first statement prints successfully');
    yield 10;
    console.log('The second statement prints successfully');
    yield 20;
    console.log('The third statement prints successfully');
    yield 30;
}

let generator = generatorFunc();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());