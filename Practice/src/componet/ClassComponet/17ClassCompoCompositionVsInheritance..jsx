import React, { Component } from 'react';
import CompositionChild from './18CompositionChild'

class ClassCompoCompositionVsInheritance extends Component {
    render() {
        return (
            <>
                <div>
                    <h3>Composition</h3>
                    <p>This is the data from parent compo with html strucutre</p>
                    <p>chlid ni andar html strucutre add karva mate </p>
                    <p>parent mathi child ma kai change and  html strucutre ne add karva mate means Composition </p>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <CompositionChild data="this is props data" imgsrc="/img/xuv700mahndra.jpg">
                                <h1>xuv700mahndra</h1>
                                <h2>this is Composition</h2>
                                <p><strong>color</strong> <i>dark blue</i></p>
                            </CompositionChild>
                        </div>
                        <div className="col-lg-4">
                            <CompositionChild data="this is props data" imgsrc="https://d308ljkq6e62o1.cloudfront.net/img/P2Hp70gkQamg01K8SXUU5A/tab/file.jfif">
                                <h1>xuv700mahndra</h1>
                                <h2>this is Composition</h2>
                                <p><strong>color</strong> <i>white</i></p>

                            </CompositionChild>
                        </div>
                        <div className="col-lg-4">
                            <CompositionChild data="this is props data" imgsrc="https://cdn.24.co.za/files/Cms/General/d/7772/b4f9b668f11c42ecbb80fc43c988fd42.jpg">
                                <h1>xuv700mahndra</h1>
                                <h2>this is Composition</h2>
                                <p><strong>color</strong> <i>red</i></p>
                            </CompositionChild>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassCompoCompositionVsInheritance;