
function Die(props) {

    return (
        <div
            className={
                `die--face ${props.isHeld ? "die--held" : ""}`
            }
            onClick={(event) => props.holdDice(props.id)}
        >
            {props.value}
        </div>
    )
}