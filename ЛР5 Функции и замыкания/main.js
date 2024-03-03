//1
/* Замыкание
Когда вызывается функция makeCounter, создается своя собственная область видимости (лексическое окружение), в которой определяется локальная переменная currentCount. Затем возвращается анонимная функция, которая имеет доступ к этой области видимости, включая переменную currentCount. Каждый раз, когда вызывается возвращенная функция, она сохраняет доступ к этой области видимости и может изменять и возвращать значение переменной currentCount. */
console.log("----Задание 1----");

function makeCounter() {
    let currentCount = 1;

    return function () {
        return currentCount++;
    };
}

let counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());

let counter2 = makeCounter();
console.log(counter2());

//2
/*Каррирование или карринг (currying) в функциональном программирование — это преобразование функции с множеством аргументов в набор вложенных функций с одним аргументом. */
console.log("----Задание 2----");

function calcVolume(l) {
    return (w) => {
        return (h) => {
            return l * w * h;
        }
    }
}

const l1 = calcVolume(3);
const l2 = l1(2);
const l3 = l1(3);
console.log(l2(2));
console.log(l3(2));


//3
/* Генератор - это функция, которая может быть приостановлена во время выполнения и потом возобновлена с сохранением своего состояния. Он позволяет генерировать последовательность значений по мере необходимости, вместо того, чтобы сразу возвращать все значения сразу.*/

console.log("----Задание 3----");


function* moveProjectile() {
    let projectile = {
        x: 0,
        y: 0
    };

    while (true) {
        let direction = yield projectile;
        switch (direction) {
            case 'left': {
                projectile.x--;
                break;
            }
            case 'right': {
                projectile.x++;
                break;
            }
            case 'up': {
                projectile.y++;
                break;
            }
            case 'down': {
                projectile.y--;
                break;
            }
            case 'stop': {
                return projectile;
            }
            default: {
                alert("Вы ввели неправильную команду!");
                break;
            }
        }
    }
}

let generator = moveProjectile();
generator.next();

for (let step = 0; step < 10; step++) {
    let command = prompt(`Компанды:\n left - налево,\n right - направо,\n up - вверх,\n down - вниз.\n\nДля остановки выполнения команда stop.`).toLowerCase();
    if(command != 'stop') {
        const { x, y } = generator.next(command).value;
        alert(`Шаг ${step+1}: x = ${x}, y = ${y}`);
        continue;
    }
    break;
}

//4
/*Глобальный объект window является главным объектом в браузерной среде JavaScript и представляет собой окно браузера или вкладку, в которой выполняется скрипт. Он предоставляет доступ к множеству встроенных функций, свойств и методов, которые позволяют взаимодействовать с окном браузера и его содержимым.*/
console.log("----Задание 4----");

for(let variable in window) {
    console.log(variable + ': ' + window[variable]);
}

let changeMe = 0;
window.changeMe = 1;
console.log(window.changeMe);