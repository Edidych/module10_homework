let a = prompt('Введите три символа');
let b = +a;
let c = typeof b;

let d = b % 2


if (typeof b === "number" && isNaN(b)) {
    console.log('Упс, кажется, вы ошиблись');
} else if (d === 0){
    console.log('четное')
} else {
    console.log('нечетное')
}