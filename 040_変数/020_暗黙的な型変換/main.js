function printTypeAndValue(val) {
  console.log(typeof val, val)
}

let a = 0;

printTypeAndValue(a);

let b = parseInt('1') + a; //  '1' の場合（string）

printTypeAndValue(b);

let c = 15 - b;

printTypeAndValue(c);

let d = c - null;

printTypeAndValue(d);

let e = d - true;

printTypeAndValue(e);

// 異なる方同士は思わぬバクを生む原因になるので注意