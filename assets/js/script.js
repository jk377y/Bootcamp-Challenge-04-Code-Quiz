// grabbing all of the elements from the html
const startBtn = document.getElementById('startBtn');
const quizBox = document.getElementById('quizBox');
const questionBox = document.getElementById('questionBox');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');
const titleScreen = document.getElementById('titleScreen');
const endScreen = document.getElementById('endScreen');
const finalScore = document.getElementById('finalScore');
const initialsInput = document.getElementById('initialsInput');
const submitBtn = document.getElementById('submitBtn');
const scoreScreen = document.getElementById('scoreScreen');
const scoreList = document.getElementById('scoreList');
const returnToMainPage = document.getElementById('returnToMainPage');
// creating an array of objects for the questions and answers
const quizQuestion = [
    {
        question: 'Which item can store multiple values?',
        button1: 'array',
        button2: 'class',
        button3: 'console',
        button4: 'dot notation',
        correct: 'button1'
    },
    {
        question: 'Which item does not belong?',
        button1: 'let',
        button2: 'var',
        button3: 'app',
        button4: 'const',
        correct: 'button3',
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        button1: 'msg("Hello World");',
        button2: 'msgBox("Hello World");',
        button3: 'alert("Hello World");',
        button4: 'alertBox("Hello World");',
        correct: 'button3'
    },
    {
        question: 'Which item is equal to !NaN?',
        button1: 'earth',
        button2: '1000',
        button3: 'spinach',
        button4: 'donkey',
        correct: 'button2'
    },
    {
        question: 'Inside which HTML element do we link our JavaScript files?',
        button1: '<js>',
        button2: '<javascript>',
        button3: '<scripting>',
        button4: '<script>',
        correct: 'button4'
    },
];
// creating variables to keep track of the current question, score, and time left
let currentQuestion = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {  // start the quiz by hiding the start screen and showing the quiz screen
    document.getElementById('startScreen').classList.add('hide');  // hide the start screen by adding the hide class
    quizBox.classList.remove('hide');  // show the quiz screen by removing the hide class
    timerInterval = setInterval(updateTimer, 1000);  // start the timer by calling the updateTimer function every 1000 milliseconds
    updateTimer();  // call the updateTimer function to display the time left
    displayQuestion(); // call the displayQuestion function to display the first question
}

function updateTimer() {
    document.getElementById('timer').textContent = `Time left: ${timeLeft}`;  // display the time left in the timer element
    if (timeLeft <= 0) {  // if the timer reaches 0, end the quiz
        endQuiz();
    }
    timeLeft--;  // subtract 1 from the timeLeft variable
}

// start by randomizing the questions to add variety to the quiz
const shuffledQuestions = [];
for (let i = quizQuestion.length - 1; i >= 0; i--) {  // loop through the quizQuestion array backwards
    const randomIndex = Math.floor(Math.random() * (i + 1));  // get a random index from 0 to i
    shuffledQuestions.push(quizQuestion[randomIndex]);  // add the question at the random index to the shuffledQuestions array
    quizQuestion.splice(randomIndex, 1); // remove the question at the random index from the quizQuestion array so there are no duplicates
}

function displayQuestion() {  // display the random questions and answers in the quizCard
    const question = shuffledQuestions[currentQuestion];   // get the current question from the shuffledQuestions array
    questionBox.textContent = question.question;  // display the question text in the questionBox element
    button1.textContent = question.button1; // display the answer text in button1
    button2.textContent = question.button2; // display the answer text in button2
    button3.textContent = question.button3; // display the answer text in button3
    button4.textContent = question.button4; // display the answer text in button4
}

