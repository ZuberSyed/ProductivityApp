import React from "react"

export default class Todo extends React.Component{
    constructor(){
        super()
        this.state={
            isEditing:false,
            newName  :""
        }
    }
    handlesChange = (e) =>{
        const {name,value} = e.target
        this.setState ({[name]:value})
    }
    handlesSubmit = (e) =>{
        e.preventDefault()
        this.props.handleEdit(this.props.items.id,this.state.newName)
        this.setState({newName:"",isEditing:false})
    }
    render(){
        const styles ={
            color:"#aaa",
            textDecoration:"line-through",
            fontStyle:"italic"
        }
        const editingTemplate =(
               <div>
                   <form onSubmit={this.handlesSubmit}>
                       <input
                           type="text"
                           placeholder="Rename todo"
                           name="newName"
                           value={this.state.newName}
                           onChange={this.handlesChange}
                       />
                       <button onClick={() => this.setState({isEditing:true})}>Save</button>
                       <button onClick={() => this.setState({isEditing:false})}>Cancel</button>
                </form>
               </div>
        )
        const viewTemplate =(
               <div>                       
                   <label style={this.props.items.complete ? styles : null}>
                       <input
                           type="checkbox"
                           checked={this.props.items.complete}
                           onChange={() => this.props.handleChecked(this.props.items.id)}
                       />
                       {this.props.items.text}
                   </label>
                   <button className="delBtn" onClick={() => this.props.handleDelete(this.props.items.id)}>X</button>
                   <button className="editBtn" onClick={() => this.setState({isEditing:true})}>🖊</button>
               </div>
        )
        return <div>{this.state.isEditing ? editingTemplate : viewTemplate}</div>
        }
}