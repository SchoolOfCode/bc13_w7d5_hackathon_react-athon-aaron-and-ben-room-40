function ListItem({todoState}) {
    return <li>
        {todoState[0].todoText}
    </li>
}

export default ListItem;