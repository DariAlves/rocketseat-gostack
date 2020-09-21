import React, { useState, useEffect } from 'react';

function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.github.com/users/darialves/repos');
      const data = await response.json();
      setRepositories(data);
    }

    fetchData();

  }, [])

  // useEffect(async () => {
  //     const response = await fetch('https://api.github.com/users/darialves/repos');
  //     const data = await response.json();
  //     setRepositories(data);


  // }, [])

  function handleFavorite(id) {
    const newRepositories = repositories.map(repository => {
      return repository.id === id ? { ...repository, favorite: !repository.favorite } : repository
    });


    setRepositories(newRepositories);
  }

  return (
        <ul>
          {repositories.map((repository) => ( 
            <li key={repository.id}>
              {repository.name}
              {repository.favorite && <span>(Favorito)</span>}
              <button onClick={() => handleFavorite(repository.id)}>Favoritar</button>
            </li>
          ))}
        </ul>
  );
}

export default App;

