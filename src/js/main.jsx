import React from 'react';
import ReactDOM from 'react-dom/client';
import NavBar from './components/NavBar';
import JumboTron from './components/JumboTron';
import Card from './components/Card';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <JumboTron/>
    <div className="row justify-content-center">
      <h1 className="text-center mb-4 fw-bold">Personajes bien poderosos nada mas para hacer algo original:</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
        <Card id="kratos" />
        <Card id="master-chief" />
        <Card id="leon" />
        <Card id="lara" />
        <Card id="dante" />
      </div>
    </div>
  </React.StrictMode>
);
