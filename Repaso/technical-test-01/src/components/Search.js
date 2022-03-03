function Search(props) {
  const handleNameSearch = (event) => {
    event.preventDefault();
    props.handleSearch({
      key: "cities",
      value: event.currentTarget.value,
    });
  };

  return (
    <section className="search">
      <form className="input-search">
        <input
          type="text"
          placeholder="Busca por nombre"
          name="search"
          onChange={handleNameSearch}
          value={props.searchByCities}
        />
      </form>
    </section>
  );
}
export default Search;
