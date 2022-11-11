import ListItem from '../ListItem/index'

function List({removeItemFromList, todoState}) {
    return ( <ul>
        {todoState.map(
            (todo, index) => {
                return <ListItem todoText={todo.todoText} removeItemFromList={removeItemFromList} key={todo.key} index={index} />
            }
        )}
    </ul> 
    )
};

export default List;