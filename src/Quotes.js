import React from "react"
export default function Quotes(props){
    return (
        <div className="quotes">
            <h2>{props.quotes.text}</h2>
            <p>--{props.quotes.author}</p>
        </div>
    )
}