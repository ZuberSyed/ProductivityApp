import React from"react"

function Header(){
    return (
        <header className="header">
            <h1>Productivity App</h1>
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="stars">stars</li>
                    <li className="notifications">notifications</li>
                    <li><a href="https://twitter.com/intent/tweet/?text=" className="share">Share</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header