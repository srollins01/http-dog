import { useState } from 'react';
import Stat from './components/Status';

export interface QueryProps {
  q: string;
}

const App = () => {
  const [stat, setStat] = useState('401');
  return (
    <div>
      <h1>HTTPDog</h1>
      <Stat q={stat} />
    </div>
  );
};

export default App;
