document.querySelector('#grandparent').addEventListener('click', function() {
    console.log("Grandparent clicked")
}, false)

document.querySelector('#parent').addEventListener('click', function(e) {
    console.log("parent clicked")
    e.stopPropagation();
}, false)

document.querySelector('#child').addEventListener('click', function() {
    console.log("child clicked")
}, false)