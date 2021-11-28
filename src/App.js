import React from "react"
import "./index.css"
import uuid from "react-uuid"
import Header from "./Header"
import Quotes  from "./Quotes"
import Footer from "./Footer"
import Todo from "./Todo"
export default class App extends React.Component{
    constructor(){
        super()
        this.state ={
            quote:[],
            isLoading:false,
            isLogin:true,
            title:"Productivity App",
            todo:"",
            list:[],
            email:"",
            password:"",
            completed:false,
        }
    }
    async componentDidMount(){
        this.setState({isLoading:true})
            const response = await fetch('https://type.fit/api/quotes')
            const data = await response.json()
            const randomQuote = data[Math.floor(Math.random()*data.length)]
            this.setState({quote:randomQuote,isLoading:false})
        }
        handleChange = (e) =>{
            const {name,value} = e.target
            this.setState({[name]:value}) 
        }
        handleLogin = (e) =>{
            e.preventDefault()
            this.setState(prevState =>{
            return{
                isLogin:!prevState.isLogin,
                email:"",
                password:""
            }
            })
        }
        handleSubmit = (e)=>{
            e.preventDefault();
            const uid = uuid()
            const updatedData ={
                id:uid,
                complete:this.state.completed,
                text:this.state.todo
            }
            const updatedList = this.state.list.concat([updatedData]) 
            this.setState({list:updatedList}) 
        }
        handleChecked = (id) =>{
            this.setState(prevState =>{
                const updatedTodos = prevState.list.map(todo => {
                    if(todo.id === id){
                        return{
                            ...todo,
                            complete:!todo.complete
                        }
                    }
                    return todo
                })
                return{
                    list:updatedTodos
                }
            })
        }
        handleDelete = (id) =>{
            const deleteTodos = this.state.list.filter(ele => ele.id !== id)
            this.setState({list:deleteTodos})
        }
        handleEdit = (id,newTodoName) =>{ 
            this.setState(prevState =>{
                const editedTodos = prevState.list.map(editItem => {
                    if(editItem.id === id){
                        return{
                            ...editItem,
                            text:newTodoName
                        }
                    }
                    return editItem
                })
                return{
                    list:editedTodos
                }
            })
        }
    render(){
        const taskText = this.state.list.length >1 ? "tasks" : "task"
        if(this.state.isLogin){
            return(
                <div>
                    <Header title={this.state.title} handleLogin={this.handleLogin}/>
                    {this.state.isLoading ? 
                        <div className="loading"></div> :
                        <Quotes quotes={this.state.quote}
                    />}
                    <div className="main">
                    <div className="todoList">
                    <h3>Your Todo list</h3>
                   <form onSubmit={this.handleSubmit} className="form">
                       <input
                        type="text"
                        placeholder="enter todo"
                        name="todo"
                        value={this.state.todo}
                        onChange={this.handleChange}
                      />
                       <button className="btn">Add Todo</button>
                       </form> 
                       <p style={{textAlign:"center",fontSize:"1.2rem"}}>You have added {this.state.list.length} {taskText} to list</p>
                    </div>
                       <div className="tasksitems" style={{border:this.state.list.length ===0 ? "none" : "5px solid rgb(151, 207, 240)"}}>
                          {this.state.list.map(item => 
                          <Todo key={item.id} 
                            items={item}
                            handleChecked={this.handleChecked}
                            handleDelete={this.handleDelete}
                            handleEdit={this.handleEdit}
                            /> )}
                       </div>
                    </div>
                   <Footer/>
                </div>
            )}
                else{
                   //Login Page
                    return(
                        <div>
                            <div className="bg"></div>
                            <div>
                                <h1>{this.state.title}</h1>
                                <h2>Increase your Productivity</h2>
                            </div>
                            <form onSubmit={this.handleLogin}>
                                <input
                                    type="email"
                                    name="email"
                                    value={this.state.email}
                                    placeholder="example@gmail.com"
                                    onChange={this.handleChange}
                                    required
                                />
                                <br/>
                                <input
                                    type="password"
                                    name="password"
                                    value={this.state.password}
                                    placeholder="password"
                                    onChange={this.handleChange}
                                    required
                                />
                                <br/>
                                <button>{this.state.isLogin ? "LogOut" : "LogIn"}</button>
                            </form>
                        </div>
                    )
                }
        }
} 