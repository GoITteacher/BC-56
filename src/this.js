/* 
Контекст виконання функції
*/

// Петя біжить швидко, тому що Петя намагається зловити поїзд.
// А також Петя кмс;

// Петя біжить швидко, тому що він намагається зловити поїзд.
// А також він кмс;

/* const user = {
  name: 'Petro',
  age: 21,
  phoneNumber: 'asrsr',
  location: 'Dnipro',

  showInfo() {
    console.log(`Name - ${this.name}`);
    console.log(`Age - ${this.age}`);
    console.log(`phoneNumber - ${this.phoneNumber}`);
    console.log(`location - ${this.location}`);
  },
};

const user2 = {
  name: 'Max',
  age: 25,
  phoneNumber: '456467567',
  location: 'Kyiv',
  showInfo: user.showInfo,
};

user.showInfo();

user2.showInfo(); */

// function foo() {
//   console.log(this);
// }

// const user1 = {
//   name: 'User1',
//   test: foo,
// };
// const user2 = {
//   name: 'User2',
//   test: foo,
// };
// const user3 = {
//   name: 'User3',
//   test: foo,
// };

// user1.test();
// user2.test();
// user3.test();

/* 
Правила визначення this
    - this у глобальній області видимості - undefined || window
    - this в методі об'єкта
    - this в callback-функціях
    - this у стрілочних функціях
*/

/* function showInfo() {
  console.log(`Name - ${this.name}`);
  console.log(`Age - ${this.age}`);
  console.log(`phoneNumber - ${this.phoneNumber}`);
  console.log(`location - ${this.location}`);
}

const user1 = {
  name: 'Petro',
  age: 21,
  phoneNumber: 'asrsr',
  location: 'Dnipro',
  test: showInfo,
};

const user2 = {
  name: 'Max',
  age: 25,
  phoneNumber: '456467567',
  location: 'Kyiv',
  test: showInfo,
};

user1.test(); */

/* 
1. Який тип функції

- якщо стрілчата, дивимось момент створення (беремо бат контекст)

- якщо звичайна, дивимось момент виклику (якщо контекст не готовий - дивимось батьківський контектс)
*/

/* function foo() {
  // this = user1

  const arrow = () => {
    // this = user1
    console.log(this);
  };

  arrow();
}

const user1 = {
  name: 'User1',
  test: foo,
}; */

/* const user1 = {
  name: 'User1',
  foo: () => {
    console.log(this);
  },
};

const user2 = {
  name: 'User2',
  foo: user1.foo,
};

function test() {
  user1.foo();
}

test(); */

//- this у callback функціях

// function foo(call) {
//   const user = {
//     name: 'User1',
//     foo: call,
//   };
//   user.foo();
// }

// function callback() {
//   console.log(this);
// }

// foo(callback);

/* function callback() {
  console.log(this);
}

function test(call) {
  const user = {
    name: 'User1',
    x: call,
  };

  user.x();
  user.x();
  user.x();
}

test(callback); */

//- this у стрілочних функціях

/* 
Методи функцій
    - Метод call()
    - Метод apply()
    - Метод bind()
*/

const user1 = {
  name: 'User1',
  showInfo(x, y) {
    console.log(this.name, x + y);
  },
};

const user2 = {
  name: 'User2',
};
const user3 = {
  name: 'User3',
};

// user1.showInfo(10, 20, 30);
// user1.showInfo(2, 3);

// user1.showInfo.call(user2, 5, 7);
// user1.showInfo.apply(user3, [10, 55]);

// const args = [10,20,30]
// const x=10;
// const y=20;
// user1.showInfo.apply(user3, [x,y]);
// ====================================================

// const copyFun = user1.showInfo.bind(user3);

// copyFun(10, 20);

// const obj = {
//   showInfo: copyFun,
// };

// user3.name = 'HELLO';
// obj.showInfo(5, 7);

/// ==========================================

// 1. arrow
// 2. bind
// 3. call apply
// 4. obj
// 5. global context

// function foo(){
//   console.log(this);
// }

// const obj = {
//   test: foo.bind(user2)
// }

// obj.foo.call(user1);

// const arrow = () => {
//   console.log(this);
// };

// const copyArrow = arrow.bind(user2);

// copyArrow();
