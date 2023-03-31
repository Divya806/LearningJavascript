function x(){
    var a = 20;
    function y(){
        console.log(a);
    }
    y()
}
x()

function attachEventListener() {
    let count = 0;
    document.getElementById('exam').addEventListener('click', function() {
        console.log("button clicked", ++count)
    })
}

attachEventListener()