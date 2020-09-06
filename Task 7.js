const z = [0, 25, 5, 24, 8, 4, "str", NaN, null];
let even = 0;
let odd = 0;
let zero = 0;

for (let i = 0; i < z.length; i++){
    if (typeof z[i] === "number" && !isNaN(z[i])){
        if (z[i] === 0){
            zero += 1;
        }else if (z[i] % 2 === 0){
            even += 1;
        }else{
            odd += 1;
        }
    } //если бы мы хотели посчитать оставшиеся типы данных нам бы нужно было добавить новую переменную и сдесь на этой строчке указать ее подсчет через alse, верно?
}

console.log('Четных элементов', even);
console.log('Нечетных элементов', odd);
console.log('Нулей', zero);