import React, { Component } from 'react';

class newinput extends Component {
    constructor() {
        super();
        // this.state = { childdata: 0 }
    }

    inputInsideChildCompo = (e) => {
        // console.log("called inputInsideChildCompo", e.target.value);
        this.props.LogicMethod(e.target.value)
    }
    render() {
        return (
            <>

                <h2>dollar to rupee  </h2>
                <input type="text" onChange={this.inputInsideChildCompo} name="" id="" />



            </>
        );
    }
}

export default newinput;