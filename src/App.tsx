// import { useState, Suspense } from 'react';
import React, { useState, Suspense } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'

library.add(faAngleUp)
// import Status from './components/Status';
const Status = React.lazy(async () => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return import('./components/Status');
});
import StatList from './components/StatusList';
import homeicon from './assets/images/http-dog-home.png';
import loadingimg from './assets/images/loading-dog.gif';
import bgimg from './assets/images/pawprint-bg.jpg';

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

const mybutton: HTMLElement = document.getElementById("myBtn")!;

window.onscroll = function() {scrollFunction()};

const isActive = () => mybutton.classList.contains("active");

function scrollFunction() {
  if (document.body.scrollTop > (window.innerHeight - 80) || document.documentElement.scrollTop > (window.innerHeight - 80)) {
    mybutton.classList.add("active")!;
  } else {
    if (isActive()) {
      mybutton.classList.remove("active");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

  document.body.style.backgroundImage = `linear-gradient(to bottom, rgba(255, 255, 255, 0.584), rgba(255, 255, 255, 0.295)), url(${bgimg})`;

  return (
    <div>
      <div className="navbar">
        <img className="home-icon" src={homeicon} alt="HTTPDog home icon"/>
        <button className="text-button" onClick={displayAllDogs}>{dogs ? "Hide" : "See"} All HTTP Dogs</button>
      </div>
      <Suspense fallback={<div style={{backgroundImage: `url(${loadingimg})`}} className="loading-icon"></div>}>
        <Status q={status} />
      </Suspense>
      <div className="searchbar center">
        <input onChange={handleChange} onKeyUp={handleKeyUp} placeholder="Enter HTTP status code" value={searchText} type='text' />
        <button className="text-button" onClick={handleSearch}>Search</button>
      </div>
      <button onClick={topFunction} id="myBtn" className="myBtn" title="Go to top">
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
      {dogs && <StatList />}
    </div>
  );
};

export default App;
