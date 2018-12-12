'use strict';
const memo = new Map();
// 答えをあらかじめ定義してある0番目、1番目は格納
memo.set(0,0);
memo.set(1,1);
function fib(n){
    if(memo.has(n)){
        // もし連想配列がnキーを持っていればその値をそのまま関数の値として返す
        // そうでない場合はm再帰関数を計算して値を求め、それを連想配列に格納した後に返すと言う実装
        return memo.get(n);
    }
    const value = fib(n -1) + fib(n - 2);
    memo.set(n,value);
    return value;
}
const length = 40;
for (let i = 0; i <= length; i++){
    console.log(fib(i));
}

// function fib(n){
//     if(n === 0){
//         return 0;
//     }else if(n === 1){
//         return 1;
//     }
//     return fib(n - 1) + fib(n - 2);
// }
// const length = 40;
// for(let i = 0;i <= length;i++){
//     console.log(fib(i));
// }
