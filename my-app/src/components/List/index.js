import ListItem from '../ListItem/index'

function List({removeItemFromList, todoState}) {
    return <ul>
        <ListItem 
            todoState={todoState}
        />
    </ul>
}

export default List;