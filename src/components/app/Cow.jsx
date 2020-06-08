import React from 'react';

const Cow = (props) => {
  console.log(props);
  return (

    <li className="list-group-item">{props.name}</li>

  )
}

export default Cow;