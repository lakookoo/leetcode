function fib(n, memo=[undefined, 1, 1]){
    if(memo[n] !== undefined) return memo[n];
    var res = fib(n - 1, memo) + fib(n - 2, memo);
    memo[n] = res;
    return res;
}
// O(n)

function fib2(n){
    if(n <= 2) return 1;
    var fibNums = [0, 1, 1];
    for(var i = 3; i <= n; i++){
        fibNums[i] = fibNums[i - 1] + fibNums[i-2];
    }
    return fibNums[n];
}
