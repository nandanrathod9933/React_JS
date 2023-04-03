import React, { Component } from 'react';
import LoaderCompo from './09LoaderCompo.jsx';

class ClassCompostatelifecycleLoader extends Component {
    constructor(props) {
        super(props);
        // Declare State with default value for loader enable disable functionalities START
        this.state = { data: "Something", laoder: false }
        // Declare State with default value for loader enable disable functionalities END
    }


    // componentWillReceiveProps has been renamed React
    // componentWillMount() {
    //     console.log("componentWillMount");
    // } 


    // The componentDidMount() method is called after the component is rendered.
    // render pachi ne je method called thai  tene componentDidMount() kevai
    componentDidMount() {
        console.log("componentDidMount");
        // Using setTimeOut function make chnages in state after 2sec START
        setTimeout(() => {
            // console.log("called");
            // setstate thi loader and data ni value change kari che 
            this.setState({ data: "nandan", laoder: true })
        }, 2000);
        // Using setTimeOut function make chnages in state after 2sec END
    }

    // Use shouldComponentUpdate() to let React know if a component’s output is not affected by the current change in state or props. The default behavior is to re-render on every state change, and in the vast majority of cases you should rely on the default behavior.
    //jyare props and state ni value ke event ma jyare component refresh karva ni jarur pade tyare shouldcomponentupdate ni value true ke flase lakhva ni jarur che je thi component refresh thai che

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log("shouldComponentUpdate");
    //     // return false
    //     return true
    // }  

    // componentWillReceiveProps has been renamed React

    // componentWillReceiveProps() {
    //     console.log("componentWillReceiveProps");
    // }


    //The componentDidUpdate method is called after the component is updated in the DOM.
    // jyare component updated thai gayo hoi tyare componentDidUpdate() method called thai che

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
        // Using setTimeOut function make chnages in state after 2sec START
        setTimeout(() => {
            console.log("componentDidUpdate time out");
            // setstate thi loader ni value change kari che 
            this.setState({ laoder: false })
        }, 1000);
        // Using setTimeOut function make chnages in state after 2sec end

    }


    // The componentWillUnmount method is called when the component is about to be removed from the DOM.
    // jyare component mathi bija component ma jai tyare kak change karvo hoi tyare

    // componentWillUnmount() {
    //     console.log("componentWillUnmount");
    // }

    
    // componentWillReceiveProps has been renamed React
    // componentWillUpdate(nextProps, nextState) {
    // }


    render() {
        // variable declaration with diff default values and its impact
        let HtmlDisp = null;  //variable with null value will be adopt any data with its type
        // const HtmlDisp = "";  //variable with empty value will be adopt any value with only string type
        // const HtmlDisp = 0;   //variable with empty value will be adopt any value with only number type
        // const HtmlDisp = {};  //variable with empty value will be adopt any value with only object type
        // const HtmlDisp = [];  //variable with empty value will be adopt any value with only array type


        if (this.state.laoder) {
            // jyare loader ni value true thase tyare loader show thase
            HtmlDisp = <LoaderCompo />
        } else {
            // jyare loader ni value flase thase tyare data change and show thase
            HtmlDisp = <p>{this.state.data}</p>
        }
        // console.log("render");

        return (
            <div>
                <p>Change Data</p>
                {/* JSON.stringify thi koi pan datatype ni value ne string batva mate  */}
                <p>     <strong> JSON.stringify </strong>        When sending data to a web server, the data has to be a string.</p>
                {JSON.stringify(this.state.laoder)}
                {/* “ternary operator”  START  condition ? "true value" : "flase value" */}
                {/* {this.state.laoder ? <LoaderCompo /> : <p>   {this.state.data}</p>} */}
                {/* {this.state.laoder ? <img src="https://miro.medium.com/v2/resize:fit:1400/1*CsJ05WEGfunYMLGfsT2sXA.gif" alt="" /> : <p>Data</p>} */}
                {/* “ternary operator”  end */}

                {/* <button onClick={changeDataFunc}>Click</button> */}
                {HtmlDisp}

                <button onClick={() => this.setState({ data: "Testing" })}>Click</button>
                {/* <p><strong>State</strong>{this.state.data}</p> */}
            </div>
        );
    }
}

export default ClassCompostatelifecycleLoader;