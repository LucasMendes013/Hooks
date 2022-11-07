import React, { useState, useEffect } from "react";

export default function Exercicio1() {
  const [repositories, setRepositories] = useState([
    {
    id: 1,
    name: 'repositorioTeste'
    },
    {
    id: 2,
    name: 'repositorioTeste2'
    },
    {
    id: 3,
    name: 'repositorioTeste3'
    }
])

  function handleNewRepositorie(){
    setRepositories([...repositories, { id: Math.random(), name: 'repositorie' }])
  }

  return (
    <div>
      <ul>
        { repositories.map(repo => 
        <li key={repo.id}>
          { repo.name }
        </li>) 
        }
      </ul>
      <button onClick={ handleNewRepositorie }>
        Adicionar Repositorio
      </button>

    </div>
  );
}

