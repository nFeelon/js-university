//1
function basicOperations(operation, value1, value2) {
    switch (operation) {
        case '+':
            return value1 + value2;
        case '-':
            return value1 - value2;
        case '*':
            return value1 * value2;
        case '/':
            return value1 / value2;
    }
}

let result = basicOperations('+', 5, 10);
console.log(result);

//2
let n = prompt("Введите число: ", 0);

let sumFunc = function (n) {
    let sumN = 0;
    for (let i = 1; i <= n; i++) {
        sumN += i * i * i;
    }
    return sumN;
}

alert(sumFunc(n));

//3
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function sumArray(param1) {
    let sumA = 0;
    for (let k = 0; k < param1.length; k++) {
        sumA += param1[k];
    }
    return sumA / param1.length;
}
console.log(sumArray(array));

//4
let str = "JavaScript";
let str2 = "JavaScr53э? ipt";

function strReverse(param1) {
    return param1.split('').reverse().join('').replace(/[^a-zA-Z]/g, '');
}

console.log(strReverse(str));
console.log(strReverse(str2));

//5
function duplicateStr(n, s) {
    let newStr = '';
    for (let x = 0; x < n; x++) {
        newStr += s;
    }
    return newStr;
}

console.log(duplicateStr(5, '-hello-'));

//6
let arr1 = ["Hello", "world", "guys"];
let arr2 = ["Bye", "heaven", "world"];

let isCollect = (m1, m2) => {
    let arr3 = [];
    for (let z = 0; z < m1.length; z++) {
        let currentStr = m1[z];
        if (!arr2.includes(currentStr)) {
            arr3.push(currentStr);
        }
    }
    return arr3;
}

console.log(isCollect(arr1, arr2));