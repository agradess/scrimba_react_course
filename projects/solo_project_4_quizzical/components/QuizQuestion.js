
function QuizQuestion(props) {
    
    // TODO: when the quiz is finished, clicking a answer button should not do anything

    // map over questions array and create a button for each of the choices
    const answerButtons = props.answers.map(answerChoice => {
            const selectedClass = answerChoice.id === props.selectedAnswer ? "selected-answer" : ""
            // quiz is not finished, and answer is wrong
            let scoredClass = ""
            if (props.quizTaken) {
                scoredClass = answerChoice.id === props.correctAnswer ? "correct-answer" : "wrong-answer"
            } 
            return (
                <button
                    key={answerChoice.id}
                    className={"answer-choice " + selectedClass + " " + scoredClass}
                    onClick={(event) => props.updateAnswer(event, props.questionNumber, answerChoice.id)}
                >
                    {answerChoice.text}
                </button>
            )
        }
    )

    return (
        <div className="single-question">
            <h2>{props.questionText}</h2>
            <div className="answer-choices">
                {answerButtons}
            </div>
            <hr></hr>
        </div>
    )
}