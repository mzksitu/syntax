// let num = 0

// increment()
// increment()
// increment()

function incrementFactory() {
  let num = 0
  // let num = 0
  // num = num + 1 //  num = num(0) + 1;
  // console.log(num)
  function increment() {
    num = num + 1
    console.log(num)
  }

  return increment
}

const increment = incrementFactory()
// num = 0

increment()
increment()
increment()
increment()
