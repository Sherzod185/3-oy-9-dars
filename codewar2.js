let integer = 25;
let limit = 5;
let arr = [];

function findMultiples(integer, limit) {
    for (let i = 0; i < Math.floor(integer / limit); i++) {
        arr[i] = limit * (i + 1)
    }
    return arr;
}

console.log(findMultiples(integer, limit));