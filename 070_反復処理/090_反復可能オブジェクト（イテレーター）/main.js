const items = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3'
}

Object.prototype[Symbol.iterator] = function() {
  const keys = Object.keys(this);
  let i = 0;
  let _this = this;
  console.log(keys)
  return {
    next() {
      let key = keys[i++];
      return {
        value: [key, _this[key]],
        done: i > keys.length
      }
    }
  }
}
// const items = Object.entries(obj);
for (let [k, v] of items) {
  console.log(k, v);
}