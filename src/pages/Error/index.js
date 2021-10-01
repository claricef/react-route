import React from 'react';
import { Link } from 'react-router-dom';

export default function Erro() {
  return (
    <div>

     <h1>Essa pagina não existe</h1><br/>

     <span>Você pode está procurando:</span> <br/>
     <Link to="/">Home</Link><br/>
     <Link to="/sobre">Sobre</Link><br/>
    <Link to="/contato">Contatos</Link><br/>

    </div>
  );
}

