import React from "react"
export default function Header(props){
    const completedFilter = props.items.filter(ele => ele.complete)
    let stars;
    if(completedFilter.length >5){
        stars =5
    }else if(completedFilter.length <=5 && completedFilter.length===4){
        stars = 4
    }else if(completedFilter.length===3){
        stars=3
    }else if(completedFilter.length ===2){
        stars=2
    }else if(completedFilter.length ===1){
        stars =1
    }else{
        stars =0
    }
    return(
        <div className="header">
            <h2>{props.title}</h2>
            <nav className="navbar">
                <ul className="navbar-nav">
                <li><a href={`https://twitter.com/intent/tweet/?text=Hey!!! I've Just earned ${stars} stars in Productivity`}>Share your Progress</a></li>
                <li><button onClick={props.handleLogin} id="logBtn">Logout</button></li>
                </ul>
            </nav>
        </div>
    )
}