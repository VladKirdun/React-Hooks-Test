import React, { useState, useEffect } from 'react';
import './App.css';
import List from "./components/List";
import Photo from "./components/Photo";

function App() {
  const [ photos, setPhotos ] = useState([]);
  const [ page, setPage ] = useState(1);
  const [ fetching, setFetching ] = useState(false);

  useEffect(() => {
    setFetching(true);
    fetch(`https://jsonplaceholder.typicode.com/photos?_limit=20&_page=${page}`)
      .then((response) => response.json())
      .then((json) => {
        setPhotos(prevState => [...prevState, ...json]);
      })
      .finally(() => setFetching(false));
  }, [page]);

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div>
      <List
        children={photos}
        component={(props) => <Photo {...props} />}
        isLoading={fetching}
      />
      {!fetching &&
        <button onClick={loadMore}>Load More</button>
      }
    </div>
  );
}

export default App;
