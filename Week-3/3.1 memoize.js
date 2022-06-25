function memoize(fn) {
    const cache = new Map();
   return function(...args) {
       const key = args.toString();
       console.log('fn called with' + key);
       console.log(cache);
   if  (cache.has(key)) {
       return cache.get(key);
   }
    cache.set(key, fn(...args)); 
    return cache.get(key);   
   };   
}

function Add(...args)
{
    let sum = 0;
    for(let i=0;i<args.length;i++)
    {
        sum = sum + args[i]
    }
    return sum;
}

function time(fn) {
    console.time();
    console.log(fn())
    console.timeEnd();
}
const AddM = memoize(Add);

time(() =>Add(100,100));
time(() =>Add(100));
time(() =>Add(100,200));
time(() =>Add(100,100));