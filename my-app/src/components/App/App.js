import React from 'react';
import './App.css';
import Input from '../Input/index'
import List from '../List/index'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todoState, setTodoState] = useState([{ 
    todoText: 'Wash dishes', 
    completion: false, 
    key: uuidv4() 
  }]);

  function addItemToList(newTodoText) {
    setTodoState([...todoState, {
      todoText: newTodoText,
      completion: false,
      key: uuidv4()
    }]);
    console.log(`todoState:`, todoState)
  }
  
  function removeItemFromList(index) {
    todoState.splice(index, 1)
  }

  return (
    <div className="App">
      <li>Test todo: {todoState[0].todoText}</li>
      <Input 
        addItemToList={addItemToList}
      /> 
      <List 
        removeItemFromList={removeItemFromList}
        todoState={todoState}
      />
    </div>
  );
}

export default App;