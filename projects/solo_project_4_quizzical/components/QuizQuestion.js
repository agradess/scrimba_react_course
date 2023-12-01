
function QuizQuestion(props) {
    
    function decodeHtml(html) {
        const areaElement = document.createElement("textarea")
        areaElement.innerHTML = html
        const areaElementVal = areaElement.value
        areaElement.remove()
        
        return areaElementVal
    }

    // rearrange answer choices into a new array
    let allAnswers = [...props.incorrectAnswers]
    const correctAnswerIdx = Math.floor(Math.random() * props.incorrectAnswers.length)
    allAnswers.splice(correctAnswerIdx, 0, props.correctAnswer)

    // map over this new array and create a button for each of the choices
    const answerButtons = allAnswers.map((answerChoice) =>
        <button
            id={answerChoice}
            className="answer-choice"
            onClick={(event) => props.updateAnswer(event, props.questionNumber, answerChoice)}
        >
            {answerChoice}
        </button>
    )

    return (
        <div className="single-question">
            <h2>{decodeHtml(props.questionText)}</h2>
            <div className="answer-choices">
                {answerButtons}
            </div>
            <hr></hr>
        </div>
        
        
    )
}