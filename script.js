//Object Literal

var john = {
    name: 'John',
    yearOfBirth: 1987,
    job: 'programmer'
};


//Creating Objects Using the Function Constructor

var Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function () {
    return 2019 - this.yearOfBirth;
};
Person.prototype.lastName = 'Smith';

var peter = new Person('Peter', 1990, 'UX/UI');
var mary = new Person('Mary', 1994, 'HR');
var mark = new Person('Mark', 1965, 'Doctor');

console.log(peter);
console.log(mary);
console.log(mark);
console.log(peter.lastName);
mary.lastName = 'Trial';
console.log(peter.lastName);
console.log(mark.lastName);
console.log(mary.lastName);
