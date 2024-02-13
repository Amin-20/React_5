import React, { useState } from "react";
import { carDatas } from "./Data";

export default function Form({ addCar }) {
  const [cars, setCars] = useState(carDatas);

  const [model, setModel] = useState("");
  const [vendor, setVendor] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedCarId, setSelectedCarId] = useState(null);

  function handleUpdateSubmitFunc(e) {
    e.preventDefault();

    const updatedCar = {
      model: selectedCar?.model,
      vendor: selectedCar?.vendor,
      price: selectedCar?.price,
      image: selectedCar?.image,
    };

    const selectedIndex = cars.findIndex((car) => car.id === selectedCarId);

    const updatedCars = [
      ...cars.slice(0, selectedIndex),
      updatedCar,
      ...cars.slice(selectedIndex + 1),
    ];

    setCars(updatedCars);

    setSelectedCarId(null);
    setSelectedCar(null);

    alert("Product Updated Successfully");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setModel("");
    setVendor("");
    setPrice("");
    setImage("");
    let obj = {
      id: 7,
      model: model,
      vendor: vendor,
      price: price,
      image: image,
    };

    addCar(obj);
  };

  return (
    <div
      style={{
        border:"2px solid",
        backgroundColor: "lightgray",
        fontSize: "25px",
        fontWeight: "bold",
        width: "70%",
        fontWeight: "bold",
        color: "black",
        padding:"20px"
      }}
    >
      <h1>Add</h1>
      <form onSubmit={handleSubmit}>
        <label>Model : </label>
        <input
          type="text"
          id="model"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
        <br></br>
        <label>Vendor : </label>
        <input
          type="text"
          id="vendor"
          name="vendor"
          value={vendor}
          onChange={(e) => setVendor(e.target.value)}
        />
        <br></br>

        <label>Price : </label>
        <input
          type="number"
          id="price"
          name="price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <br></br>

        <label>Image URL : </label>
        <input
          type="url"
          id="imageUrl"
          name="imageUrl"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Add car</button>
      </form>

      
      <br></br>
      <br></br>
    </div>
  );
}
