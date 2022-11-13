

let startQuiz = document.getElementById('startQuiz')
let nextButton = document.getElementById('nextButton')
let messageBox = document.getElementById('messageBox')
let answerButtons = document.getElementById('answerButtons')

startQuiz.addEventListener('click', startQuizEvent)

function startQuizEvent() {
    console.log('i work')
    startQuiz.classList.add('hide')
    nextButton.classList.remove('hide')
    messageBox.classList.remove('hide')
    answerButtons.classList.remove('hide')
}
