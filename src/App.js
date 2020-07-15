import React, { Component } from "react";
import '../src/components/css/style.css'
import Header from '../src/components/Header'



class App extends Component {

    render() {

        return ( <
            div className = "App" >
            <
            Header / >

            <
            div style = {
                { "margin-top": "200px" }
            } >
            <
            h1 > Welcome To ProductHub < /h1>  <
            h4 > content < /h4>  <
            /div>  <
            /div>
        );
    }
}

export default App;