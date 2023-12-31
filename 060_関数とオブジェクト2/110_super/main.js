const american = {
  hello() {
    console.log('hello ' + this.name);
  }
}

const bob = {
  name: 'Bob',
  hello() {
    super.hello();
    // console.log('hello ' + this.name);
  }
}

Object.setPrototypeOf(bob, american);
bob.hello();


// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//     hello() {
//     console.log('hello ' + this.name);
//   }
// }

// class Japanese extends Person{
//   constructor(name, age, gender) {
//     super(name, age);
//     this.gender = gender;
//   }
//     hello() {
//       console.log('Konnichiwa ' + this.name);
//       super.hello();
//     }
//     bye() {
//     console.log('Sayonara ' + this.name);
//   }
// }

// const taro = new Japanese('Taro', 23, 'Male');
// console.log(taro);

// taro.hello();
// taro.bye();