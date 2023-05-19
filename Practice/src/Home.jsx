import React from 'react';
import ProductCard from './style/ProductCard.jsx'
import FooterCompo from './commonCompo/footer.jsx'

const Home = () => {
    return (
        <>
            <section className='home'>
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="home_text">
                                <img src="/img/applogo.png" alt="" />
                                <h1> <strong style={{ color: "#000000ba" }}>Store.</strong> The best way to buy the products you love.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <ProductCard modelname="iphone 14 pro max" modelprice="129900.00" modelpricetemporary="149999.00" imgsrc={process.env.PUBLIC_URL + '/img/iphone14promax.jpeg'} modeldc="Brighter 17.00 cm (6.7-inch) Super Retina XDR display¹ featuring Always-On, which keeps your info at a glance"></ProductCard>

                <ProductCard modelname="MacBook Pro 13" modelprice="149900.00" modelpricetemporary="199999.00" imgsrc={process.env.PUBLIC_URL + '/img/mac-book13.jpeg'} modeldc="Get more done faster with the next-generation Apple M2 chip and an active cooling system that sustains pro levels of performance"></ProductCard>

                <ProductCard modelname="iPad Pro 11-inch" modelprice="81999.00" modelpricetemporary="99999.00" imgsrc={process.env.PUBLIC_URL + '/img/ipadpro11.png'} modeldc="The Apple M2 chip powers a massive leap in performance for pro workflows and all-day battery life¹"></ProductCard>
            </section>
            <FooterCompo />
        </>
    );
};

export default Home;