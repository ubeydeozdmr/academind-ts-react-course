let userName = 'Ubeyde';

// userName = 34;
userName = 'Ubeyde';

let userAge: number = 34;

let isValid = true;

// string, number, boolean

let userID: string | number = 'abc1';
userID = 123;

// userID = true;

// let user: object;
let user: {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

// user = 'Ubeyde';

user = {
  name: 'Ubeyde',
  age: 22,
  isAdmin: true,
  id: 'abc', // 123
};

// user = {};

// let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[]

// {name: string; age: number}[]

hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1, 2, 3];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}
