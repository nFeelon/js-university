//1
/*Деструктуризация (или деструктурирование) в JavaScript - это способ извлечения значений из массивов или объектов и присвоения их переменным с помощью синтаксиса шаблонов. Она позволяет более удобным способом получить доступ к элементам массива или свойствам объекта без явного обращения к каждому из них по отдельности.*/
console.log("----Задание 1----");

let numbers = [1, 2, 3, 4, 5];
let [numb1] = numbers;
console.log(numb1);

//2
console.log("----Задание 2----");
let user = {
    name: "Nikita",
    age: 18
};
let admin = {
    admin: true,
    ...user
};
console.log(admin);

//3
console.log("----Задание 3-----");

let store = {
    state: { // 1 уровень
        profilePage: { //2 уровень
            posts: [ //3 уровень
                { id: 1, message: 'Hi', likesCount: 12 },
                { id: 2, message: 'Bye', likesCount: 1 },
            ],
            newPostText: 'About me',
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Valera' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Viktor' },
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'hi hi' },
                { id: 3, message: 'hi hi hi' },
            ],
            sidebar: [],
        },
    }
};

let { state: { profilePage: { posts } } } = store;
posts.forEach(post => {
    console.log(`ID: ${post.id}, Likes count: ${post.likesCount}`);
});

let { state: { dialogsPage: { dialogs, messages } } } = store;

let filteredDialogs = dialogs.filter(d => d.id % 2 === 0);
console.log(filteredDialogs);

let updatedMessages = messages.map(message => ({ id: message.id, message: 'Hello user!' }));
console.log(updatedMessages);

//4
console.log("----Задание 4----");

let tasks = [
    { id: 1, title: "HTML&CSS", idDone: true },
    { id: 2, title: "JS", idDone: true },
    { id: 3, title: "ReactJS", idDone: false },
    { id: 4, title: "Rest API", idDone: false },
    { id: 5, title: "GraphQL", idDone: false },
];
let newTask = { id: 6, title: "Angular", idDone: false };
tasks = [...tasks, newTask];
console.log(tasks);

//5
console.log("----Задание 5----");

function sumValues(x, y, z) {
    return x + y + z;
}

let arr = [1, 2, 3];
console.log(sumValues(...arr));