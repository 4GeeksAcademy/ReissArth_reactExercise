import React from "react";

const Card = ({nombre, imagen, frase}) => {
  const character = personajes.find((p) => p.id === id);

  return (
    <div className="card shadow-sm" style={{ width: "16rem" }}>
      <img
        src={imagen}
        alt={nombre}
        className="card-img-top"
        style={{ height: "160px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fw-bold">{nombre}</h5>
        <p className="card-text text-muted fst-italic small">
          "{frase}"
        </p>
      </div>
    </div>
  );
};

export default Card;