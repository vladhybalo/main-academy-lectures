import React, {useEffect, useState} from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import { v4 as uuid } from 'uuid';

import ToDoList from "./pages/ToDoList/ToDoList";
import ToDoItem from "./pages/ToDoItem/ToDoItem";
import Button from "./components/Button/Button";

import "./App.css";

const getInitList = () => {
  const list = localStorage.getItem('list');

  if(list) {
    return JSON.parse(list);
  }

  return [];
}

function App() {
  const [list, setList] = useState(getInitList());

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  const onStatusChange = (index) => {
    const newList = list.map((elem, i) => {
      if(index !== i) {
        return elem;
      }

      return {
        ...elem,
        done: !elem.done
      }
    });

    setList(newList);
  };

  const deleteItem = (index) => {
    const newList = [...list.slice(0, index), ...list.slice(index + 1)];

    setList(newList);
  };

  const addItem = (text) => {
    const newList = list.concat({id: uuid(), done: false, description: text});

    setList(newList);
  };

  const changeDescription = (index, text) => {
    const newList = list.map((elem, i) => {
      if(index !== i) {
        return elem;
      }

      return {
        ...elem,
        description: text
      }
    });

    setList(newList);
  };

  const saveToDoItem = (index, text) => {
    index !== undefined ? changeDescription(index, text) : addItem(text)
  } 
  
  return (
    <BrowserRouter>
      <Switch>        
        <Route path="/add-item/:index?">
          <ToDoItem saveToDoItem={saveToDoItem} list={list}/>
        </Route>
        <Route exact path="/">
          <ToDoList list={list} onStatusChange={onStatusChange} deleteItem={deleteItem}/>
          <Link to='/add-item' className="add-item_link">
            Add new Item
          </Link>
        </Route>
        <Redirect to='/'></Redirect>
      </Switch>
        
    </BrowserRouter>
  );
}

export default App;
