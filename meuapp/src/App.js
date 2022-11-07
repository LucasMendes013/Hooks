import React, { useState, useEffect } from "react";

export default function App() {
  const [repositories, setRepositories] = useState([])

  useEffect(async () => {
    const response = await fetch('https://api.github.com/users/diego3g/repos')
    const data = await response.json()

    setRepositories()
  }, [])

  return (
    <div>
      <ul>
        { repositories.map(repo => 
        <li key={repo.id}>
          { repo.name }
        </li>) 
        }
      </ul>
    </div>
  );
}

