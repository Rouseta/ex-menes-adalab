import ListItem from "./ListItem";
function ColumnRight(props) {
    const citiesFavourites = () => {

        return props.favouriteCitiesId.map((oneCity) => <ListItem id={oneCity.id} key={oneCity.id} name={oneCity.name} chinesename={oneCity.chineseName}
            deleteFavourites={props.deleteFavourites} />)
    }

    return (

        <div>
            <div>

                <p>Items favoritos</p>
                <button className="delete"> Delete</button>
            </div>
            <div>
                <ul className="favourites">
                    {citiesFavourites()}

                </ul>
            </div>
        </div >
    )
}
export default ColumnRight;