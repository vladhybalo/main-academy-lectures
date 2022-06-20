import React from "react";
import { Link } from "react-router-dom";

import "./ToDoList.css";

const ToDoList = ({list, onStatusChange, deleteItem})=> {

    return list.map(({done, description, id}, index) => {
        return <div key={id} className="list-item">
            <input type="checkbox" checked={done} onChange={() => onStatusChange(index)}/>
            <p className="list-item_description">
                {description}
            </p>
            <div>
                <button onClick={() => deleteItem(index)}>
                    Del
                </button>
                <Link to={'/add-item/' + index}>
                    Edit
                </Link>
            </div>
        </div>
    })
};

export default ToDoList;