import React from "react"

function TodoList(props){
    const styles={
        textDecoration:"line-through",
        color:"#aaa"
    }
    return(
        <div className="todos"> 
            <label style={props.completed ? styles :null}>
            <input
                type="checkbox"
                checked={props.props}
                onChange={props.secondChange}
            />{props.todo}</label>
        </div>
    )
}

export default TodoList