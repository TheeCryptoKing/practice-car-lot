import React from "react";
import Grid from "@mui/material/Grid";
import Car from "./Car";


function Cars({ cars , onDelete , onUpdate}) {

  const carList = cars.map((car) => {
    return <Car key={car.id} car={car} onDelete={onDelete} onUpdate={onUpdate}/>
  })

  return (
    <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
      {/**put your code here */}
      {carList}
    </Grid>
  );
}

export default Cars;
