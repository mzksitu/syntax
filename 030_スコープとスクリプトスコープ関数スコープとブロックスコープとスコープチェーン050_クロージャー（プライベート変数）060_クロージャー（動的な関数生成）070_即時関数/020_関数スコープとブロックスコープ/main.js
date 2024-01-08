function a() {
  let b = 0
  console.log(b)
}
// console.log(b)が{}の外にあると取得しない
a()

// ifまたはfor (条件)を書いて{ブロックスコープ}を使う
{
  const d = function () {
    console.log("d is called")
  }
  // let c = 1; ok
  // const c = 1; ok
  // console.log(c); ok
  // let , const は取得可能　var を使うとブロックスコープを無視されるので非推奨
}
// console.log(c)が{}の外にあると取得しない
d()
console.log(c);
