import React, { Component } from 'react';
import ProductCard from './ProductCard.jsx';

class Product extends Component {
    render() {
        return (
            <>


                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <ProductCard price="39999"></ProductCard>
                        </div>
                        <div className="col-lg-4">
                            <ProductCard price="44999"></ProductCard>
                        </div>
                        <div className="col-lg-4">
                            <ProductCard price="49999"></ProductCard>
                        </div>
                    </div>
                </div>


            </>
        );
    }
}

export default Product;


