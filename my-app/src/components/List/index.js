import ListItem from '../ListItem/index'

function List({removeItemFromList, todoState}) {
    return ( <ul>
        {todoState.map(
            (todo) => {
                return <ListItem todoText={todo.todoText} key={todo.key} />
            }
        )}
    </ul> 
    )
};

export default List;