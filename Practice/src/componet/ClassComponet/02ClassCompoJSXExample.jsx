import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

class ClassCompoJSXExample extends Component {
    changeDataDmFunction = () => {
        console.log("called changeDataDmFunction");
    }
    render() {
        const codeString = `const myElement = <h1>React is {5 + 5} times better with JSX</h1>;
        output : React is 10 times better with JSX
        `;
        const koidata = 'somthing'
        const changedata = () => {
            console.log("called");
        }
        return (
            <>
                <div>
                    <h3>JSX</h3>
                    <p> JSX stands for JavaScript XML. JSX allows us to write HTML in React. JSX makes it easier to write and add HTML in React.</p>
                </div>

                {koidata}
                <p>Addition of  7045 + 4035 is {7045 + 4035}</p>

                {/* <button onClick={changedata()}>click</button> */}
                <button onClick={changedata}>click </button>
                <br />
                <br />
                <button onClick={this.changeDataDmFunction} style={{ margin: "10px 0 20px 0" }}>click changeDataDmFunction</button>

                <SyntaxHighlighter language="jsx" style={monokai} customStyle={{

                    marginTop: "10px",
                }}>
                    {codeString}
                </SyntaxHighlighter>
            </>

        );
    }
}

export default ClassCompoJSXExample;