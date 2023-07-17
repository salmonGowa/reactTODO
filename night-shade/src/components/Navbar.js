import React from 'react'

function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-white">{props.name}</a>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
  )
}

export default Navbar