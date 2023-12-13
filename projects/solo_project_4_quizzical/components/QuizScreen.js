// category: "Entertainment: Video Games"
// correct_answer: "McCree"
// difficulty: "medium"
// incorrect_answers: (3) ['Roadhog', 'Soldier 76', 'Junkrat']
// question: "According to Overwatch&#039;s lore, who was once a member of the Deadlock Gang?"
// type: "multiple"

function QuizScreen(props) {
    
    const [questions, setQuestions] = React.useState([])
    const [quizzesTaken, setQuizzesTaken] = React.useState(0)

    // console.log("Questions as kept in state")
    // console.log(questions)
    
    function decodeHtml(html) {
        const areaElement = document.createElement("textarea")
        areaElement.innerHTML = html
        const areaElementVal = areaElement.value
        areaElement.remove()
        
        return areaElementVal
    }

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(response => response.json())
            .then(quizJSON => setQuestions(quizJSON.results.map(quizQuestion => {
                    let answersWithIDs = quizQuestion.incorrect_answers.map(answer => ({
                        id: Math.ceil(Math.random() * 100) * answer.length,
                        text: decodeHtml(answer)
                    }))
                    const correctAnswerID = Math.ceil(Math.random() * 100) * quizQuestion.correct_answer.length
                    const correctAnswerIdx = Math.floor(Math.random() * answersWithIDs.length)
                    answersWithIDs.splice(correctAnswerIdx, 0, {
                        id: correctAnswerID,
                        text: decodeHtml(quizQuestion.correct_answer)
                    })
                    return {
                        id: Math.ceil(Math.random() * 100) * quizQuestion.question.length,
                        questionText: decodeHtml(quizQuestion.question),
                        answers: answersWithIDs,
                        correctAnswer: correctAnswerID,
                        selectedAnswer: 0 // ids start at 1 so this represents before a selection is made
                    }
                }
            )))
    }, [quizzesTaken])

    function updateAnswer(event, qID, ansID) {
        console.log("updating answer")
        setQuestions(oldQuestionState => oldQuestionState.map(oldQuestion =>            
            oldQuestion.id == qID
            ?
            ({...oldQuestion, selectedAnswer: ansID})
            :
            oldQuestion
        ))
    }

    function score() {
        return questions.reduce((accumScore, currQuestion) =>
            currQuestion.selectedAnswer == currQuestion.correctAnswer
            ?
            accumScore + 1
            :
            accumScore
        , 0)
    }

    function resetGame() {
        props.toggleQuizTaken()
        setQuizzesTaken(prevQuizzes => prevQuizzes + 1)
    }

    const questionElements = questions.map(triviaQuestion =>
        <QuizQuestion
            key={triviaQuestion.id}
            questionNumber={triviaQuestion.id}
            questionText={triviaQuestion.questionText}
            answers={triviaQuestion.answers}
            selectedAnswer={triviaQuestion.selectedAnswer}
            correctAnswer={triviaQuestion.correctAnswer}
            updateAnswer={updateAnswer}
            quizTaken={props.quizTaken}
        />
    )

    // when I click Another Round, I don't need to go to the title screen
    // I can just reset the questions
    // I also have to set the quiz to be not taken
    // I want to trigger another fetch, which I can do by having a new field change in
    // the dependencies array for the useEffect
    return (
        <main>
            <div className="questions-container">
                {questionElements}
            </div>
            <button className="check-answers" onClick={props.quizTaken ? resetGame : props.toggleQuizTaken}>
                {props.quizTaken ? "Another Round!" : "Check Answers"}
            </button>
            {props.quizTaken && <p id="quiz-result">You got {score()}/{questions.length} correct</p>}
        </main>
    )
}