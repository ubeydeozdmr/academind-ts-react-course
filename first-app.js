var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var userName = 'Ubeyde';
// userName = 22;
userName = 'Ubeyde';
var userAge = 22;
var isValid = true;
var userID = 'abc1';
userID = 123;
var user;
// user = 'Ubeyde';
user = {
    name: 'Ubeyde',
    age: 22,
    isAdmin: true,
    id: 'abc', // 123
};
// user = {};
// let hobbies: Array<string>;
var hobbies; // number[], boolean[]
// {name: string; age: number}[]
hobbies = ['Sports', 'Cooking', 'Reading'];
// hobbies = [1, 2, 3];
function add(a, b) {
    var result = a + b;
    return result;
}
function calculate(a, b, calcFn) {
    calcFn(a, b);
}
calculate(2, 5, add);
// interface Credentials {
//   mode: string;
// }
var creds;
creds = {
    password: 'abc',
    email: 'test@example.com',
};
var AuthCredentials = /** @class */ (function () {
    function AuthCredentials() {
    }
    return AuthCredentials;
}());
function login(credentials) {
    console.log(credentials.email);
}
login(new AuthCredentials());
var admin;
admin = {
    permissions: ['READ', 'WRITE'],
    userName: 'Ubeyde',
};
var role; // 'admin', 'user', 'editor'
role = 'admin';
role = 'user';
role = 'editor';
// role = 'abc';
function performAction(action, role) {
    if (role === 'admin' && typeof action === 'string') {
        // ...
    }
}
var roles;
roles = ['admin', 'editor'];
var textStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
var userStorage = {
    storage: [],
    add: function (data) {
        this.storage.push(data);
    },
};
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var newUser = merge({ name: 'Ubeyde' }, { age: 22 });
