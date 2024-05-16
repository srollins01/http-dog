import { useState } from 'react';
import Status from './components/Status';
import StatList from './components/StatusList';

export interface QueryProps {
  q: string;
}

const App = () => {
  const [status, setStatus] = useState('401');
  return (
    <div>
      <h1>HTTPDog</h1>
      <Status q={status} />
    </div>
  );
};

export default App;
