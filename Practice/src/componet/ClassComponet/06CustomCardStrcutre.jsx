
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
                    <MDBCardImage src={this.props.imgsrc} position='top' alt='...' style={{ height: "200px", objectFit: "cover" }} />
                    <MDBCardBody>
                        <MDBCardTitle className='text-capitalize'>{this.props.title}</MDBCardTitle>
                        <MDBCardText>
                            {this.props.paragraph}
                        </MDBCardText>
                        <MDBBtn href='#'>Buy</MDBBtn>
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


