import React, { Component } from 'react';

class ClassCompoControlledCompo extends Component {
    constructor(props) {
        super(props);
        this.state = { inputUname: "update  ", username: null, formdata: {} }
    }

    SetInputData = (event) => {
        // console.log("event", event);
        // console.log("event.target", event.target);
        // console.log("event.target.value", event.target.value);
        this.setState({ inputUname: (event.target.value) })
    }
    // submitdata = (event) => {
    //     event.preventDefault();
    //     // console.log("called", this.state);
    //     console.log("submitted", this.state.formdata);

    // }
    lastname = (event) => {
        // console.log(event);
        this.setState((data) => {
            console.log(data);
        })
    }
    sumbitdata = (event) => {
        event.preventDefault()
        // console.log("called");
        console.log(this.state.formdata);
    }
    render() {
        return (
            <>
                <div>
                    <p>
                        In HTML, form elements such as &lt;input&gt;, &lt;textarea&gt;, and &lt;select&gt; typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with setState().
                    </p>
                    <p>
                        We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a <q>controlled component</q>.
                    </p>

                    <p>
                        For example, if we want to make the previous example log the name when it is submitted, we can write the form as a controlled component:
                    </p>
                </div>


                <h2 >set Data to State with function </h2>
                <input type="text" onChange={this.SetInputData} name='username' id='username' value={this.state.inputUname} />
                {this.state.inputUname}



                <h2 className='mt-5'>set Data to State inside input arrow </h2>
                <form action="">
                    {JSON.stringify(this.state)}
                    <input type="text" name='uname' id='uname' onChange={(event) => { this.setState({ username: event.target.value }) }} />
                    <input type="submit" value="submit" onClick={this.sumbitdata} />
                    {this.state.username}
                    {JSON.stringify(this.state)}
                    <input type="text" onChange={
                        (event) => {
                            this.setState({ username: event.target.value })
                        }} />
                    {this.state.username}
                    <input type="submit" value="sumbit" onClick={this.submitdata} />
                </form>

                <h2 className='mt-5'>set multiple Data to single State object inside input arrow</h2>
                <form action="">
                    <input type="email" name='email' id='email' onChange={(event) => {
                        this.setState((data) =>
                        ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="password" name='password' id='password' onChange={(event) => {
                        this.setState((data) =>
                        ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="text" name='lastname' placeholder='lastname' onChange={this.lastname} />
                    <input type="submit" value="sumbit" onClick={this.sumbitdata} />

                </form>


                {/* <form action="">
                    {JSON.stringify(this.state.formdata)}
                    <input type="email" name="email" id="email" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="password" name="password" id="password" onChange={(event) => {
                        this.setState((data) => ({
                            formdata: { ...data.formdata, [event.target.name]: event.target.value }
                        }))
                    }} />
                    <input type="submit" value="sumbit" onClick={this.submitdata} />
                </form> */}
            </>
        );
    }
}

export default ClassCompoControlledCompo;