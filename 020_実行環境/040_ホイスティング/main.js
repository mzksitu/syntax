a()  // ホイスティングで前に関数宣言があるとエラーが起こる

const a = function a() {  // 関数式２パターンある
  console.log(c)
  let c = 1

  d()
  function d() {
    console.log("d is called")
  }
  console.log("a is called")
}

console.log(b)

const b = 0 // エラー

// let b = 0;　・エラー

// var b; ・varは非推奨

// console.log(b);

// b = 0;

// console.log(b);
