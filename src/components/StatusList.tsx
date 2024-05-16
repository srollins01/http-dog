import statusArray from '../StatusArray';

const StatList = () => {
  return (
    <div className="flex-grid">
      {statusArray.map((stat: string) => {
        return (
          <div className="col" key={stat}>
              <img className="dogstat-img-card" src={`https://http.dog/${stat}.jpg`} alt="http status code dog"/>
          </div>
        );
      })}
    </div>
  );
};

export default StatList;
