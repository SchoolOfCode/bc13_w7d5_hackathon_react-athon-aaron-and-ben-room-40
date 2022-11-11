import logo from '../../logo.svg';
import React from 'react';
import './App.css';
import Input from '../Input/index'
import List from '../List/index'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid'



function App() {
  const [todoState, setTodoState] = useState([{ todoText: 'Wash dishes', completion: false, key: uuidv4() }]);


  function addItemToList(newTodoText) {
    todoState.push({
      todoText: newTodoText,
      completion:false,
      key: uuidv4()
    })
  }

console.log(todoState)

  return (
    <div className="App">
    <li>{todoState[0].todoText}</li>

    
      {/* <Input 
      />  */}
      {/* <List 
        todoState={todoState}
      /> */}
    </div>
  );
}


// todoState = [
//   { todoText: 'Wash dishes', completion: false, key: 'uuid-number' },
//   { todoText: 'Wash dishes', completion: false, key: 'uuid-number' },
// ]

export default App;
