import React from "react";

function Card({ titulo, descripcion, personaAsignada, fechaInicio, fechaFin }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        backgroundColor: "blue",
      }}
    >
      <h1
        style={{
          color: "red",
        }}
      >
        {titulo}
      </h1>
      <p>{descripcion}</p>
      <p>{personaAsignada}</p>

      <p>{fechaInicio}</p>
      <p>{fechaFin}</p>
    </div>
  );
}

export default Card;
