import "../styles/App.scss";
import Checkbox from "./Checkbox";
import Search from "./Search";
import { useState } from "react";
import cities from "../Data/cities.json"
// import { Route, Switch } from "react-router-dom";

const App = () => {
  const [cities, setCities] = useState();



  const [searchByCities, setSearchByCities] = useState("");


  const handleSearch = (data) => {
    if (data.key === "cities") {
      setSearchByCities(data.value);


    }
  };

  const filteredCities = cities

    .filter((oneCity) => oneCity.name.toLowerCase().includes(searchByCities.toLowerCase()))
    .map((oneCity) => {
      return (
        <ul key={oneCity.id} className="result-city">
          <li className="city">{oneCity.name}</li>
        </ul>
      )

    })

  return (
    <div>
      <header className="header">
        <h3 className="title">Ciudades de China</h3>
      </header>
      <Search searchByCities={searchByCities} handleSearch={handleSearch} filteredCities={filteredCities} />
      {/* <Checkbox /> */}
    </div>
  );
};

export default App;
