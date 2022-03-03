function Searchbox(props) {
    const handleChange = (event) => {
        props.updateSearchValue(event.currentTarget.value)

    }
    return (
        <form>
            <input type="text" placeholder="Busca por nombre" value={props.searchValue} onChange={handleChange} />
        </form>
    )

}
export default Searchbox;