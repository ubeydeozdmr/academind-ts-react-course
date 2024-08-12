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

interface Credentials {
  password: string;
  email: string;
}

// interface Credentials {
//   mode: string;
// }

let creds: Credentials;

creds = {
  password: 'abc',
  email: 'test@example.com',
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}

function login(credentials: Credentials): void {
  console.log(credentials.email);
}

login(new AuthCredentials());

// type Admin = {
//   permissions: string[];
// };

// type AppUser = {
//   userName: string;
// };

// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permissions: ['READ', 'WRITE'],
//   userName: 'Ubeyde',
// };

interface Admin {
  permissions: string[];
}

interface AppUser {
  userName: string;
}

interface AppAdmin extends Admin, AppUser {}

let admin: AppAdmin;

admin = {
  permissions: ['READ', 'WRITE'],
  userName: 'Ubeyde',
};

type Role = 'admin' | 'user' | 'editor';

let role: Role; // 'admin', 'user', 'editor'

role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';

function performAction(action: string | number, role: Role) {
  if (role === 'admin' && typeof action === 'string') {
    // ...
  }
}
