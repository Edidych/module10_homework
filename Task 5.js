let a = [1, 2, 4, 3];

console.log(a.length);

for (let i = 0; i < a.length; i++){
    console.log( a[i] );
}

//or

let a = [1, 2, 4, 3];

console.log(a.length);

a.forEach(function(item, index, array) {

    console.log(item)

});