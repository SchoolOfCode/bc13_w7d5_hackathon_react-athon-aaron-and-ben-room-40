import React from 'react';
import './App.css';
import Input from '../Input/index'
import List from '../List/index'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import har from './harriot.png'


function App() {
  const [todoState, setTodoState] = useState([]);

  function addItemToList(newTodoText) {
    setTodoState([...todoState, {
      todoText: newTodoText,
      completion: false,
      key: uuidv4()
    }]);
    console.log(`todoState:`, todoState)
  }

  function removeItemFromList(index) {
    setTodoState([...todoState.slice(0, index), ...todoState.slice(index+1)])
  }

  return (
    <div className="App"> <div class = "border">
    <img src={har} alt = "har" class="har"></img>
    </div>
      <Input 
        addItemToList={addItemToList}
      /> <div class="list">
      <List 
        removeItemFromList={removeItemFromList}
        todoState={todoState}
      /> </div>
    </div>
  );
}

export default App;