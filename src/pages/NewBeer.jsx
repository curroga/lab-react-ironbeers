import React from 'react'
import { Link } from 'react-router-dom'


function NewBeer() {
  return (
    <div>
      <nav style={{background: "lightblue", margin:"5px"}}>
       <Link to="/">
        <img src={require("../assets/home.png")} alt="home" width="30px" />
       </Link>
      </nav>
      <h4>Nueva Cerveza</h4>
    </div>
  )
}

export default NewBeer