const a = {
  prop: 0
}

const b = {
  prop: 0
}

console.log(a == b)
console.log(a.prop === b.prop)
//　オブジェクトは同じ　外は違う

const c = a;

console.log(a === c);
