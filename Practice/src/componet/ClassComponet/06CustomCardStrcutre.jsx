
import React, { Component } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn
} from 'mdb-react-ui-kit';

class CustomCardStrcutre extends Component {
    render() {
        return (
            <div>

                <MDBCard>
                    <MDBCardImage src={this.props.kaushik} position='top' alt='...' />
                    <MDBCardBody>
                        <MDBCardTitle>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            Some quick example text to build on the card title and make up the bulk of the card's content.
                        </MDBCardText>
                        <MDBBtn href='#'>Button</MDBBtn>
                    </MDBCardBody>
                </MDBCard>
            </div>
        );
    }
}

export default CustomCardStrcutre;
// export default function CustomCardStrcutre() {
//     return (
//     );
// }