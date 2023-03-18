const arr = [1, 2,3,4,5, 6, 5]
const newarr =  arr.filter((c,i) => arr.indexOf(c) === i) 
console.log(newarr)