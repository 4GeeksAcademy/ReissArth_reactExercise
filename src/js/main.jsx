import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import JumboTron from './components/JumboTron';
import Card from './components/Card';

const personajes = [
  {
    nombre: "Kratos",
    imagen: "https://media.vandal.net/i/1280x720/27407/god-of-war-201711112176_1.jpg.webp",
    frase: "No me sigas por gloria, sino por supervivencia. He destruido a los dioses del pasado, y ahora forjo mi propio destino. ¿Estás preparado para lo que vendrá, muchacho?",
  },
  {
    nombre: "Master Chief",
    imagen: "https://areajugones.sport.es/wp-content/uploads/2019/11/Halo-imagen-1560x880.jpg.webp",
    frase: "No importa el tamaño de la amenaza ni las probabilidades en contra. Si la humanidad necesita que luche, la victoria es la única opción. Designa el objetivo y terminaré este combate.",
  },
  {
    nombre: "Leon S. Kennedy",
    imagen: "https://static0.polygonimages.com/wordpress/wp-content/uploads/2025/12/tgas-2025-resident-evil-leon.png?q=49&fit=crop&w=1600&h=900&dpr=2",
    frase: "Si buscas a alguien que se rinda ante el horror, te has equivocado de lugar. He sobrevivido a Raccoon City y a misiones imposibles. Quédate cerca de mí si quieres salir con vida.",
  },
  {
    nombre: "Lara Croft",
    imagen: "https://w0.peakpx.com/wallpaper/367/817/HD-wallpaper-tomb-raider-2013-gaming-lara-croft-video-game-game.jpg",
    frase: "El mundo está lleno de secretos esperando ser descubiertos, y no voy a dejar que se queden en el olvido. ¿Te atreves a adentrarte en lo desconocido conmigo?",
  },
  {
    nombre: "Dante",
    imagen: "https://images2.alphacoders.com/104/thumb-1920-1046629.jpg",
    frase: "¿Buscabas acción con estilo? Has venido al lugar indicado. Mientras haya buena música, pizza y demonios que cazar, el espectáculo nunca termina. ¡Let's rock!",
  },
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <JumboTron/>
     <div className="container my-5">
        <h1 className="text-center mb-4 fw-bold">
          Personajes bien poderosos para hacer algo original
        </h1>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {personajes.map((p) => (
            <Card
              nombre={p.nombre}
              imagen={p.imagen}
              frase={p.frase}
            />
          ))}
        </div>
      </div>
  </React.StrictMode>
);
