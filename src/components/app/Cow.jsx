import React from 'react';

const Cow = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.description}</td>
    </tr>
  )
}

export default Cow;