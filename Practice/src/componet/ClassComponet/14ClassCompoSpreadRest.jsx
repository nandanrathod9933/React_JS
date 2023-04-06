import React, { Component } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter/dist/esm/default-highlight';
import { monokai } from 'react-syntax-highlighter/dist/esm/styles/hljs';
class ClassCompoSpreadRest extends Component {
    render() {
        const codeString = `
        function myBio(firstName, lastName, ...otherInfo) {
                         return otherInfo;
        };

        const additionRest = (a, ...b) => {
                         return b;

        }
        `;
        // Define a function with two regular parameters and one rest parameter:
        // argument mathi ak karta vadhu value pase kari hoy tene parameter receive karse ... thi
        //rest = baki vadhelu je  bhi hase te teni andar aviyu (je value lavse te arrowe andar batvase )
        //called of addition a value 50 value of b  (3) [40, 60, 70] 
        let Rest = ""
        const additionRest = (a, ...b) => {
            console.log("called of addition a value", a, "value of b ", b);
            return Rest = <p>{("called of addition a value" + a + "value of b " + b)}</p>
        }
        // data = <p>additionRest(50, 40, 60, 70)</p>
        additionRest(50, 40, 60, 70, 90, 99, 77)
        // additionRest(90, 40)



        let Spread = ""
        const additionSpread = (a, b, c, d) => {
            console.log("called of addition a value", a, b, c, d);
            return Spread = <p>{("value fo a " + a + "value of b " + b + "value of c" + c + "value of d" + d)}</p>
        }
        additionSpread(50, 40, 60, 70)
        const numbers = [1, 2, 3, 4]
        // spread = arrow ni andar ni value ne apde define karela parameter ne apvi hoi tyare 
        // spread = argument mathi parameter ma data ne chatkav kare che  
        additionSpread(numbers)
        additionSpread(...numbers)
        // additionSpread(90, 40)






        return (
            <div>
                <h2>Rest</h2>
                {Rest}
                <h2>Spread</h2>
                {Spread}
                <div>

                    <SyntaxHighlighter language="jsx" style={monokai}>
                        {codeString}
                    </SyntaxHighlighter>
                </div>

                function myBio(firstName, lastName, ...otherInfo) &#123; <br />
                &nbsp;&nbsp;&nbsp; return otherInfo;<br />
                &#125;<br />
                // Invoke myBio function while passing five arguments to its parameters: <br />
                myBio("Oluwatobi", "Sofela", "CodeSweetly", "Web Developer", "Male");

                <br />
                const myName = ["Sofela", "is", "my"];
                <br />
                const aboutMe = ["Oluwatobi", ...myName, "name."];
                <br />
                <p>About me : aboutMe</p>

                const numbers = [1, 3, 5, 7];<br />

                function addNumbers(a, b, c, d)&#123;<br />
                &nbsp;&nbsp;&nbsp;return a + b + c + d;<br />
                &#125;<br />

                console.log(addNumbers(...numbers));
                <br />
                console.log(aboutMe);
                {/* {this.getDataSpread(arr)} */}

            </div>
        );
    }
}

export default ClassCompoSpreadRest;