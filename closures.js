/**
 * Closure example - inbuilt into JS
 */
function retirement(retirementAge) {
    var a = ' years left before retirement!';
    return function (yearOfBirth) {
        var age = 2019 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

retirement(65)(1987);


/**
 * Bind, Call and Apply Methods
 */

var john = {
    name: 'John',
    age: 26,
    job: 'teacher',
    presentation: function (style, timeOfDay) {
        if (style === 'formal') {
            console.log('Good ', timeOfDay, 'ladies and gentlemen! I\'m', this.name, 'a', this.job, 'who is of age ', this.age);
        } else if (style === 'friendly') {
            console.log('Hey, What\'s up ', timeOfDay, 'ladies and gentlemen! I\'m', this.name, 'a', this.job, 'who is of age ', this.age);
        }

    }
}


//john.presentation('friendly', 'morning');

var emilly = {
    name: 'Emilly',
    age: 32,
    job: 'Ux/UI designer'
}

john.presentation.call(emilly, 'friendly', 'afternoon');
var johnFriendly = john.presentation.bind(emilly, 'friendly');
john.presentation.apply(emilly, ['formal', 'afternoon']);

johnFriendly('night');
