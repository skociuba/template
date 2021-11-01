import React from 'react';

const Card = (props) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          <img src={props.user.url} alt="Cats" width="700" height="600" />
        </h5>
      </div>
    </div>
  );
};
export default Card;
