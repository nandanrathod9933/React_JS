import React, { Component } from 'react';
import SecondCompo from './SecondCompo.jsx';
import Newinput from './newinput.jsx';

class Mainfile extends Component {
    constructor() {
        super();
        this.state = { data: null }
    }
    // inputchange = (event) => {
    //     // console.log("called");
    //     this.setState({ data: event.target.value })
    // }
    // handleInputChange = (fromchild) => {
    //     console.log("called inside main", fromchild);
    //     // console.log("called inside main state", this.state);
    //     // dollar
    //     console.log(fromchild);
    //     this.setState({ data: fromchild * 80 })
    // }

    // newhandleInputChange = (newformchild) => {
    //     // console.log("called inside main", fromchild);
    //     // console.log("called inside main state", this.state);
    //     // rupiya
    //     console.log("newhandleInputChange", newformchild / 80);
    //     this.setState({ newdata: newformchild / 80 })
    // }
    newhandleInputChange = (fromChild) => {
        this.setState({ data: fromChild / 82 })
    }
    fromSecondCompoMethod = (SecondCompoRes) => {
        this.setState({ data: SecondCompoRes })
    }

    render() {
        return (
            <>

                <Newinput LogicMethod={this.newhandleInputChange} />
                <SecondCompo fromSecondCompo={this.fromSecondCompoMethod} />
                {/* <input type="text" value={this.state.data} /> */}
                {JSON.stringify(this.state.data)}
                {/* <input type="text" value={this.state.newdata} /> */}
            </>
        );
    }
}

export default Mainfile;