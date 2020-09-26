import React, { useState, useEffect } from 'react';

export default function App() {
  const [location, setLocation] = useState({})

  useEffect(() => {
    navigator.geolocation.watchPosition(handlePositionReceived);

    // return () => navigator.geolocation.clearWatch(watchID);
  }, [])

  function handlePositionReceived({ coords }) {
    const { latitude, longitude } = coords;

    setLocation({
      latitude,
      longitude
    })
  }

  return(
    <>
      Latitude: {location.latitude} <br />
      Longitude: {location.longitude}
    </>
  );
}


// function App() {
//   const [repositories, setRepositories] = useState([]);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await fetch('https://api.github.com/users/darialves/repos');
//       const data = await response.json();
//       setRepositories(data);
//     }

//     fetchData();

//   }, []);

//   useEffect(() => {
//     const filtered = repositories.filter(repo => repo.favorite);

//     document.title = `Você tem ${filtered.length} favoritos`
//   }, [repositories])

//   // useEffect(async () => {
//   //     const response = await fetch('https://api.github.com/users/darialves/repos');
//   //     const data = await response.json();
//   //     setRepositories(data);


//   // }, [])

//   function handleFavorite(id) {
//     const newRepositories = repositories.map(repository => {
//       return repository.id === id ? { ...repository, favorite: !repository.favorite } : repository
//     });


//     setRepositories(newRepositories);
//   }

//   return (
//         <ul>
//           {repositories.map((repository) => ( 
//             <li key={repository.id}>
//               {repository.name}
//               {repository.favorite && <span>(Favorito)</span>}
//               <button onClick={() => handleFavorite(repository.id)}>Favoritar</button>
//             </li>
//           ))}
//         </ul>
//   );
// }

// export default App;

