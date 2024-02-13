import React from "react";

export default function Car({ cars }) {
  return (
    <div>
      {cars.map((c) => (
        <li
          style={{
            border:"2px solid",
            backgroundColor: "lightgray",
            fontSize: "30px",
            display: "flex",
            width: "80%",
            height: "150px",
            fontWeight: "bold",
            color: "Black",
            padding:"25px"
          }}
        >
          Model : {c.model} <br></br> Vendor : {c.vendor}
          <br></br> Price : {c.price}{" ₼"}
          <img
            style={{ width: "250px", heigth: "250px",marginLeft:"20px" }}
            alt="CarImage"
            src={c.image}
          />
        </li>
      ))}
    </div>
  );
}
