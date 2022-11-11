function DeleteButton({removeItemFromList, index}) {
    console.log(`index:`, index)
    return <button onClick={()=>{removeItemFromList(index)}}>Delete todo</button>
}

export default DeleteButton;