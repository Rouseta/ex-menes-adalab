const FilterCity = () => {

    return (
        <>
            <label className="form__label display-block" htmlFor="gender">
                {' '}
                Ciudad:{' '}
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Stockach" />{' '}
                Stockach
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Shelbourne" />{' '}
                Shelbourne
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Valencia" />{' '}
                Valencia
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Valencia" /> Köyliö
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Orange" /> Orange
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Folkestad" />{' '}
                Folkestad
            </label>
            <label className="display-block">
                <input type="checkbox" name="location" value="Ely" />
                Ely
            </label>

        </>


    )
}
export default FilterCity;