import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const WelcomeToFunctionalCompo = () => {
    let data = "Test"
    const btnclicked = () => {
        console.log("btn click ");
        data = "update"
    }
    const codeString = `
    import React from 'react';
    
    const Demo =()=> {
        return (
                <h1>Welcome to GeeksforGeeks</h1>;
        )
    }
    
    export default Demo;
    
        `;
    return (
        <>
            <div>
                <h2>Functional Compo</h2>
                <p>Functional component is just a simple javascript function; it accepts the data in the form of props and returns the react element. Whereas the class component will be created using the class keyword, and it extends the React.</p>
                <p><strong>Functional components</strong> lack a significant amount of features as compared to <strong>class-based components</strong>. The gap is made up with the help of a special ReactJS concept called <strong>“hooks”</strong>. Hooks are special functions that allow ReactJS features to be used in <strong>functional components</strong>.&nbsp;</p>
                <p><strong>Hook:</strong> React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component.</p>
                <p>Hooks are functions that let you “hook into” React state and lifecycle features from function components</p>
                <p>Hooks allow function components to have access to state and other React features. </p>
                <p>with hook, we can use class component features in functional components such as state , life cycle, pure component, etc  </p>
                <p>This function is a valid React component because it accepts a single <q>props</q>  (which stands for properties) object argument with data and returns a React element. We call such components <q>function components</q> because they are literally JavaScript functions.</p>
                <SyntaxHighlighter language="jsx" style={monokai} customStyle={{

                    margin: "20px 0",
                    borderRadius: "20px"
                }}>
                    {codeString}
                </SyntaxHighlighter>
            </div>

            <p>Welcome to functional Component in reactjs</p>
            <p>{data}</p>
            <button onClick={btnclicked}>click</button>
        </>
    );
};

export default WelcomeToFunctionalCompo;
