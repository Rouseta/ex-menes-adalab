import "../styles/App.scss";
import Header from "./Header";
import ColumnLeft from "./ColumnLeft";
import ColumnRight from "./ColumnRight";
import Data from "../Data/Data.json"
import { useState } from "react";



import { Route, Switch } from "react-router-dom";

const App = () => {
  const [DataCities, setDataCities] = useState(Data.cities);
  const [searchValue, setSearchValue] = useState("");
  const [favouriteCitiesId, setFavouriteCitiesId] = useState([]);

  //Función manejadora

  const updateSearchValue = (value) => {
    setSearchValue(value)
  }

  const filteredData = () => {
    return DataCities.filter(eachCity => eachCity.name.toLowerCase().includes(searchValue.toLocaleLowerCase()))
  }

  const updateFavourites = (id) => {
    const selectedCity = DataCities.find(eachCity => eachCity.id === id)
    if (favouriteCitiesId.includes(selectedCity)) {

      const updatedFavouriesCitiesId = favouriteCitiesId.filter(eachCity => eachCity !== selectedCity)
      setFavouriteCitiesId([...updatedFavouriesCitiesId])

    } else {
      setFavouriteCitiesId([...favouriteCitiesId, selectedCity])
    }



  }
  const deleteFavourites = (id) => {

    const updatedFavouriesCitiesId = favouriteCitiesId.filter(eachCity => eachCity.id !== id)
    setFavouriteCitiesId([...updatedFavouriesCitiesId])


  }

  return (
    <div>
      <Header />
      <main className="main">
        <ColumnLeft DataCities={filteredData()} updateSearchValue={updateSearchValue} updateFavourites={updateFavourites} favouriteCitiesId={favouriteCitiesId}
        />

        <ColumnRight favouriteCitiesId={favouriteCitiesId}
          deleteFavourites={deleteFavourites} />


      </main>
    </div>
  );
};

export default App;
