import DeleteButton from "../DeleteButton";
import ItemText from "../ItemText";

function ListItem({todoText, removeItemFromList, index}) {
    return <div>
        <ItemText todoText={todoText} />
        <DeleteButton removeItemFromList={removeItemFromList} index={index} />   
        
    </div>
}

export default ListItem;