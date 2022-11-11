import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import Input from '../Input/index'
import List from '../List/index'
import { useState } from 'react';

function App() {
  const [todoState, setTodoState] = useState([]);

  function addItemToList() {
    setTodoState()
  }


  return (
    <div className="App">
      <Input 
      />
      <List 
        todoState={todoState}
      />
    </div>
  );
}


// todoState = [
//   { todoText: 'Wash dishes', completion: false, key: 'uuid-number' },
//   { todoText: 'Wash dishes', completion: false, key: 'uuid-number' },
// ]

export default App;
