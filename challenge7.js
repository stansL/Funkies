/*
 * Quiz Game
 */


var runningScore = 0;

var Question = function (question, answers, answer) {
    this.question = question;
    this.answers = answers;
    this.answer = answer;
}

Question.prototype.displayQuestion = function () {
    console.log(this.question);
    var count = 0;
    this.answers.forEach(x => {
        console.log(count++ + ' : ' + x)
    });
}

Question.prototype.determineCorrectAnswer = function (answer) {
    if (this.answer === answer) {
        console.log('The answer is correct!');
        runningScore++;
    } else {
        console.log('The answer is wrong!');
    }
    console.log('Your current score is:', runningScore);
    console.log("++++++++++++++++++++++++++++++++++++++++++++++++++++++")
}

var questionOne = new Question('First Question', ['Answer One', 'Answer Two', 'Answer Three'], 0);
var questionTwo = new Question('Second Question', ['Yes', 'No'], 1);
var questionThree = new Question('Third Question', ['Answer One', 'Answer Two', 'Answer Three'], 2);

var questions = [questionOne, questionTwo, questionThree];


var rand = Math.floor(Math.random() * questions.length);
//console.log(rand);
var selectedQuestion = questions[rand];
console.log(selectedQuestion.displayQuestion());
var userResponse = prompt('Enter the correct answer!');
while (userResponse !== 'exit') {
    var answer = Number.parseInt(userResponse);
    selectedQuestion.determineCorrectAnswer(answer);


    rand = Math.floor(Math.random() * 3);
    selectedQuestion = questions[rand];
    console.log(selectedQuestion.displayQuestion());
    userResponse = prompt('Enter the correct answer!');

}
console.log('Final Score is: ' + runningScore);




//IIFE
