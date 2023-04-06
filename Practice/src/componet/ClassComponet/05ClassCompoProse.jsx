import React, { Component } from 'react';
import CustomCardStrcutre from './06CustomCardStrcutre'
import tataharrier from './tataharrier.jpeg'


class ClassCompoProse extends Component {
    render() {
 
        return (
            <>
                <div className="row mt-5">
                    <div className="col-3">
                        {/* prose means ke tag ni value ne attribute ma save karse  */}
                        {/* imgsrc google mathi imgaddress copy kari ne  laviya chiye */}
                        <CustomCardStrcutre title="scorpio" imgsrc="https://www.financialexpress.com/wp-content/uploads/2022/06/mahindra-scorpio-classic-variants-and-pricing.jpg" paragraph='The Mahindra Scorpio has 3 Diesel Engine on offer. The Diesel engine is 2523 cc and 2179 cc and 1997 cc . It is available with Manual & Automatic transmission.' />
                    </div>
                    <div className="col-3">
                        {/* imgsrc ma img import kari compoent tarike lidhu che  */}
                        <CustomCardStrcutre title="tataharrier" imgsrc={tataharrier} paragraph="Tata Harrier is a 5 seater SUV available in a price range of Rs. 15 - 24.07 Lakh*. It is available in 24 variants, a 1956 cc, / and 2 transmission options" />
                    </div>
                    <div className="col-3">
                        {/* public folder ma path ni jem lidhe le che  */}
                        <CustomCardStrcutre title="xuv700mahndra" imgsrc="/img/xuv700mahndra.jpg" paragraph="Mahindra XUV700 is a 5 seater SUV available in a price range of Rs. 13.45 - 25.48 Lakh*. It is available in 23 variants, 2 engine options that are BS6 compliant" />
                    </div>
                    <div className="col-3">
                        {/* prublc folder ma process.enc lakhi ne img no path lakhva no  */}
                        <CustomCardStrcutre title="mahndra thar" imgsrc={process.env.PUBLIC_URL + '/img/thar.jpg'} paragraph="Mahindra Thar is a 4 seater SUV available in a price range of Rs. 9.99 - 16.49 Lakh*. It is available in 13 variants, 3 engine options that are BS6 compliant .." />
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoProse;