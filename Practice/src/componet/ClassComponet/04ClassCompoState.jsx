import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class ClassCompoState extends Component {
    constructor(props) {
        super(props);
        this.state = { data: 'somethings', nan: "nandan" }
        // this.changedata = this.changedata.bind(this); // jyare function banvi tyre bind no use karva no bind use kareiya vagar apde state na data change na kari sakiye 
    }

    // changedata() {
    //     // console.log("called");
    //     this.setState({
    //         data: "testing"
    //     })
    // }
    changedata = () => {
        // console.log("called");
        this.setState({
            data: "testing",
            nan: "NANDAN"
        })
    }
    render() {
        const codeString = `class Car extends React.Component {
            constructor(props) {
              super(props);
              this.state = {
                brand: "Ford",
                model: "Mustang",
                color: "red",
                year: 1964
              };
            }
            render() {
              return (
                <div>
                  <h1>My {this.state.brand}</h1>
                  <p>
                    It is a {this.state.color}
                    {this.state.model}
                    from {this.state.year}.
                  </p>
                </div>
              );
            }
          }`;
        let something = 'Data'
        // const changedataFun = () => {
        //     console.log("called");
        //     something = "change"
        // }
        return (
            <>
                <h4>state</h4>
                <p>  The state object is where you store property values that belongs to the component.</p>
                <p>    When the state object changes, the component re-renders.</p>
                <p>Refer to the state object anywhere in the component by using the this.state.propertyname syntax:</p>

                <h4> Changing the state Object</h4>
                <p>     To change a value in the state object, use the this.setState() method.</p>

                <p> When a value in the state object changes, the component will re-render, meaning that the output will change according to the new value(s).</p>
                <h5>syntax</h5>
                <SyntaxHighlighter className="rounded-5" language="jsx" style={monokai} >
                    {codeString}
                </SyntaxHighlighter>
                <p>changedata</p>
                {/* <button onClick={changedataFun}>click</button> */}
                <button onClick={this.changedata}>click</button>
                <p> {something}</p>
                <p><strong>State</strong> {this.state.data} </p>
                <p>{this.state.nan}</p>

            </>
        );
    }
}

export default ClassCompoState;