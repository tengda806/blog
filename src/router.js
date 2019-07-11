import React from "react"
import { BrowserRouter , Route,Switch } from "react-router-dom"

import Home from "./routes/home"
import Editor from "./routes/editor"
import About from "./routes/about"
import Tags from "./routes/tags"
import Detail from "./routes/detail"

class Router extends React.Component{
    render(){
        return ( 
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/editor" exact component={Editor}></Route>
                    <Route path="/about" exact component={About}></Route>
                    <Route path="/tags" exact component={Tags}></Route>
                    <Route path="/detail/:id" exact component={Detail}></Route>
                </Switch>
            </BrowserRouter>
         )
    }
}


export default Router ; 

