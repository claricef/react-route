import React from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';

export default function Produto() {
    const { id } = useParams();
  return (
    <div>
     <h1>Grade de produtos</h1><br/>

     <span>Produto selecionado: {id}</span>
    </div>
  );
}

