import React from 'react';
import { useState } from 'react';

const FunctionalCompoTodolist = () => {
    const [newItem, setnewItem] = useState("");
    const [items, setitems] = useState([]);
    const [showEdit, setShowEdit] = useState(-1);
    const [updatedText, setUpdatedText] = useState("");

    const addItem = () => {
        // console.log(newItem); 
        const item = {
            id: Math.floor(Math.random() * 1000),
            value: newItem
        }
        if (!newItem) {
            alert("enter an item");
            return;
        }
        setitems(oldList => [...oldList, item])
        setnewItem("");
    }

    const removeitem = (id) => {
        console.log(id);
        const newArray = items.filter(item => item.id !== id);
        setitems(newArray);

    }
    function editItem(id, newText) {
        // Get the current item
        const currentItem = items.filter((item) => item.id === id);

        // Create a new item with same id
        const newItem = {
            id: currentItem.id,
            value: newText,
        };

        removeitem(id);

        // Replace item in the item list
        setitems((oldList) => [...oldList, newItem]);
        setUpdatedText("");
        setShowEdit(-1);
    }

    return (
        <>
            <h1> todo list</h1>

            <input type="text"
                placeholder='add an item...'
                value={newItem}
                onChange={e => setnewItem(e.target.value)}
            />
            <button onClick={addItem}>Add</button>
            {/* 
            {items.map(item => {
                return (
                    <li key={item.id}>{item.value} <button onClick={() => removeitem(item.id)}>delet</button> <button onClick={() => edititem(item.value)}>edit</button></li>
                )
            })} */}

            {/* 3. List of todos (unordered list) */}
            <ul>
                {items.map((item) => {
                    return (
                        <div>
                            <li key={item.id} onClick={() => setShowEdit(item.id)}>
                                {item.value}
                                <button
                                    className="delete-button"
                                    onClick={() => removeitem(item.id)}
                                >
                                    remove
                                </button>
                            </li>

                            {showEdit == item.id ? (
                                <div>
                                    <input
                                        type="text"
                                        value={updatedText}
                                        onChange={(e) => setUpdatedText(e.target.value)}
                                    />
                                    <button onClick={() => editItem(item.id, updatedText)}>
                                        Update
                                    </button>
                                </div>
                            ) : null}
                        </div>
                    );
                })}
            </ul>

        </>
    );
};

export default FunctionalCompoTodolist;