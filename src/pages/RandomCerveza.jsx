import React from 'react'
import { Link } from 'react-router-dom'


function RandomCerveza() {
  return (
    <div>
      <nav style={{background: "lightblue", margin:"5px 0px 0px 45%", width:"100px"}}>
       <Link to="/">
        <img src={require("../assets/home.png")} alt="home" width="30px" />
       </Link>
      </nav>
      <h4>Nueva Cerveza</h4>
    </div>
  )
}

export default RandomCerveza