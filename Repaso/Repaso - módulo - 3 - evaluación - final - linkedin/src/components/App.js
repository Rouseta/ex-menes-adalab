import { Route, Switch, useRouteMatch, Link } from "react-router-dom";
import callToApi from "../services/api";
import { useState, useEffect } from "react";
import UsersList from "./UsersList";
import Filter from "./Filters";
function App() {
  const [users, setUsers] = useState([]);
  const [filterName, setFilterName] = useState("");
  const [filterGender, setFilterGender] = useState("");

  useEffect(() => {
    callToApi().then((usersData) => {
      setUsers(usersData);
    });
  }, []);
  const handleFilter = (data) => {
    if (data.key === "name") {
      setFilterName(data.value);

    } else if (data.key === "gender") {
      setFilterGender(data.value)
    }


  }

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(filterName.toLowerCase())


  });


  return (
    <>
      <h1 className="title--big">Directorio de personas</h1>
      <div className="col2">
        <Filter handleFilter={handleFilter} filterName={filterName} />

        <UsersList users={filteredUsers} />
      </div>
    </>
  );
}

export default App;
