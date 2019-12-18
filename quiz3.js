const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {true
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }

}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
            element.classList.add('wrong')
        }
    }

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questions = [
    {
        question: 'Who let the dogs out?',
        answers: [
            { text: 'Woof Woof Woof', correct: true },
            { text: 'Cats', correct: false },
            { text: 'Coders', correct: false },
            { text: 'Founders', correct: false }
        ]

    },
    {
        question: 'When was Land Day?',
        answers: [
            { text: '20 March 1989', correct: false },
            { text: '5 May 1966', correct: false },
            { text: '30 March 1976', correct: true },
            { text: '8 March 1982', correct: false }
        ]
    },
    {
        question: 'Where is the lowest point on land in the world?',
        answers: [
            { text: 'Himmelaya', correct: false },
            { text: 'Antartica', correct: true },
            { text: 'Dead Sea', correct: false },
            { text: 'Eilat', correct: false }
        ]
    },
    {
        question: 'Red on the inside and green on the outside?',
        answers: [
            { text: 'A Cucumber', correct: false },
            { text: 'A Crocodile', correct: false },
            { text: 'An Avocado', correct: false },
            { text: 'A Watermelon', correct: true }
        ]
    },
    {
        question: 'Oldest inhabited city in the world?',
        answers: [
            { text: 'Jerecho', correct: false },
            { text: 'Damascus', correct: true },
            { text: 'Cairo', correct: false },
            { text: 'Beijing', correct: false }
        ]
    },
    {
        question: 'A Holiday only in Nazareth?',
        answers: [
            { text: '4th of July', correct: false },
            { text: 'Anunciation/Bishara', correct: true },
            { text: "Israa and Mi'rag", correct: false },
            { text: 'Christmas', correct: false }
        ]
    },
    {
        question: 'Next elections day?',
        answers: [
            { text: 'March 2', correct: true },
            { text: 'March 11', correct: false },
            { text: 'February 27', correct: false },
            { text: 'April 1', correct: false }
        ]
    },
    {
        question: "Barak Obama's fathers name?",
        answers: [
            { text: 'Philip', correct: false },
            { text: 'Jacob', correct: false },
            { text: 'James', correct: false },
            { text: 'Hussien', correct: true }
        ]
    },
    {
        question: 'Best Knafe in Nazareth?',
        answers: [
            { text: 'Mahroum', correct: false },
            { text: 'Mokhtar', correct: false },
            { text: 'Huwaidy', correct: false },
            { text: 'Sadakah', correct: true }
        ]
    },
    {
        question: 'What is the name of the captain character in Adnan and Lina?',
        answers: [
            { text: 'Rami', correct: false },
            { text: 'Absey', correct: false },
            { text: 'Sidky', correct: false },
            { text: 'Namiq', correct: true }
        ]
    },
]