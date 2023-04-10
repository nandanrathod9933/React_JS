import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCardImage
} from 'mdb-react-ui-kit';
class CompositionChild extends Component {
    render() {
        return (
            <>
                <MDBCard>
                    <MDBCardImage src={this.props.imgsrc} alt='...' position='top' style={{ height: "200px", objectFit: "cover" }} />
                    <MDBCardBody>
                        <MDBCardText>
                            {this.props.children}
                            {this.props.data}
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </>
        );
    }
}

export default CompositionChild;