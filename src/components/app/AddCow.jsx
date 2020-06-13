import React from 'react';

const AddCow = ({func, submit}) => {
  // console.log('Submit', submit)
  return (
    <form>
      <div className="form-group">
        <label htmlFor="addCowName">Name:</label>
        <input type="text" className="form-control" name="addCowName" onChange={func.handleChange} />

        <label htmlFor="addCowDesc">Description:</label>
        <input type="text" className="form-control" name="addCowDesc" onChange={func.handleChange}/>
      </div>
      <button className="btn btn-primary" onSubmit={submit}>Add Cow</button>
    </form>
  )
}

export default AddCow;