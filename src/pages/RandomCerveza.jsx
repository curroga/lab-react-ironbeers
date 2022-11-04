import React from 'react'
import { Link } from 'react-router-dom'


function RandomCerveza() {
  return (
    <div>
       <Link to="/">
      <nav style={{background: "lightblue", margin:"5px 0px 0px 46%", width:"100px"}}>
        <img src={require("../assets/home.png")} alt="home" width="30px" />
      </nav>
       </Link>
      <h4>Nueva Cerveza</h4>
    </div>
  )
}

export default RandomCerveza