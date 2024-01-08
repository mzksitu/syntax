function a() {
}
function b() {
  a();
}
function c () {
  b();
}
c();
// スタックの仕組みを「後入れ先出し」
// LIFO(Last In,First Out)