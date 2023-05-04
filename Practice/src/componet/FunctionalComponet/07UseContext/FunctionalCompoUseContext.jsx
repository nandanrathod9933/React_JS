import React from 'react';
import Form from './form.jsx'
import DarkModeProvider from "./context.jsx"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const FunctionalCompoUseContext = () => {
    return (
        <>
            <h2>useContext</h2>
            <p>useContext returns the context value for the context you passed. To determine the context value, React searches the component tree and finds the closest context provider above for that particular context. It doesn't matter how many layers of components there are between the provider and the Button .</p>
            <p>A Guide to React Context and useContext() Hook. React context provides data to components no matter how deep they are in the components tree. The context is used to manage global data, e.g. global state, theme, services, user settings, and more.</p>



            <DarkModeProvider>
                <Form></Form>
            </DarkModeProvider>
        </>
    );
};

export default FunctionalCompoUseContext;