// import { useState, Suspense } from 'react';
import React, { useState, Suspense } from 'react';
// import Status from './components/Status';
const Status = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./components/Status');
});
import StatList from './components/StatusList';

export interface QueryProps {
  q: string;
}

const App = () => {
  const [searchText, setSearchText] = useState('')
  const [status, setStatus] = useState('200');
  const [dogs, setDogs] = useState (false);

  const displayAllDogs = () => {
    setDogs(!dogs);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchText(value);
  };

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(event.keyCode === 13) {
      setStatus(searchText);
    }
  };

  const handleSearch = () => {
    setStatus(searchText);
  };


  return (
    <div className="white-bg">
      <div className="navbar">
        <img className="home-icon" src="src/assets/images/http-dog-home.png" alt="HTTPDog home icon"/>
        <button onClick={displayAllDogs}>{dogs ? "Hide" : "See"} All HTTP Dogs</button>
      </div>
      <Suspense fallback={<div className="loading-icon"></div>}>
        <Status q={status} />
      </Suspense>
      <div className="searchbar center">
        <input onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Enter HTTP status code" value={searchText} type='text' />
        <button onClick={handleSearch}>Search</button>
      </div>
      {dogs && <StatList />}
    </div>
  );
};

export default App;
