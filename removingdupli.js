const arr =[2, 2, 3, 4,4, 5,5, 6,7]

function myfunction() {
    let unique = [];
    for(i=0;i<arr.length; i++){
        if(unique.indexOf(arr[i]) === -1){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(myfunction());