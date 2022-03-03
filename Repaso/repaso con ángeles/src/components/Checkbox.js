function Checkbox(props) {
    const handleClick = (event) => {
        props.updateFavourites(event.currentTarget.id);

    };
    const selectedCity = props.favouriteCitiesId.find(eachCity => eachCity.id === props.id)

    return (
        <li key={props.id}>
            <label htmlFor={props.id}>
                <p> {props.name}</p>
                <p>{props.chinesename}</p>
            </label>
            <input
                type="checkbox"
                id={props.id}
                onChange={handleClick}
                value={props.favouriteCitiesId}
                checked={selectedCity !== undefined ? true : false}
            />
        </li>
    );
}
export default Checkbox;
