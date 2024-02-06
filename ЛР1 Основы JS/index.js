//1
let a = 5;          //целое число
let name = "Name";  //строка
let i = 0;          //число
let double = 0.23;  //число дробное
let result = 1 / 0; //число, infinity
let answer = true;  //булева
let no = null;      //null

//2
let count = Math.floor(45 / 5) * Math.floor(21 / 5);
console.log('Количество квадратов:', + count);

//3
let i2 = 2;
let a2 = ++i2;
let b2 = i2++;
console.log("a = " + a2 + ", b = " + b2);
console.log(a2 == b2);

//4
console.log("Задание 4: ");
console.log("Котик" == "котик" ? true : false); //false
console.log("Котик" == "китик" ? true : false); //false
console.log("Кот" == "Котик" ? true : false);   //false
console.log("Привет" == "Пока" ? true : false); //false
console.log(73 == "53" ? true : false);         //false
console.log(false == 0 ? true : false);         //true
console.log(54 == true ? true : false);         //false
console.log(123 == false ? true : false);       //false
console.log(true == "3" ? true : false);        //false
console.log(8 == "-2" ? true : false);          //false
console.log(34 == "34" ? true : false);         //true
console.log(null == undefined ? true : false);  //true

//5
let userName = prompt("Введите имя: ", '').toLowerCase().split(' ');
let teacherName = "Алина".toLowerCase();
let isMatch = userName.includes(teacherName) ? true : false;
alert(isMatch ? "Имена совпали!" : "Имена не совпали!");

//6
console.log("Задание 6: ");
let math = false;
let rusl = true;
let engl = false;
if (math == 1 && rusl == 1 && engl == 1) {
    console.log("Студент переведен на следующий курс.");
} else if (math == 1 || rusl == 1 || engl == 1) {
    console.log("Студент попал на пересдачу(и).");
} else {
    console.log("Студент отчислен.");
}

//7 
console.log("Задание 7: ");
console.log(true + true);     //2
console.log(0 + "5");         //05
console.log(5 + "мм");        //5мм
console.log(8 / Infinity);    //0
console.log(9 * "\n9");       //81
console.log(null - 1);        //-1
console.log("5" - 2);         //3
console.log("5px" - 3);       //NaN
console.log(true - 3);        //-2
console.log(7 || 0);          //7

//8
console.log("Задание 8: ");
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let k = 0; k < array.length; k++) {
    array[k] = array[k] % 2 == 0 ? array[k] + 2 : array[k] + "мм";
    console.log(array[k]);
}

//9
let date = prompt("Введите номер дня недели: ", '');
let week = {
    1: "Пн",
    2: "Вт",
    3: "Ср",
    4: "Чт",
    5: "Пт",
    6: "Сб",
    7: "Вс"
};
let weekArray = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
if (date < 0 && date > 7) {
    alert("Введен неверный номер.");
} else {
    alert(week[date]);
    alert(weekArray[date - 1]);
}

//10
function question(param1 = "Hello", param2, param3) {
    return param1 + " " + param2 + " " + param3;
}
let param3input = prompt("Введите параметр: ", ' ');
alert(question(undefined, 5, param3input));

//11
console.log("Задание 11");
let aSq = 5;
let bSq = 5;
function params(par1, par2) {
    if(par1 === par2) {
        return (par1+par2)*2;
    }
    return par1*par2;
}
let params2 = function(par1, par2) {
    if(par1 === par2) {
        return (par1+par2)*2;
    }
    return par1*par2;
};
let params3 = (par1, par2) => {
    if(par1 === par2) {
        return (par1+par2)*2;
    }
    return par1*par2;
};
console.log(params(aSq, bSq));
console.log(params2(aSq, bSq));
console.log(params3(aSq, bSq));