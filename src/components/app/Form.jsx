import React from 'react';

const Form = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="addCowName">Add a Cow's Name:</label>
      <input type="text" className="form-control" id="addCowName" aria-describedby="addCowTextName" />
      <label htmlFor="addCowDescription">Add a Description:</label>
      <textarea className="form-control" id="addCowDescription" rows="5" aria-describedby="addCowTextDesc"></textarea>

      <button type="submit" className="btn btn-primary">Add Cow</button>
    </div>
  );
}

export default Form;