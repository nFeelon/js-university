//1
let array1 = [1, [1, 2, [3, 4]], [2, 4]];

function joinArray(arr) {
    return arr.reduce((acc, curr) => {
        if (Array.isArray(curr)) {
            return acc.concat(joinArray(curr));
        }
        return acc.concat(curr);
    }, []);
}

const p1 = document.querySelector('.task1');
p1.innerHTML = joinArray(array1);

//2
let array2 = array1;
function summArray(arr) {
    let summa = 0;
    for (let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        if (Array.isArray(elem)) {
            summa += summArray(elem);
        } else {
            summa += elem;
        }
    }
    return summa;
}

const p2 = document.querySelector('.task2');
p2.innerHTML = summArray(array2);

//3
let students = [
    { name: 'Nikita', age: 18, groupId: 10 },
    { name: 'Michael', age: 16, groupId: 9 },
    { name: 'Alexander', age: 19, groupId: 10 },
    { name: 'Nikodim', age: 18, groupId: 8 },
    { name: 'Petr', age: 18, groupId: 10 }
];

function filterStudents(students) {
    let result = {};

    for (let i = 0; i < students.length; i++) {
        let student = students[i];

        if (student.age > 17) {
            if (result[student.groupId]) {
                result[student.groupId].push(student);
            } else {
                result[student.groupId] = [student];
            }
        }
    }

    return result;
}

console.log(filterStudents(students));

//4
let total1 = 'ABC';
let asciiCode = [];
for (let i = 0; i < total1.length; i++) {
    let char = total1.charAt(i);
    let code = char.charCodeAt(0);
    asciiCode.push(code);
}
total1 = asciiCode.join('');
let total2 = total1.replace(/7/g, 1);

const p4 = document.querySelector('.task4');
p4.innerHTML = total1 - total2;

//5
let extend = { a: 1, b: 2, c: 1};
let add1 = { c: 3 };
let add2 = { d: 4 };
let add3 = { e: 5, f: 6 };

function genObj(object1, ...objects) {
    let mainObj = Object.assign({}, object1);
    for (const obj of objects) {
        for (const key in obj) {
            if (!mainObj.hasOwnProperty(key)) {
                mainObj[key] = obj[key];
            }
        }
    }

    return mainObj;
}
let newExtend = genObj(extend, add1, add2, add3);
console.log(newExtend);

//6
let size = +prompt("Введите количетсво этажей башни: ", 1);
let tower = [];

for (let i = 0; i < size; i++) {
    let spaces = ' '.repeat(size - i - 1);
    let ast = '*'.repeat(i * 2 + 1);
    let floor = `${spaces}${ast}${spaces}`;
    tower.push(floor);
}

console.log(tower);