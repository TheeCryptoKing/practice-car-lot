import React, {useEffect, useState} from "react";
import Search from "./Search";
import Cars from "./Cars";
import NewCarForm from "./NewCarForm";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";


function CarLot() {
  const [cars, setCars] = useState([])
  const [search, setSearch] = useState('')
  const [filter, setFilter] = useState('')

  let filteredCars = cars; 
  //Try Evans way and you need more practicce with these, alot more practice can't figure out solo
  if (filter !== "" || search !== "") {
    filteredCars =[...cars].filter(
      car => 
      (car.car_make === filter || filter === "") && 
      car.car_model.toLowerCase().includes(search.toLowerCase()),
    )
  } 

  function handleUpdate(updatedCar) {
    setCars(cars.map(car => { 
      return car.id === updatedCar.id ? updatedCar : car
    }))
  }
  
  function handleDelete(id) {
    const deletedArray = cars.filter((car) => 
       car.id !== id)
       setCars(deletedArray)
  }
  //only use id input because data will automatically be compared to id strictly 
 
  function handleFilter(e) {
    setFilter(e.target.value)
  }

  function handleSearch(e) {
    setSearch(e.target.value)
  }

  function handleNewCar(newCar) {
    setCars([...cars, newCar])
  }

  useEffect(() => {
    fetch('http://localhost:3001/cars')
    .then((resp) => resp.json())
    .then((data) => { setCars(data)}) 
  }, [])
  // console.log(cars)



  return (
    <Container>
      <Grid container spacing={5}>
        <Grid item xs={6}>
          <Search search={search} filter={filter} onNewSearch={handleSearch} onNewFilter={handleFilter} /> {/**You can edit this line */}
        </Grid>
        <Grid item xs={6}>
          <NewCarForm onNewCar={handleNewCar}/> {/**You can edit this line */}
        </Grid>
        <Grid item xs={12}>
          {/** enter your code below */}
          <Cars cars={filteredCars} onDelete={handleDelete} onUpdate={handleUpdate}/>
          {/** enter your code above */}
        </Grid>
      </Grid>
    </Container>
  );
}

export default CarLot;
