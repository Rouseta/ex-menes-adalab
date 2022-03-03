import propTypes from "prop-types";

function CheckboxAll(props) {

    return (
        <div className="">
            <label htmlFor="checkbox">{props.length} items</label>
            <input type="checkbox" id="checkbox" />
        </div>


    )
}
export default CheckboxAll;