let userName = 'Ubeyde';

// userName = 34;
userName = 'Ubeyde';

let userAge: number = 34;

let isValid = true;

// string, number, boolean

type StringOrNum = string | number;

let userID: StringOrNum = 'abc1';
userID = 123;

// userID = true;

// let user: object;
type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number;
};

let user: User;

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

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}

calculate(2, 5, add);
