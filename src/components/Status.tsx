import { FC } from 'react';
import { QueryProps } from '../App';

const Status: FC<QueryProps> = ({ q }) => {
  return (
    <div className="center">
      <img className="dogstat-img" src={`https://http.dog/${q}.jpg`} alt="http status code dog"/>
    </div>
  );
};

export default Status;
