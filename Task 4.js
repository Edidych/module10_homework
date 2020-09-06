function getRandomInteger(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min //не до конца понимаю как работает эта строчка
}

console.log(getRandomInteger(0, 100))