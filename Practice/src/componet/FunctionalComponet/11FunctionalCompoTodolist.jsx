import React from 'react';
import { useState } from 'react';

const FunctionalCompoTodolist = () => {
    const [newItem, setnewItem] = useState("");
    const [items, setitems] = useState([]);
    const [toggleBtn, settoggleBtn] = useState(true)
    const [editItem, seteditItem] = useState(true)



    const addItem = () => {
        // console.log(newItem);
        const item = {
            id: Math.floor(Math.random() * 1000), //random number leva mate
            value: newItem, // input ni value
        }
        if (!newItem) { // jyare input ni value na made tyre 
            alert("enter an item");
            return;
        } else if (newItem && !toggleBtn) {  // kato input ma kak hase , kak to toggle btn false hase tyare 
            setitems(
                items.map((data) => {
                    if (data.id === editItem) { // je edit btn click karta jeni sathe id match thase tene edit karse
                        return { ...data, value: newItem }
                        // je data che ae to am j rese teni andar khali teni value change thase

                    }
                    return data;
                })
            )
            settoggleBtn(true) // toggle btn karva mate value update thai jai pachi 
            setnewItem("") // jyare update thai jai tyare input value ne kadhva mate
        } else {
            setitems((items) => {
                const updatedList = [...items, item];
                // input ni value ne ak arrow ni spread karvi ne ak variable ma store karvi
                console.log(JSON.stringify(updatedList));
                setnewItem("") // jyare value arrow ma store thai jay tyre input ni value ne kadhva mate
                return updatedList; // retrun ma apde state ma variable store karviyo
            })
        }

        // setitems(oldList => [...oldList, item])
        // setnewItem("");
        console.log(items);

    }

    const removeitem = (id) => {
        console.log(id);
        const newArray = items.filter(item => item.id !== id);
        // jyare remove btn par click kare je btn par click kariyu hoi tena sivay ni badhi value reva dese jene click kariyu aene kadhi nakhse
        setitems(newArray);


        if (id === editItem) { // jyare edit value thati hoi tyare delete karvu hoi tyare 
            setnewItem('') // input ni value remove karse 
        } {
            settoggleBtn(true) // remove kari didhu hoi to tya pachu add avu joi 
        }

    }

    const edititem = (id) => {
        const newEditItems = items.find((data) => {
            return data.id === id; // exactly equal to bey ak jeva che ke nahi
            //jyare je edit btn click thase tema id match kari tema change karse
        })

        console.log(newEditItems);
        settoggleBtn(false) // jyare edit par click kare tyre input ni baju ma update lakhe lu btn avi jai tena mate
        setnewItem(newEditItems.value) // jyare btn click te j btn value ne arrow mathi leva 
        seteditItem(id) // aa state ni je btn click kariyu hase tenu id store kariyu

    }

    return (
        <>
            <h1> todo list</h1>

            <input type="text"
                placeholder='add an item...'
                value={newItem}
                onChange={e => setnewItem(e.target.value)}
            />
            {toggleBtn ? <button onClick={addItem}>Add</button> : <button onClick={addItem}>update</button>}
            {/* <button onClick={addItem}>Add</button> */}


            <h2>list data</h2>
            <ul>
                {items.map((item) => {
                    return (
                        <div key={item.id}>
                            <li key={item.id}>
                                {item.value}
                                <button
                                    className="delete-button"
                                    onClick={() => edititem(item.id)}
                                >
                                    edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => removeitem(item.id)}
                                >
                                    remove
                                </button>
                            </li>
                        </div>
                    );
                })}
            </ul>

        </>
    );
};

export default FunctionalCompoTodolist;