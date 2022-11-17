let startQuiz = document.getElementById("startQuiz");
const questionBox = document.getElementById('questionBox');
const answerChoices = Array.from(document.getElementsByClassName("answers"));
let questionBank = [];
let currentQuestion = {};
let questionCounter = 0;
let readyForQuestion = false;
let score = 0;
const correctAnswers = 50;
const allQuestionsToAsk = 5;
var countdownEl = document.getElementById('countdown');
let titlescreen = document.getElementById('titlescreen');
let highScore = document.getElementById('highScore');
let quizQuestion = [
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
        correct: 'button4'
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
        question: 'Inside which HTML element do we put JavaScript?',
        button1: '<js>',
        button2: '<javascript>',
        button3: '<scripting>',
        button4: '<script>',
        correct: 'button4'
    },
];


startQuiz.addEventListener('click', openQuiz);  // opening project only displays a single button
    function openQuiz() {
        startQuiz.classList.add('hide')  // on click this button is set to display: none
        //nextButton.classList.remove('hide')  // on click this button is made visible
        messageBox.classList.remove('hide')  // on click this button is made visible
        answerButtons.classList.remove('hide');  // on click this button is made visible
        timerEvent();  
    };

    function timerEvent() {
        var countDownEvent = 60;  // initially sets the timer to 60 seconds
        timer = setInterval(function() {
        countDownEvent--;
        countdownEl.textContent = countDownEvent;
        if (countDownEvent === 0) {  // if the countdownevent runs to 0 then loads the clearinterval function
            clearInterval(timer);  // clear interval function
            goToHighScore();
            }
        }, 1000);  // interval is every 1000 milliseconds
    };
    
    function startQuizEvent() {
        questionCounter = 0; //initial set to zero, will be used for final score calculation
        score = 0;  //initial set to zero
        questionBank = [...quizQuestion];  //questionBank is where I will store my quizQuestion objects into 1 array
        console.log(questionBank);  // remove later... prints all questions with corresponding answers to the console
        getNextQuestion();  //gets the first question by initializing the getNextQuestion function
    };

    function getNextQuestion() {
        if (questionBank.length === 0){  // if no questions remain, end the question loop
            clearInterval(timer); // return; //window.location.assign("/end.html")
            goToHighScore();
        }
        questionCounter++;  // adds 1 to the total questions for score calculation
        const questionBankIndex = Math.floor(Math.random() * questionBank.length);  // creating question index and generating a random value from math.floor and math.random out of the possible length of the questionBank
        currentQuestion = questionBank[questionBankIndex];  //  the displayed question equals the indexed value of the questionBank
        questionBox.innerText = currentQuestion.question;  // sets the questionBox value to be what the current question is. this is what the user sees in the question window
        answerChoices.forEach(answers => {   // setting up where the possible answers will appear in the html
            const number = answers.dataset['number'];  // using the const number to represent which data-set position will be used
            answers.innerText = currentQuestion['button' + number];  // setting the <h4 class=answers> text to be equal to its corresponding data-set number (button1, button2, button3, button4) 
        });
        questionBank.splice(questionBankIndex, 1);  // when question is used, remove it from the bank
        readyForQuestion = true;
    };

    highScore.addEventListener('click', goToHighScore);  // when highscore link is clicked at the top it runs the function to display the scoreboard window
    function goToHighScore() {
        titlescreen.classList.remove('hide');  // shows the titlescreen card and hides all others
        startQuiz.classList.add('hide');  
        //nextButton.classList.add('hide');  
        messageBox.classList.add('hide'); 
        answerButtons.classList.add('hide');
        clearInterval(timer);
    }
    startQuizEvent();

    returnToMainPage.addEventListener('click', goHome);  //placed a return button on the scoreboard screen that reloads the page and starts over
    function goHome () {
        location.reload();
    }

    // the following section is leading into making the buttons turn green or red based on correct or incorrect,
    // but i'm struggling to complete any further.  thanks for reading my notes.
    answerChoices.forEach(answers => {
        answers.addEventListener("click", e => {
            if(!readyForQuestion)
            return;
            readyForQuestion = false;
            const answerChose = e.target;  //picks the target based on which is clicked
            const userAnswer = answerChose.dataset["number"];  //defining how i am going to log which answer button is chosen
            console.log(userAnswer);  //console logging which answer box is chosen
            getNextQuestion();
        })
    })

    // function closeQuiz() {
    //     startQuiz.classList.add('hide')  // on click this button is set to display: none
    //     nextButton.classList.remove('hide')  // on click this button is made visible
    //     messageBox.classList.remove('hide')  // on click this button is made visible
    //     answerButtons.classList.remove('hide');  // on click this button is made visible
    // };