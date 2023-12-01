
function Main(props) {
    return (
        <main className={props.mode === "light" ? "" : "main_dark"}>
            <h1 className={props.mode === "light" ? "main_title_light" : "main_title_dark"}>Fun Facts About React</h1>
            <ul className={`main_react_facts_ul ${props.mode === "light" ? "main_react_facts_ul_light" : "main_react_facts_ul_dark"}`}>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}