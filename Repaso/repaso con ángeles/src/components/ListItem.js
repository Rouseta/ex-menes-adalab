function ListItem(props) {
    const handleDelete = (event) => {
        props.deleteFavourites(event.currentTarget.id)


    }

    return (
        <li className="" key={props.id}>
            <img />
            <h3>{props.name}</h3>
            <span>{props.chinesename}</span>
            <p id={props.id} onClick={handleDelete}>X</p>
        </li>
    )
}
export default ListItem;