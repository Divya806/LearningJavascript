function x() {
    for(var i=0;i<=5;i++) {
        setTimeout(function () {
            console.log(i)
        }, i * 1000)
    }
}

x()

//output: 6 will be printed 6 times

function y() {
    for(let i=0; i<=5;i++) {
        setTimeout(function() {
            console.log(i)
        }, i * 1000)
    }
}

y()

//output: it will printed from 1 to 6