function handleAnswerClick(event) { // handle the click event for the answer buttons
    const question = shuffledQuestions[currentQuestion]; // get the current question from the shuffledQuestions array
    const selectedButton = event.target.getAttribute('id'); // get the id of the button that was clicked
    const correctButton = question.correct;  // get the correct answer for the current question
    if (selectedButton === correctButton) {  // if the selected button is the correct answer, change the background color to green and add 1 to the score
        event.target.style.backgroundColor = 'var(--correct)';
        score++;
    } else {  // if the selected button is the wrong answer, change the background color to red and subtract 10 from the time left
        event.target.style.backgroundColor = 'var(--wrong)';
        timeLeft -= 10;
    }
    setTimeout(() => {  // changing the background color back to the default after 1 second
        event.target.style.backgroundColor = '';
        currentQuestion++; // go to the next question
        if (currentQuestion < shuffledQuestions.length && timeLeft > 0) {  // if there are more questions and time left, display the next question
            displayQuestion();
        } else {  // if there are no more questions or time left, end the quiz
            endQuiz();
        }
    }, 1000);  // wait 1 second before changing the background color back to the default
}

function endQuiz() {  // end the quiz
    clearInterval(timerInterval);  // stop the timer
    quizBox.classList.add('hide');  // hide the quiz screen
    endScreen.classList.remove('hide');  // show the score screen
    titleScreen.classList.remove('hide');  // show the score screen
    finalScore.textContent = score * 10 * timeLeft;  // multiply the score by 10 and the time left to get the final score
}

function saveScore(event) { // save the score to local storage
    event.preventDefault(); // prevent the page from refreshing
    const initials = initialsInput.value; // get the initials from the input field
    const scores = JSON.parse(localStorage.getItem('scores')) || [];  // get the scores from local storage or create an empty array if there are no scores
    scores.push({ initials, score: score * 10 * timeLeft }); // add the initials and score to the scores array
    localStorage.setItem('scores', JSON.stringify(scores)); // save the scores to local storage
    endScreen.classList.add('hide'); // hide the score screen
    scoreScreen.classList.remove('hide'); // show the high score screen
  
    scores.sort((a, b) => b.score - a.score);  // sort the scores from highest to lowest
  
    for (let i = 0; i < Math.min(scores.length, 5); i++) { // only display the top 5 scores by looping through the scores array for the 5 highest scores after the sort
      const li = document.createElement('li'); // create a new list item
      li.textContent = `${scores[i].initials}: ${scores[i].score}`; // set the text content of the list item to the initials and score
      scoreList.appendChild(li); // add the list item to the scoreList element
    }
  }

highScore.addEventListener('click', goToHighScore); // event listener for the high score button; sends to high score screen
function goToHighScore() {
    titleScreen.classList.remove('hide'); // show the score screen
    startBtn.classList.add('hide'); // hide the start button
    quizBox.classList.add('hide');  // hide the quiz screen
    clearInterval(timer);  // stop the timer
    scoreScreen.classList.remove('hide');  // show the high score screen
    const scores = JSON.parse(localStorage.getItem('scores')) || [];  // get the scores from local storage or create an empty array if there are no scores
    scores.sort((a, b) => b.score - a.score);  // sort the scores from highest to lowest
    for (let i = 0; i < Math.min(scores.length, 5); i++) {  // only display the top 10 scores by looping through the scores array for the 5 highest scores after the sort
      const li = document.createElement('li');  // create a new list item
      li.textContent = `${scores[i].initials}: ${scores[i].score}`;  // set the text content of the list item to the initials and score
      scoreList.appendChild(li);// add the list item to the scoreList element
    }
  }

returnToMainPage.addEventListener('click', goHome);  // event listener for the return to main page button; sends to main page
function goHome() {
    location.reload();  // reload the page
}

// event listeners to the start and answer buttons
// startBtn initiates the quiz
// answer button calls the handleAnswerClick function to check if the answer is correct
startBtn.addEventListener('click', startQuiz);
button1.addEventListener('click', handleAnswerClick);
button2.addEventListener('click', handleAnswerClick);
button3.addEventListener('click', handleAnswerClick);
button4.addEventListener('click', handleAnswerClick);


submitBtn.addEventListener('click', saveScore);  // save the score when the user clicks the submit button
initialsInput.addEventListener('keydown', event => {  // for added convenience, save the score when the user presses enter
    if (event.key === 'Enter') {  // if the key pressed is enter
        saveScore(event);
    }
});