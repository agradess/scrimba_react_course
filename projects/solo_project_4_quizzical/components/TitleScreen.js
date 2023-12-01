
function TitleScreen(props) {
    
    return (
        <main>
            <h1 className="title">Quizzical</h1>
            <p>Obviously America's favorite quizzical quizzing game!</p>
            <button
                className="title-screen-start"
                onClick={props.changeScreen}
            >
                Start Quiz
            </button>
        </main>
    )
}