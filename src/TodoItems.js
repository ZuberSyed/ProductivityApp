import React from "react"
import TodoList from "./TodoList.js"


class TodoItems extends React.Component{
    constructor(){
        super()
        this.state={
            items:[],
            text:"",
        }
        this.handleChange= this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
        this.secondhandleChange=this.secondhandleChange.bind(this)
    }
    handleChange(e){
        const {name,value} =e.target
        this.setState({
            [name] : value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        if(this.state.text===""){
            this.setState(null)
        }else{
            this.setState(prevState =>({
                items:prevState.items.concat(prevState.text),
                text:""
            }))
        }
    }
    secondhandleChange(){
        this.setState({items:!this.state.items})
    }
    render(){
        return(
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <input
                        name="text"
                        type="text"
                        value={this.state.text}
                        placeholder="Enter Todo"
                        onChange={this.handleChange}
                    />
                    <button className="btn">Add Items</button>
                </form>
                <p>You have added {this.state.items.length} todo to list</p>
                {this.state.items.map(item =><TodoList key={item.id} todo={item} secondChange={this.secondhandleChange}/>)}
            </div>
        )
    }
}


export default TodoItems