import React from "react";

const JumboTron = () => {
  return (
    <div id="jumbo" className="p-5 mb-4 bg-light rounded-3 m-2">
      <div id="jumboText" className="container-fluid py-5">
        <h1 className="display-5 fw-bold">Una cálida bienvenida :)</h1>
        <h5 className="text-secondary">A este enredo de <i className="fa-solid fa-poo"></i></h5>
        <p className="col-md-8 fs-4">
        Pasé aproximadamente 12 horas de mi vida tratando de entender react, viendo videos,
        leyendo librerias y el resultado es una frustración absoluta. Es exasperante, tiene par
        de reglas que considero algo absurdas, creo que sera sumamente util una vez aprenda a usarlo
        pero de momento lo odio y aborrezco, le voy a la vieja escuela y a los html de dos metros de largo.
        <br/>
        Sin mas que decir, aqui mi proyecto.
        <br/>
        <br/>
        Pd* Puse algunos gifs divertidos en los botones del navbar.
        </p>
        <button className="btn btn-primary btn-lg" type="button">
          Un botón
        </button>
        <p className="text-secondary">No hace nada pero lo deje porque si.</p>
      </div>
    </div>
  );
};

export default JumboTron;
