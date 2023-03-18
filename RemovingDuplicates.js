const arr = [2,3,4,5, 7,8, 8,8, 8]

console.log(arr);

function myfunction() {
    let unique = [];
    for(let i=0;i<arr.length; i++) {
        if(unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(myfunction())

