const radius = [2, 5, 6, 8, 10]

const calculateArea = function(radius) {
    return Math.PI* radius * radius
}

const calculateDiameter = function(radius) {
    return 2 * radius
}

const calculateCircumference = function(radius){
    return 2 * Math.PI * radius
}
const area = function (logic, radius) {
    const output= []
    for(i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(area(calculateArea, radius));

const diameter = function(logic, radius) {
    const output= []
    for(i=0;i<radius.length;i++){
        output.push(logic(radius[i]))
    }
    return output
}

console.log(diameter(calculateDiameter, radius));

const circumference = function (logic, radius) {
    const output = []
    for(i=0;i<radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(circumference(calculateCircumference, radius));


