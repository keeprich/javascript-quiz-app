const startButton = document.getElementById('start-btn');
const questionContainerElement = document.getElementById('question-container');
const shuffelQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame);


function startGame() {
   console.log('Game started');
   startButton.classList.add('hide');
   shuffelQuestions = questions.sort(() => Math.random()- .5)
   currentQuestionIndex = 0;
   questionContainerElement.classList.remove('hide');


}

function setNextQuestion() {
    alert('Next Question Please')
}

function selectAnswer() {
    alert('Select Answer Please')
}


const questions = [
    {
        question: 'What is 2 + 2',
        answer: [
            {
                text: '4', correct:true
            },
            {
                text: '22', correct:false

            }
        ]
    }
]