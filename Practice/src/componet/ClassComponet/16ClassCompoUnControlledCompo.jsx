import React, { Component } from 'react';

class ClassCompoUnControlledCompo extends Component {
    constructor() {
        super();
        // this.username = React.createRef();
        this.inpRef = React.createRef();
        this.inpPassRef = React.createRef();

    }
    submitdata = (event) => {
        event.preventDefault()
        // console.log(this.username.current.value);
        console.log(this.inpRef.current.value);
    }

    render() {
        return (
            <>
                <p> uncontrolled component is a component that maintains its own internal state.</p>
                <p>Uncontrolled components are those for which the form data is handled by the DOM itself. “Uncontrolled” refers to the fact that these components are not controlled by React state.</p>
                <p>biji koi event par ae input nahi pan teno reference madse</p>
                <p>react state thi je control na thatu hoi tee Uncontrolled compo</p>

                {/* <form method="post" onSubmit={this.submitdata}>
                    <input type="text" defaultValue="Bob" name='uname' id='uname' ref={this.username} />
                    <input type="submit" value="save" id='btn' name='btn' />
                    {JSON.stringify(this.username)}
                </form> */}
                <div>
                    <form method="post" onSubmit={this.submitdata}>
                        <input type="text" ref={this.inpRef} name="uname" id="uname" /> {JSON.stringify(this.inpRef.current)}
                        <input type="text" ref={this.inpPassRef} name="uname" id="uname" /> {JSON.stringify(this.inpRef)}
                        <input type="submit" value="save" />
                    </form>
                </div>
            </>
        );
    }
}

export default ClassCompoUnControlledCompo;