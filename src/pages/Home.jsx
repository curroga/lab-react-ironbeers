import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{marginTop:"10px"}}>
        <Link to="/beers">
         <img src={require("../assets/beers.png")} alt="All Beers" /> 
         <h1>All Beers</h1>
        </Link>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nam expedita laudantium sapiente eveniet dicta sit error nostrum velit praesentium.</p>
      </div>

      <div>
      <Link to="/random-beer">
        <img src={require("../assets/new-beer.png")} alt="Random Beer" />
        <h1>Random Beer</h1>
      </Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nam expedita laudantium sapiente eveniet dicta sit error nostrum velit praesentium.</p> 
      </div>

      <div>
      <Link to ="/new-beer">
        <img src={require("../assets/random-beer.png")} alt="New Beer" />
        <h1>New Beer</h1>
      </Link>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nam expedita laudantium sapiente eveniet dicta sit error nostrum velit praesentium.</p> 
      </div>
    </div>
  )
}

export default Home