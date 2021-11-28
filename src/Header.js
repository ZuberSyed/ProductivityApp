import React from "react"

export default function Header(props){
    return(
        <div className="header">
            <h2>{props.title}</h2>
            <button onClick={props.handleLogin}>Logout</button>
        </div>
    )
}