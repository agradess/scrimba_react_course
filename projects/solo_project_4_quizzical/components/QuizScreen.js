
function QuizScreen(props) {
    
    const [questions, setQuestions] = React.useState([])
    const [selectedAnswers, setSelectedAnswers] = React.useState([])

    console.log(questions)

    React.useEffect(() => {
        fetch("https://opentdb.com/api.php?amount=5")
            .then(response => response.json())
            .then(quizJSON => setQuestions(quizJSON.results))
    }, [])

    function updateAnswer(event, qNum, id) {
        console.log("answer for question " + qNum + " updated to " + id)
    }

    const questionElements = questions.map((triviaQuestion, questionNumber) =>
        <QuizQuestion
            key={triviaQuestion.question}
            questionNumber={questionNumber}
            questionText={triviaQuestion.question}
            correctAnswer={triviaQuestion.correct_answer}
            incorrectAnswers={triviaQuestion.incorrect_answers}
            updateAnswer={updateAnswer}
        />
    )

    return (
        <main>
            <div className="questions-container">
                {questionElements}
            </div>
            <button className="check-answers">Check Answers</button>
        </main>
    )
}