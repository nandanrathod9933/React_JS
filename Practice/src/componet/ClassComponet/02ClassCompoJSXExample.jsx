import React, { Component } from 'react';

class ClassCompoJSXExample extends Component {
    changeDataDmFunction = () => {
        console.log("called changeDataDmFunction");
    }
    render() {
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
                <button onClick={this.changeDataDmFunction}>click changeDataDmFunction</button>


            </>

        );
    }
}

export default ClassCompoJSXExample;