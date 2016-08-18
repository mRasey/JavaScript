function Person(name, age) {
    this.name = name;
    this.age = age;
    
    Person.prototype.toString = function () {
        return this.name + " " + this.age;
    };
}

var person1 = new Person("person1", 17);
document.write(person1.toString());