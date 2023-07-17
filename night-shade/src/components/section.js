import React from 'react'

function Section(props) {
  return (
    <>
    <h6 className="display-4">{props.title}</h6>

  <div className="row mt-5">
    <div className="col-md-2">1</div>
    <div className="col-md-4">2</div>
    <div className="col-md-4">3</div>
    <div className="col-md-2">4</div>

  </div>
  </>
  )
}

export default Section