import { FC } from 'react';
import { QueryProps } from '../App';

const Stat: FC<QueryProps> = ({ q }) => {
  return (
    <div>
      <img src={`https://http.dog/${q}.jpg`} alt="http status code dog"/>
    </div>
  );
};

export default Stat;
