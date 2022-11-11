import DeleteButton from "../DeleteButton";
import ItemText from "../ItemText";
import "./index.css"

function ListItem({todoText, removeItemFromList, index}) {
    return <div>
        <ItemText todoText={todoText} class = "list"
        />
        <DeleteButton removeItemFromList={removeItemFromList} index={index} />   
        
    </div>
}

export default ListItem;