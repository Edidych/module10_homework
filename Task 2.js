let X = 1

let typeOfX = typeof(X)

// "number"
// "string"
// "boolean"

if (typeOfX == "number") {
    console.log("X - число")
} else if(typeOfX == "string"){
    console.log("X - строка")
} else if(typeOfX == "boolean") {
    console.log("X - логический тип")
} else{
    console.log("Тип x не определён")
}