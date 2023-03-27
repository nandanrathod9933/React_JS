import React, { Component } from 'react';

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
        let something = 'Data'
        // const changedataFun = () => {
        //     console.log("called");
        //     something = "change"
        // }
        return (
            <>
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