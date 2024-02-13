import './App.css';
import { useState } from 'react';
import { carDatas } from './Data';
import Form from './Form';
import Car from './Car';



function App() {
  const [cars,setCars]=useState(carDatas)
  function addCar(car) {
    console.log(car)
    setCars([...cars, car])
    console.log(cars)
  }

  const divStyle = {
    width: '50%',
    display: 'inline-block',
    matgin:'auto'
  };
  return (
    <div>
    <div style={divStyle}>

      <Car cars={cars}></Car>
    </div>
    <div style={divStyle}>

      <Form  addCar={addCar}></Form>
    </div>
  </div>
  );
}

export default App;
