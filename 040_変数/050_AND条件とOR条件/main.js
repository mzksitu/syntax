const a = 0;
const b = 1;
const c = 3;
const d = 0;
console.log(a && b && c)
console.log(a || b || c)
console.log((a || b) && c) // グループ化
console.log((a || b) && (c || d))

// && AND条件の時「&&」を挟む変数が「true」じゃない限り条件式を返さない
//それぞれの値が[truthy]か[falsy]かというのを確認してAND条件の場合は「Falsy」が見つかった時点で結果が返される
//見つからなかった場合には最後に指定されている値が結果として返される

// ||　OR条件の時
// 「truty」なものが見つかった時点で上記の結果となるため
// 最後まで見つからない場合には一番最後の値が上記の条件の結果になる