


function App() {

    const [dieFaces, setDieFaces] = React.useState(allNewDice())
    const [rolls, setRolls] = React.useState(0)
    const [tenzies, setTenzies] = React.useState(false)

    function allNewDice() {
        const diceNums = []
        for (let i = 0; i < 10; i++) {
            diceNums.push({
                id: i,
                value: Math.ceil(Math.random() * 6),
                isHeld: false
            })
        }
        
        return diceNums
    }

    // Checks the win condition every time the dice change and updates state accordingly
    React.useEffect(() => {
        const winningNumber = dieFaces[0].value

        for (let i = 0; i < 10; i++) {
            const currDie = dieFaces[i]
            if (!currDie.isHeld || currDie.value !== winningNumber) return
        }

        setTenzies(true)
    }, [dieFaces])
    
    function rollDice() {
        setDieFaces(oldDieState => oldDieState.map(oldDie => 
            oldDie.isHeld == false
            ?
            {
                ...oldDie,
                value: Math.ceil(Math.random() * 6)
            }
            :
            oldDie
        ))
        setRolls(oldRolls => oldRolls + 1)
    }

    function holdDice(id) {
        setDieFaces(oldDieState => oldDieState.map(oldDie => 
            oldDie.id == id
            ?
            {
                ...oldDie,
                isHeld: !oldDie.isHeld
            }
            :
            oldDie
        ))
    }

    function resetGame() {
        setDieFaces(allNewDice())
        setRolls(0)
        setTenzies(false)
    }

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">
                Roll until all dice are the same.
                Click each die to freeze it at its current value between rolls.
            </p>
            <div className="die--container">
                {
                    dieFaces.map((dieFace, dieFaceIdx) =>
                        <Die
                            key={dieFaceIdx}
                            value={dieFace.value}
                            isHeld={dieFace.isHeld}
                            id={dieFaceIdx}
                            holdDice={holdDice}    
                        />
                    )
                }
            </div>
            <p>Rolls: {rolls}</p>
            <button
                className="roll--button"
                onClick={tenzies ? resetGame : rollDice}
            >
                <h2 className="roll--button--text">{
                tenzies ? "New Game" : "Roll"
                }</h2>
            </button>
        </main>
    )
}