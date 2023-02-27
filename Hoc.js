const radius = [1, 4, 3, 2];

const area  = function(radius) {
    return 2* Math.PI* radius * radius
}

const circumference = function(radius) {
    return 2* Math.PI * radius
}

const diameter = function(radius) {
    return 2 * radius
}

const calculateArea = function (radius, logic) {
    const output= [];
    for(i=0;i<radius.length; i++) {
        output.push(logic(radius[i]))
    }
    return output
}

const calculateCircumference = function (radius, logic) {
    const output =[];
    for(i=0;i<radius.length;i++) {
        output.push(logic(radius[i]))
    }
    return output
}

const calculateDiameter = function (radius, logic) {
    const output = [];
    for(i=0;i<radius.length;i++) {
        output.push(logic(radius[i]))
    }
    return output
}

console.log(calculateArea(radius, area));
console.log(calculateCircumference(radius,circumference));
console.log(calculateDiameter(radius, diameter));