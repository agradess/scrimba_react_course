
function App() {
    
    const [currentScreen, setCurrentScreen] = React.useState("TitleScreen")

    function changeScreen() {
        setCurrentScreen(prevScreen => 
            prevScreen === "TitleScreen" ? "QuizScreen" : "TitleScreen"
        )
    }

    return (
        <div>
            {
                currentScreen === "TitleScreen"
                ?
                <TitleScreen changeScreen={changeScreen} />
                :
                <QuizScreen />
            }
            
        </div>
    
    )
}
