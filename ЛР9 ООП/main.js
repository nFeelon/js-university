//1
let square = {
    color: 'yellow',
    size: 'big'
};

let square2 = {
    size: 'small',
    __proto__: square
};

console.log(Object.keys(square2));
console.log(square2.size);

let circle = {
    size: 'big',
    color: 'white'
};

let circle2 = {
    color: 'green',
    __proto__: circle
};

console.log(Object.keys(circle2));
console.log(circle2.color);

let triangle = {
    color: 'white',
    lines: 1
};

let triangle2 = {
    lines: 3,
    __proto__: triangle
};

console.log(Object.keys(triangle2));
console.log(triangle2.lines);

//2
class Human {
    constructor(name, surname, bday, address) {
        this.name = name;
        this.surname = surname;
        this.bday = bday;
        this.address = address;
    }

    get age() {
        return 2024 - this.bday;
    }

    set age(value) {
        this.bday = 2024 - value;
    }

    changeAddress(value) {
        this.address = value;
    }

    toString() {
        return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Address: ${this.address}.`;
    }
}

let person = new Human('Nikita', 'Filon', 2005, 'Belorusskaya 21');
console.log(typeof (person));

person.age = 18;
person.changeAddress('Timiryazeva 8');
console.log(person.toString());

class Student extends Human {
    constructor(name, surname, bday, address, faculty, course, group, id) {
        super(name, surname, bday, address);
        this.faculty = faculty;
        this.course = course;
        this.group = group;
        this.id = id;
    }

    changeCourse(value) {
        this.course = value;
    }

    changeGroup(value) {
        this.group = value;
    }

    getFullName() {
        return this.name + ' ' + this.surname;
    }

    toString() {
        return `Name: ${this.name}, Surname: ${this.surname}, Age: ${this.age}, Address: ${this.address}, Faculty: ${this.faculty}, Course: ${this.course}, Group: ${this.group}, ID: ${this.id}.`;
    }
}

let student = new Student('Nikita', 'Filon', 2005, 'Belorusskaya 21', 'ФИТ', 2, 9, '73222685');
student.changeAddress('Timiryazeva 8');
student.changeCourse(3);
student.changeGroup(10);
console.log(student.getFullName());
console.log(student.toString());

class Faculty {
    constructor(name, groupCount, studentCount) {
        this.name = name;
        this.groupCount = groupCount;
        this.studentCount = studentCount;
        this.groups = {};
    }

    changeGroupCount(value) {
        this.groupCount = value;
    }

    changeStudentCount(value) {
        this.studentCount = value;
    }

    addStudentToGroup(student) {
        if (!this.groups[student.group]) {
            this.groups[student.group] = [];
            this.groupCount++;
        }

        this.groups[student.group].push(student);
        this.studentCount++;
    }

    getDev() {
        let count = 0;
        for (const group in this.groups) {
            this.groups[group].forEach(st => {
                if (st.id[1] == '3') {
                    count++;
                }
            });
        }
        return count;
    }

    getGroup(value) {
        return this.groups[value] || [];
    }

    getEvenStudensID() {
        let students = [];
        for (const group in this.groups) {
            this.groups[group].forEach(st => {
                if (+st.id % 2 === 0) {
                    students.push(st);
                }
            })
        }
        return students;
    }
}

let faculty = new Faculty('ФИТ', 10, 300);

let student1 = new Student('Evgeniy', 'Yanukovich', 2004, 'Belorusskaya 21', 'ФИТ', 2, 10, '73222684');
let student2 = new Student('Mateusz', 'Holovenko', 2005, 'Belorusskaya 21', 'ФИТ', 2, 9, '73222686');
let student3 = new Student('Daniel', 'Haag', 2005, 'Belorusskaya 21', 'ФИТ', 2, 10, '73222683');

faculty.addStudentToGroup(student);
faculty.addStudentToGroup(student1);
faculty.addStudentToGroup(student2);
faculty.addStudentToGroup(student3);

console.log(faculty.getEvenStudensID());
console.log(faculty.getDev());
console.log(faculty.getGroup(10));