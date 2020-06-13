import React from 'react';
// import Cows from './Cows';

const CowList = (props) => {
  // console.log(props);
  return (
    <li className="list-group-item" id={props.cow._id} onClick={props.click}>{props.cow.name} <button id={props.cow._id} type="button" className="btn btn-outline-danger">Delete</button></li>
  )
}

export default CowList;