let person = {
    firstName: "Divya",
    lastName: "Hello wide",
 }
 
 const copiedperson1 = person;
 console.log(copiedperson1);
 
 const copy = Object.assign({}, person);
 console.log(copy);
 
 
 const copying = JSON.parse(JSON.stringify(person));
 console.log(copying)
 