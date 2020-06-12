import React from 'react';
import CowList from './CowList';


const Cows = ({cows}) => {
  return (
    <div>
      <h2>Cows</h2>
      <ul>
      {cows.map( (data, i) =>
        <CowList
          cow={data}
          key={i}
        />
        )
      }
      </ul>
    </div>
  )
}

export default Cows;

