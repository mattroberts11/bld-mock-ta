import React from 'react';
import Cow from './Cow';

const CowList = (props) => {
    // console.log(props);
    return (

      <ul className="list-group">
        {props.cows.map((cow, i) =>
          <Cow
            name={cow.name}
            description={cow.description}
            key={i}
            />
        )}
      </ul>
    )
}

export default CowList;