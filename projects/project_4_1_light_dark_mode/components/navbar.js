
function Navbar(props) {
    
    return (
        <nav className={props.mode === "light" ? "nav_light" : "nav_dark"}>
            {/* get image icon later */}
            <h3 className="nav_logo_text">ReactFacts</h3>
            <h4 className={`nav_app_title ${props.mode === "light" ? "nav_app_title_light" : "nav_app_title_dark"}`}>
                <span className="nav_toggle_light_btn">Light</span>
                <label class="switch">
                    <input
                        type="checkbox"
                        name="color_scheme"
                        checked={props.mode == "dark"}
                        onChange={props.toggle}
                    >
                    </input>
                    <span class="slider round"></span>
                </label>
                <span className="nav_toggle_dark_btn">Dark</span>
            </h4>
        </nav>
    )
}