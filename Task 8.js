let poc = new Map();

poc.set("first", "odin");
poc.set("twice", "dva");



function priz(arr){

    for (let [key, value] of poc){

        console.log (`Ключ - ${key}, Значение ${value}`)

    }
}

priz(poc);