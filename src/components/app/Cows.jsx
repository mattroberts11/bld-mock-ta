import React from 'react';
import CowList from './CowList';


const Cows = ({cows, click}) => {
  return (
    <div>

      <ul className="list-group">
      {cows.map( (data, i) =>
        <CowList
          cow={data}
          key={i}
          click={click}
        />
        )
      }
      </ul>
    </div>
  )
}

export default Cows;

