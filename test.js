//1
let number = prompt('Введите число');
let result = (number >= 7) ? alert('Привет') : alert('меньше 7');

//2
let name = 'Вячеслав';
let newName = prompt('Введите имя');
let resultOne = (name === newName) ? alert('Привет ' + name) : alert('нет такого имени');

//3
let step;
let arr = [];
let newArr = [];

const element = prompt('Введите количество элементов');
for (step = 0; step < element; step++) {
    let num = prompt('Введите число');
    arr.push(num);
    if (num % 3 === 0) {
        newArr.push(num);
    }
}

alert('Входящий массив ' + arr);
alert('Результат ' + newArr);

//4
//Последовательность неправильная, т.к. у каждой скобки должна быть пара.
    // правильной будет такая: [[((()))()(())]].


