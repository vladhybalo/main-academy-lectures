import React, { useRef } from "react";
import { withRouter } from "react-router";

import "./ToDoItem.css";

const ToDoItem = ({history, saveToDoItem, match, list}) => {
    const inputRef = useRef();

    const index = match.params.index !== undefined ? Number(match.params.index) : undefined;

    const saveTask = (e) => {
        e.preventDefault();
        
        saveToDoItem(index, inputRef.current.value);
        history.push('/');   
    }

    const defaultValue = index !== undefined ? list[index].description : undefined;

    return (
        <form>
            <label>
                <input ref={inputRef} defaultValue={defaultValue}></input>
                <p>Enter description</p>
            </label>
            <button className="save-btn" onClick={saveTask}>
                Save
            </button>
        </form>
    )
};

export default withRouter(ToDoItem);