import React from "react"
import "./index.css"
import Header from "./Header.js"
import TodoItems from "./TodoItems.js"
import Footer from "./Footer.js"
import RandomQuote from "./RandomQuote.js"
import Blogs from "./Blogs"

function App(){
    return (
        <div>
            <Header/>
            <RandomQuote/>
            <TodoItems/>
            <Footer/>
            <Blogs/>
        </div>
    )
}

export default App