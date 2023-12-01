
function App() {
    
    const [mode, setMode] = React.useState("light")

    function toggleMode() {
        setMode(prevMode => prevMode === "dark" ? "light" : "dark")
    }

    return (
        <div className="container">
            <Navbar mode={mode} toggle={toggleMode}/>
            <Main mode={mode}/>
        </div>
    )
}

// ReactDOM.render(<App />, document.getElementById("root"))