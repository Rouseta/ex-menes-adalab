import Searchbox from "./Searchbox"
import CheckboxAll from "./CheckboxAll"
import Checkbox from "./Checkbox"
function ColumnLeft({ DataCities, updateSearchValue, updateFavourites, favouriteCitiesId, }) {
    const citiesChina = () => {

        return DataCities.map((oneCity) => <Checkbox id={oneCity.id} key={oneCity.id} name={oneCity.name} chinesename={oneCity.chineseName} updateFavourites={updateFavourites} favouriteCitiesId={favouriteCitiesId} />)
    }


    return (

        <div>
            <Searchbox updateSearchValue={updateSearchValue} />

            <form>
                <CheckboxAll length={DataCities.length} />

                <div>
                    <ul>
                        {citiesChina()}



                    </ul>
                </div>
            </form>
        </div>
    )
}
export default ColumnLeft