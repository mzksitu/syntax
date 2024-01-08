function a() {
  console.log('called')
}

a();

 let c = (function() {
  console.log('called');

  let privateVal = 0;
  let publicVal = 10;

  function privateFn() {
    console.log('privateFn is called');
  }
  function publicFn() {
    console.log('publicFn is called' + privateVal++);
  }
 
   return {
    publicVal,
    publicFn
   };
 })();
 c.publicFn();
 c.publicFn();
 c.publicFn();
 c.publicFn();

 console.log(c.publicVal);
//a();

// let b = (1 + 2) * 3;
// console.log(b)

let b = function() {
  console.log('called');
}();