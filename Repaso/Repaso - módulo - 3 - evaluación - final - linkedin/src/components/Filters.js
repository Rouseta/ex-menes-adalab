import FilterName from "./FilterName"
import FilterGender from "./FilterGender"
import FilterCity from "./FilterCity"
import propTypes from "prop-types"

const Filter = (props) => {
    return <section>
        <form>
            <FilterName handleFilter={props.handleFilter} filterName={props.filterName} />
            <FilterGender />
            <FilterCity />


        </form>
    </section>

}
export default Filter