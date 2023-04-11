const person ={
    fullName: function(city,country, place) {
        return this.firstName + " " + this.lastName + ', ' + city + " " 
        + country + " " +  place
    }
}

const person1 = {
    firstName: "John",
    lastName: "Doe"
}

console.log(person.fullName.call(person1, "oslo", "Norway", "testing"));