/*

State Management

App

TitleScreen | QuizScreen

QuizScreen has two states, either the quiz is not taken or it is taken.
Is this state at the App level or at QuizScreen's level?

Once the 'check answers' button is finished:
call toggle quiz taken method
pass quiztaken down as a prop to quiz screen
if quiztaken:
reveal correct answers (might need quiztaken to be passed down to the question)
calculate total correct

State for each question (lives at the QuizScreen level):
question number (id)
the question (string)
answer choices (object w/ id and str)
correct answer (id)
current selection (id)
^ store as an object

Do I use a radio select button?

TODO: be able to select answers and have them save to state

*/


function App() {
    
    const [currentScreen, setCurrentScreen] = React.useState("TitleScreen")
    const [quizTaken, setQuizTaken] = React.useState(false)

    function changeScreen() {
        setCurrentScreen(prevScreen => 
            prevScreen === "TitleScreen" ? "QuizScreen" : "TitleScreen"
        )
    }

    function toggleQuizTaken() {
        setQuizTaken(quizTaken => !quizTaken)
    }

    return (
        <div>
            {
                currentScreen === "TitleScreen"
                ?
                <TitleScreen changeScreen={changeScreen}/>
                :
                <QuizScreen
                    quizTaken={quizTaken}
                    toggleQuizTaken={toggleQuizTaken}
                />
            }
            
        </div>
    
    )
}
