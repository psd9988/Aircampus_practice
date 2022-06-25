// Print ‘n’ numbers of Fibonacci series using recursion.


let a = 0;
let b = 1;
let c = 1;
let count = 1;
function fibo(n){
    if(count <= n){
        console.log(c);
        c = a + b;
        a = b;
        b = c;
        count = count + 1;
        return fibo(n);
    }
}

fibo(10);