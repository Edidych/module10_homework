let a = [1, 1, 2];
let b = true;
let c = a[0];

for (let d of a ){
    if (d !== c){
        b = false;
    }
}
console.log(b)

// Всё верно, но здесь то же замечание касательно имен переменных, что и в 1 задании