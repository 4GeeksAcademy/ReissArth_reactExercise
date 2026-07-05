import React from "react";

const personajes = [
  {
    id: "kratos",
    nombre: "Kratos",
    imagen: "https://media.vandal.net/i/1280x720/27407/god-of-war-201711112176_1.jpg.webp",
    frase: "No me sigas por gloria, sino por supervivencia. He destruido a los dioses del pasado, y ahora forjo mi propio destino. ¿Estás preparado para lo que vendrá, muchacho?",
  },
  {
    id: "master-chief",
    nombre: "Master Chief",
    imagen: "https://areajugones.sport.es/wp-content/uploads/2019/11/Halo-imagen-1560x880.jpg.webp",
    frase: "No importa el tamaño de la amenaza ni las probabilidades en contra. Si la humanidad necesita que luche, la victoria es la única opción. Designa el objetivo y terminaré este combate.",
  },
  {
    id: "leon",
    nombre: "Leon S. Kennedy",
    imagen: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/tgas-2025-resident-evil-leon.png?q=49&fit=crop&w=1600&h=900&dpr=2",
    frase: "Si buscas a alguien que se rinda ante el horror, te has equivocado de lugar. He sobrevivido a Raccoon City y a misiones imposibles. Quédate cerca de mí si quieres salir con vida.",
  },
  {
    id: "lara",
    nombre: "Lara Croft",
    imagen: "https://w0.peakpx.com/wallpaper/367/817/HD-wallpaper-tomb-raider-2013-gaming-lara-croft-video-game-game.jpg",
    frase: "El mundo está lleno de secretos esperando ser descubiertos, y no voy a dejar que se queden en el olvido. ¿Te atreves a adentrarte en lo desconocido conmigo?",
  },
  {
    id: "dante",
    nombre: "Dante",
    imagen: "https://images2.alphacoders.com/104/thumb-1920-1046629.jpg",
    frase: "¿Buscabas acción con estilo? Has venido al lugar indicado. Mientras haya buena música, pizza y demonios que cazar, el espectáculo nunca termina. ¡Let's rock!",
  },
];


const Card = ({ id }) => {
  const character = personajes.find((p) => p.id === id);

  if (!character) {
    return <div className="alert alert-danger">Personaje no encontrado</div>;
  }

  return (
    <div className="card shadow-sm" style={{ width: "16rem" }}>
      <img
        src={character.imagen}
        alt={character.nombre}
        className="card-img-top"
        style={{ height: "160px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title fw-bold">{character.nombre}</h5>
        <p className="card-text text-muted fst-italic small">
          "{character.frase}"
        </p>
      </div>
    </div>
  );
};

export default Card;