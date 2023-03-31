
if(window === this) {
    console.log("window is matching")
} else {
    console.log("window is not matching")
}

var a = 10;
console.log(window.a);
console.log(this.a);