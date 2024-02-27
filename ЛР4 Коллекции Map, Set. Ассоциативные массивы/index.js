//1

let productList = new Set(["Мандарин", "Кокос"]);

function AddProduct(product) {
    productList.add(product);
    console.log(`Товар "${product}" добавлен в список.`);
}

function RemoveProduct(product) {
    productList.delete(product) ? console.log(`Товар "${product}" удален из списка.`) : console.log(`Товар "${product}" не найден в списке.`);
}

function CheckProduct(product) {
    productList.has(product) ? console.log(`Товар "${product}" найден в списке.`) : console.log(`Товар "${product}" не найден в списке.`);
}

function GetProductCount() {
    console.log(`Количество товаров в списке: ${productList.size}`);
}

AddProduct("Яблоко");
AddProduct("Банан");
AddProduct("Груша");
CheckProduct("Яблоко");
CheckProduct("Апельсин");
GetProductCount();
RemoveProduct("Груша");
GetProductCount();

//2
let studentList = new Set();

function AddStudent(student) {
    studentList.add(student);
    console.log(`Студент "${student.fullname}" добавлен в список.`);
}

function RemoveStudent(number) {
    let removedStudent = null;
    for (const student of studentList) {
        if (student.number === number) {
            removedStudent = student;
            studentList.delete(student);
            break;
        }
    }

    removedStudent ? console.log(`Студент "${removedStudent.fullname}" удален из списка.`) : console.log(`Студент с номером зачётки "${number}" не найден в списке.`);
}

function FilterStudentsByGroup(group) {
    let filterStudents = [...studentList].filter((student) => student.group === group);

    console.log(`Студенты в группе ${group}:`);
    filterStudents.forEach((student) => console.log(student.fullname));
}

function SortStudentsByNumber() {
    let sortedStudents = [...studentList].sort((a, b) => a.number - b.number);
    console.log("Список студентов, отсортированный по номеру зачетки:");
    sortedStudents.forEach((student) => console.log(student.fullname));
}

let student1 = {
    number: 711,
    group: 10,
    fullname: "Никита",
};
let student2 = {
    number: 712,
    group: 10,
    fullname: "Евгений",
};
let student3 = {
    number: 713,
    group: 9,
    fullname: "Владимир",
};

AddStudent(student1);
AddStudent(student2);
AddStudent(student3);

FilterStudentsByGroup(10);
SortStudentsByNumber();
RemoveStudent(711);
FilterStudentsByGroup(10);
SortStudentsByNumber();

//3
let productStorage = new Map();

function AddToStorage(id, name, kolv, price) {
    if (productStorage.has(id)) {
        console.log("Товар с таким id уже существует.");
        return;
    }

    let product2 = {
        name: name,
        kolv: kolv,
        price: price
    };

    productStorage.set(id, product2);
}

function RemoveFromStorageByID(id) {
    if (!productStorage.has(id)) {
        console.log("Товар с таким id не найден.");
        return;
    }

    productStorage.delete(id);
}

function RemoveFromStorageByName(name) {
    for (const [id, product] of productStorage) {
        if (product.name === name) {
            productStorage.delete(id);
        }
    }
}

function ChangeKolv(id, newKolv) {
    if (!productStorage.has(id)) {
        console.log("Товара с таким id не найден.");
        return;
    }

    let product = productStorage.get(id);
    product.kolv = newKolv;
}

function ChangePrice(id, newPrice) {
    if (!productStorage.has(id)) {
        console.log("Товара с таким id не найден.");
        return;
    }

    let product = productStorage.get(id);
    product.price = newPrice;
}

function ItemCount() {
    return productStorage.size;
}

function TotalCost() {
    let totalCost = 0;

    for (const product of productStorage.values()) {
        totalCost += product.kolv * product.price;
    }

    return totalCost;
}

AddToStorage(1, "Молоко", 5, 10);
AddToStorage(2, "Хлеб", 3, 20);
AddToStorage(3, "Вода", 2, 30);

RemoveFromStorageByID(2);
RemoveFromStorageByName("Молоко");
ChangeKolv(3, 4);
ChangePrice(3, 40);

console.log("Количество позиций в списке товаров: ", ItemCount());
console.log("Сумма стоимости всех товаров: ", TotalCost());

//4
let cacheResult = new WeakMap();
let keys = [];

function CachedFunc(a) {
    let key = { a };
    let keyIndex = keys.findIndex(k => k.a === a);

    if (keyIndex !== -1) {
        console.log("Результат взят из кэша.")
        return cacheResult.get(keys[keyIndex]);
    }

    let result = a * 5;
    cacheResult.set(key, result);
    keys.push(key);

    return result;
}

console.log(CachedFunc(2));
console.log(CachedFunc(2));