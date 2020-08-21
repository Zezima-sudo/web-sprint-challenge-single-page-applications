import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Pizzaform from './components/PizzaForm'




const App = () => {
        return (
            <div className="App">
                <h1>Pizza 4 1337 h4ck3r5</h1>
                <Link to='/'>Home</Link>

                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path="/pizza">
                    <Pizzaform />
                </Route>

            
            </div>
        )
}

ReactDOM.render(<Router><App />,</Router>, document.getElementById("root"));
