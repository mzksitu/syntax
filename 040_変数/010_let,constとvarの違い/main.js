// let a = 0;
// let a = 0;

// var b = 0;
// var b = 1;

// let c = 0; // 再代入可能
// c = 1;
// 
// const d = 0; // 再代入不可能
// d = 1;

{
  let e = 0; // ブロックスコープは不可
  var f = 0;
}

console.log(h); // varは非推奨なので使わない
let g = 0;
var h = 0;

// 一度宣言した値を変更したくない場合は「const」
//変更したい場合は「let」を使いましょう