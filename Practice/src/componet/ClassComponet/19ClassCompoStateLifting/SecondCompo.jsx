import React, { Component } from 'react';
import Newinput from './newinput.jsx';

class SecondCompo extends Component {
    constructor() {
        super();
        this.state = { childdata: null }
    }

    inputInsideChildCompo = (fromChild) => {
        // console.log("called inputInsideChildCompo",e);
        // console.log("called inputInsideChildCompo",e.target);
        // console.log("called inputInsideChildCompo", e.target.value);
        // this.setState({ childdata: e.target.value })
        // console.log(fromChild);
        this.props.fromSecondCompo(fromChild * 82)
    }
    render() {
        return (
            <>

                <Newinput LogicMethod={this.inputInsideChildCompo} />
                <br />
            </>
        );
    }
}

export default SecondCompo;
