var Person = function() {

};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

Person.prototype.teach = function(subject)
{
    console.log(this.name + ' is now teaching ' + subject);
}

var him = new Person();

him.initialize("Sai", 23)

him.teach("Inheritance")