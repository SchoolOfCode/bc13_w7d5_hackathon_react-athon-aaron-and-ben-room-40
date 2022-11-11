function AddToListButton ({addItemToList, inputState}) {
   return <button onClick={()=>{addItemToList(inputState)}}>AddToListButton</button>

}

export default AddToListButton