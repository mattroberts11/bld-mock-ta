import React from 'react';
import Cows from './Cows';

const CowList = (props) => {
  console.log(props);
  return (
    <li id={props.cow._id}>{props.cow.name}</li>
  )
}

export default CowList;