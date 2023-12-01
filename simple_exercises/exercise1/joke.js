
function Joke(props) {
    
    let {setup, punchline} = props

    return (
        <div>
            <p>{setup}</p>
            <p>{punchline}</p>
        </div>
    )
}