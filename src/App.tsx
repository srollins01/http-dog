import { useState, Suspense } from 'react';
// import React { useState, Suspense } from 'react';
import Status from './components/Status';
// const Status = React.lazy(async () => {
//   await new Promise(resolve => setTimeout(resolve, 10000));
//   return import('./components/Status');
// });
import StatList from './components/StatusList';

export interface QueryProps {
  q: string;
}

const App = () => {
  const [status, setStatus] = useState('401');

  return (
    <div>
      <h1>HTTPDog</h1>
      <div className="loading-icon"></div>
      <Suspense fallback={<p>Loading...</p>}>
        <Status q={status} />
        <StatList />
      </Suspense>
    </div>
  );
};

export default App;
