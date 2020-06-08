import React from 'react';
import Cow from './Cow';

const CowList = (props) => {
    // console.log(props);
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {
          props.cows.map((cow, i) =>
          <Cow
            name={cow.name}
            description={cow.description}
            key={i}
            />
          )}
        </tbody>
      </table>
    )
}

export default CowList;