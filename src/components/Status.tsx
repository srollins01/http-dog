import { FC } from 'react';
import { QueryProps } from '../App';
import statusArray from '../StatusArray';
import nodogs from '../assets/images/nodogsfound.png';

const Status: FC<QueryProps> = ({ q }) => {
  return (
    <div className="center">
      <img className={statusArray.includes(q) ? "dogstat-img-main" : "notfound-img"} src={statusArray.includes(q) ? `https://http.dog/${q}.jpg` : `${nodogs}` } alt="http status code dog"/>
    </div>
  );
};

export default Status;
