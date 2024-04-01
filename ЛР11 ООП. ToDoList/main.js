class Task {
    static baseID = 0;

    constructor(name, active) {
        this.id = Task.baseID++;
        this.name = name;
        this._active = active;
    }

    set active(value) {
        if (typeof value !== 'boolean') {
            throw new Error('Is not TRUE or FALSE');
        }

        this._active = value;
    }

    get active() {
        return this._active;
    }

    changeName(newName) {
        if (!newName || newName === '') {
            throw new Error('The ToDo name cannot be a null string.');
        }

        this.name = newName;
    }
}

class ToDoList {
    static baseID = 0;

    constructor(name) {
        this.id = ToDoList.baseID++;
        this.name = name;
        this.tasks = [];
    }

    changeName(newName) {
        if (!newName || newName === '') {
            throw new Error('The ToDo name cannot be a null string.');
        }

        this.name = newName;
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

    filterTasks(status) {
        if (typeof status !== 'boolean') {
            throw new Error('Filter status value is not boolean.')
        }

        return this.tasks.filter(task => task.active === status);
    }

    removeTask(taskId) {
        let index = this.tasks.findIndex(task => task.id === taskId);

        if (index !== -1) {
            this.tasks.splice(index, 1);
        }
    }
}

let TaskList = new ToDoList('Work 1');
let TaskList2 = new ToDoList('Work 2');

let task1 = new Task('Math', true);
let task2 = new Task('Design', false);
let task3 = new Task('Frontend', true);
let task4 = new Task('OOP', false);

TaskList2.changeName('Homework');
TaskList2.addTask(task1);
TaskList2.addTask(task2);
TaskList2.addTask(task3);
TaskList2.addTask(task4);
TaskList2.removeTask(2);

console.log(TaskList2);
console.log(TaskList2.filterTasks(false));