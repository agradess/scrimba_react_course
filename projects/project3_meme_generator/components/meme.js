
// Below is a few of the quiz answers from the React tutorial being followed to make this app.
// Following the quizzes is the Meme component. 

/*

Props vs. State Quiz

The concept of state is similar to cookies in a browser,
these are values that a browser might create and manage itself,
and they react based on how the user iteracts with and changes the page
"Values that a component can maintain between render cycles"


You would use props when you do not want the value to change as the page
changes. "Any time you need to pass data that will determine what gets
displayed on the screen"


You would use state when you want the value to change, either based on user interaction,
or external changes like a change in time. "Any time you need a component to maintain its
own values from within the component, and remember these values between render cycles"


Immutable means cannot be changed, like props and unlike state.

*/

/*
Conditional Rendering Quiz

Conditional Rendering is using declarative statements and variable data to change what is displayed,
both inside our outside of your return statement in your component.

You would use && when, based on a boolean value or expression, you want to show or hide some part of the page.

You would use a ternary when you have a boolean condition, and for both cases you want to display something.

If you have more than two options, it is best to just use an if statement outside of the component's return statement.
*/

/*
Forms Quiz

In a vanilla JS app, you gather all the data right after the form has been submitted.

In a React app, you gather the data when any change to any of the form elements has been detected.

The "name" property should match the name of the state associated with that form element.

A checkbox element saves a boolean value instead of a string value, and you have to control the
component through the "checked" property, not the value property.

In the form tag, to watch for a form submit, you assign your own function to the onSubmit property.
To trigger a form submit, include a button element inside of your form, and whenever that element is
clicked, the form submit will be triggered.
*/

/*
useEffect Quiz

A side effect in React is any operation that React in not in charge of. It is outside the scope of the
program. For example, performing a network call, interacting with local storage, syncing two pieces of state
or fetching data from an API and connecting it to state.

Things that are not side effects in React are within the scope of React, and are managed by React.
Examples of this are re-rendering the UI, or updating state.

If you pass just one parameter to useEffect, it will run any time after the component is rendered, or
after the DOM elements are placed on the screen. If a second parameter is passed, it only runs after those
re-renders where something in the list provided as the second parameter has changed.
The function passed to useEffect does not run during the process of the component being rendered, or while
DOM elements are being placed on the screen.

The depenencies array is a list of variables, including local state, that dictate when the useEffect
function is run, based on any changes to the variables between render cycles. It is the second parameter
to the useEffect function.
*/

function Meme() {
    
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    console.log(allMemes)

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(memeJSON => setAllMemes(memeJSON.data.memes))
    }, [])

    function handleFormChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function getMemeImage(event) {
        // event.preventDefault()
        
        const rand_meme_idx = Math.floor(Math.random() * allMemes.length)
        // const url = memes_array[rand_meme_idx].url // put this back eventually
        const url = allMemes[rand_meme_idx].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    return (
        <main>
            <div className="meme--form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top text"
                    onChange={handleFormChange}
                    value={meme.topText}
                >
                </input>
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom text"
                    onChange={handleFormChange}
                    value={meme.bottomText}
                >
                </input>
                <button
                    className="meme--form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼️
                </button>
            </div>
            <div className="meme">
                <img className="meme--image" src={meme.randomImage}></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

