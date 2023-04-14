import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';

class Product extends Component {
    render() {
        return (
            <>

            
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="col-lg-4">
                            <ProductCard></ProductCard>
                        </div>
                        <div className="col-lg-4">
                            <ProductCard></ProductCard>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default Product;


