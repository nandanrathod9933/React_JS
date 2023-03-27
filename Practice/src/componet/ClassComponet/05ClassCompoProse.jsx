import React, { Component } from 'react';
import CustomCardStrcutre from './06CustomCardStrcutre'

class ClassCompoProse extends Component {
    render() {
        return (
            <>
                <div className="row mt-5">
                    <div className="col-3">
                        <CustomCardStrcutre title="prod 1 title" kaushik="https://mdbootstrap.com/img/new/standard/nature/184.webp" />
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre title="prod 2 title" kaushik="https://www.cartoq.com/wp-content/uploads/2021/08/mahindra-xuv700-features-featured.jpg" />
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre title="prod 3 title" kaushik="/xuv700mahndra.jpg" />
                    </div>
                    <div className="col-3">
                        <CustomCardStrcutre title="prod 4 title" />
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoProse;