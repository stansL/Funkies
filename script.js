//Object Literal

var john = {
    name: 'John',
    yearOfBirth: 1987,
    job: 'programmer'
};


//Creating Objects Using the Function Constructor Pattern

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


/*
 * Object.create pattern
 *
 */
var student = {
    calculateAge: function () {
        console.log(2019 - this.yearOfBirth);
    }
}

var tom = Object.create(student);
tom.name = 'Tom Hawkens';
tom.yearOfBirth = 1982;
tom.job = 'Designer';


var jane = Object.create(student, {
    name: {
        value: 'Jane'
    },
    yearOfBirth: {
        value: 1987
    },
    job: {
        value: 'Tech Lead'
    }
});

/*
 * First Class Functions
 *
 */

var years = [1994, 1965, 1997, 1982, 1998, 1987, 2014];

function arrayCalc(arr, fn) {
    var arrResult = [];
    for (var i = 0; i < arr.length; i++) {
        arrResult.push(fn(arr[i]));
    }
    return arrResult;
}

function callOne(val) {
    return 2019 - val;
}

function callTwo(val) {
    return 60 - (2019 - val);
}

function maxHeartRate(val) {
    var age = callOne(val);
    if (age >= 18 && age <= 81) {
        return Math.round(206.9 - (0.67 * age));
    } else {
        return -1;
    }
}

console.log(arrayCalc(years, maxHeartRate));


/**
 * Functions returning functions
 */

function interviewQuestion(job) {
    switch (job) {
        case 'designer': {
            return function (name) {
                console.log(name, ',Please explain what UI/UX is?');
            };
        }
        case 'teacher': {
            return function (name) {
                console.log(name, ',What subject do you teach?');
            };
        }
        default: {
            return function (name) {
                console.log(name, ',What is it you do?');
            }
        }
    }
}

interviewQuestion('teacher')('Hellen');


/**
 * Immediately Invoked Function Expressions - IIFE - mostly for data privacy
 */
function game() {
    var score = Math.random() * 10;
    console.log(score >= 5);
}

//game();

(function (goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(3);
