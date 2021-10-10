import React from "react"

class RandomQuote extends React.Component{
    constructor(){
        super()
        this.state={
            quote:[],
            isLoading:false
        }
    }
    componentDidMount(){
        this.setState({isLoading:true})
        fetch('https://type.fit/api/quotes')
        .then(response => response.json())
        .then(data =>{
            const random = data[Math.floor(Math.random() * data.length)]
            this.setState({
                quote:random,
                isLoading:false
            })
        })
    }
    render(){
    return(
        <div>
            {this.state.isLoading ? <p>Loading quote...</p> : <div><h3>"{this.state.quote.text}"</h3><p>--{this.state.quote.author}</p></div>}
        </div>
    )  
       
    }
}


export default RandomQuote