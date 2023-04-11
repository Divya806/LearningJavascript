function x(y) {
    y()
    console.log("y called")
}

x(function y() {
    console.log("z called")
})