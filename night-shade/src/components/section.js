import React from 'react'

function Section(props) {
  return (
    <>
    <h6 className="display-4">{props.title}</h6>

  <div className="row mt-5">
    <div className="col-md-2"></div>
    <div className="col-md-4">
      <textarea className='form-control' cols="30" rows="10"></textarea>
     
    </div>
    <div className="col-md-4">
      <h4 className='text-success'>output</h4>
    </div>
    <div className="col-md-2"></div>

  </div>
  </>
  )
}

export default Section