import { useState } from 'react';
import TextInput from '../TextInput/index'
import AddToListButton from '../AddToListButton/index'

function Input({addItemToList}){
    const [inputState, setInputState] = useState()
     
    return <div>

     <TextInput setInputState={setInputState}/>
     <AddToListButton 
     addItemToList={addItemToList}
     inputState={inputState}
     />
     </div>

// return <input onChange={handleChange}></input>
}

export default Input;