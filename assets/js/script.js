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

questionArray1
answersArray1