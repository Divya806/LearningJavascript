
//function statements/ function Declaration
function a() {
    console.log("a called");
}

//function expression
var b = function x() {
   console.log("b called"); 
}
a();
b();

// Difference between the function statement and function expression is hoisiting
// When it comes to function expression it throws error "b is not a function"

//Named function expression 

var c = function xyz() {
    console.log(xyz)
}

c();

//if used xyz it throws error : xyz is not defined

//Anonymous function

// Function without a statement is called Anonymous fucntion

// function () {

// }

//Parameters and Arguments

function p(param1, param2) {

}

p( arg1, arg2)