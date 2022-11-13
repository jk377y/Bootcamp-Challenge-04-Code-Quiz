let startQuizButton = document.getElementById('startQuizButton')
let quizQuestion = document.getElementById('quizQuestion')
let answerButtons = document.getElementById('answerButtons')
let button1 = document.getElementById('button1')
let button2 = document.getElementById('button2')
let button3 = document.getElementById('button3')
let button4 = document.getElementById('button4')
let viewHighScore = document.getElementById('viewHighScore')
let nextButton = document.getElementById('nextButton')
let timer = document.getElementById('timer')


startQuizButton.addEventListener('click', startQuiz)

function startQuiz() {
    console.log('I work')
    window.alert('You have 2 minutes to complete the quiz.')
    startQuizButton.classList.add('hide')
    quizQuestion.classList.remove('hide')
    answerButtons.classList.remove('hide')
    viewHighScore.classList.remove('hide')
    timer.classList.remove('hide')
    nextButton.classList.remove('hide')
}


// questionArray = [questionOneObject, questionTwoObject, questionThreeObject, questionFourObject, questionFiveObject, questionSixObject, questionSevenObject, questionEightObject, questionNineObject, questionTenObject]
//  random.index

// questionOneObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionTwoObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionThreeObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionFourObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionFiveObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionSixObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionSevenObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionEightObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionNineObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

// questionTenObject = {
//     Question: 'Which item can store multiple values?'
//     button1: 'array'
//     button2: 'class'
//     button3: 'console'
//     button4: 'dot notation'
// }

