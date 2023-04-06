import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() {
        return (
            <div>
                <h2>error page </h2>
                <Link to="/">back to home</Link>

            </div>
        );
    }
}

export default ErrorPage;