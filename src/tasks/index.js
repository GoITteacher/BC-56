// const age1 = 20;
// let user = {
//   firstName: 'Вася',
//   showInfo: func,
//   age: age1,
// };

// function func() {
//   console.log(this);
// }

// user.showInfo();

// =========================================

// const obj2 = {
//   name: 'awdawd',
// };

// let obj1 = {
//   name: 'obj1',
//   func() {
//     return () => {
//       console.log(this);
//     };
//   },
// };

// const foo = obj1.func;
// const newFunc = foo();
// newFunc();

// =========================================

const obj1 = {
  name: 'obj1',
  func() {
    return () => {
      console.log(this);
    };
  },
};

let obj2 = {
  name: 'obj2',
  func() {
    this;
    const foo = function () {
      console.log(this);
    };
    return foo;
  },
};

const result = obj2.func;
const newFunc2 = result.bind(obj1);

const arrow = () => {
  return newFunc2;
};
const newFunc3 = newFunc2.bind(obj2);
const res = newFunc3();
res();

// =========================================

// function foo(){
//   this.name = 123;
// }

// const obj = {
//   test: foo
// }

// obj.test();

// console.log(obj);

//=============

// function foo() {}

// foo.bind(user2);
