import React from "react"

class Blogs extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    render(){
        return(
            <div>
                <div  className="card">
                    <img src="" alt="cardImg"/>
                    <h4>Card Title {this.state.count}</h4>
                    <p>Card Paragraph</p>
                </div>
            </div>
        )
    }
}

export default Blogs

