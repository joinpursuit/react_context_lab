import React, { useContext } from "react"
import { ThemeContext } from "../../providers/ThemeProvider"

const Home = () => {

    const { theme } = useContext(ThemeContext)
    return (
        <div className={`${theme}`}>
            <div className="welcome">
                <h2>Welcome to my Widgets app!</h2>
                <h3>Do some widget stuff, I guess.</h3>
            </div>
        </div>
    )
}

export default Home;