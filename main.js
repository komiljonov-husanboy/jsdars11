// 1
let numbers = [1, 2, 3, 4, 5, 6];
let res1 = numbers.reduce((prevValue, value) => {
    if (value % 2 === 0) {
        prevValue.push(value);
    }
    return prevValue;
}, []);
console.log(res1);

// 2
let bigNum = [1, 10, 20, 30, 201, 202];
let res2 = bigNum.reduce((prevValue, value) => {
    if (value > prevValue) {
        prevValue = value;
    }
    return prevValue;
}, 0);
console.log(res2);

// 3
let strings = ['Zayniddin', 'ali', 'Nodir', 'Qodirrilo'];
let res3 = strings.map((value) => {
    return value.length;
});
console.log(res3);

// 4
let musbat = [1, 3, 4, 6, -3, 0, -9];
let res4 = musbat.reduce((prevValue, value) => {
    if (value > 0) {
        prevValue.push(value);
    }
    return prevValue;
}, []);
console.log(res4);

// 5
let reversed = [1, 2, 3, 4, 5, 6];
console.log(reversed.sort((a, b) => b - a));

// 6
let users = {
    name: "Ali",
    age: 18
};
let objArray = Object.values(users);
console.log(objArray.join(', ') + ' yosh');

// 7
let Students = [
    {name: 'Ali', grade: 84},
    {name: 'Bali', grade: 67},
    {name: 'sali', grade: 60},
    {name: 'Gani', grade: 80}
];
let res7 = Students.filter((value) => {
    if (value.grade > 70) {
        return value;
    }
});
console.log(res7);

// 8
let valueNum = {
    a: 1,
    b: 2,
    c: 3,
    d: 3
};
let array = Object.values(valueNum);
console.log(array.length);

// 9
let dis = {
    name: 'Phone',
    price: 1200000,
    discount: 0.1
};
let disprice = dis.price * dis.discount;
console.log(disprice);

// 10
let Books = [
    {title: "Book", pages: 120},
    {title: "Book", pages: 130},
    {title: "Book", pages: 140}
];
let res10 = Books.reduce((prevVlaue, value) => {
    return prevVlaue + value.pages;
}, 0);
console.log(res10);

// 11
let revstring = "Hello";
let arrstring = revstring.split('');
console.log(arrstring.reverse().join(''));

// 12
let str = " Salom Mening ismim Xusanboy";
let arrstr = str.split(' ');
let count = arrstr.length - 1;
console.log(count);

// 13
let bigWord = "salomatmisiz?";
console.log(bigWord.toUpperCase());

// 14
let strin = "salom js alik js xayr js";
let split = strin.split('js');
let coun = split.length - 1;
console.log(coun);

// 15
function pald(str) {
    let reversedStr = str.toLowerCase().split('').reverse().join('');
    return str.toLowerCase() === reversedStr;
}
console.log(pald('level'));

// 16
function squareArray(arr) {
    return arr.map(number => number * number);
}
console.log(squareArray([1, 2, 3]));

// 17
function getAdmins(users) {
    return users.filter(user => user.isAdmin === true);
}
const usersData = [{name: "Ali", isAdmin: true}, {name: "Vali", isAdmin: false}];
console.log(getAdmins(usersData));

// 18
function hasNegative(numbers) {
    return numbers.some(number => number < 0);
}
console.log(hasNegative([1, 2, -3]));

// 19
function areAllPositive(numbers) {
    return numbers.every(number => number > 0);
}
console.log(areAllPositive([1, 2, 3]));

// 20
function sumArray(numbers) {
    return numbers.reduce((sum, current) => sum + current, 0);
}
console.log(sumArray([1, 2, 3, 4]));

// 21
let max = (a, b) => (a > b ? a : b);
console.log(max(15, 8));

// 22
function calculateArea(a, h) {
    return (a * h) / 2;
}
console.log(calculateArea(10, 5));

// 23
let add = (a, b) => a + b;
let sub = (a, b) => a - b;
function calculate(a, b, operation) {
    return operation(a, b);
}
console.log(calculate(5, 3, add));

// 24
function makeCounter() {
    let count = 0;
    
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());

// 25
function countDown(n) {
    if (n <= 0) {
        return;
    }
    console.log(n);
    countDown(n - 1);
}
countDown(5);