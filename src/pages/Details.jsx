import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'


function Details() {

  const { beerId } = useParams()
  const [details, setDetails] = useState(null)
  const [ isFetching, setIsFetching] = useState (true)

  useEffect(() => {
    getData()    
  }, [])

  const getData = async () => {

    try {
      const cerveza = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      console.log(cerveza.data)
      setDetails(cerveza.data)
      setIsFetching(false)
      
    } catch (error) {
      console.log(error)
    }
  }

  if(isFetching === true) {
    return <h3>...buscando</h3>
  }
  
  return (
    <div>
       <Link to="/">
      <nav style={{background: "lightblue", margin:"5px 0px 0px 46%", width:"100px"}}>
        <img src={require("../assets/home.png")} alt="home" width="30px" />
      </nav>
       </Link>
      <h4>Lista de Detalles</h4>
      <div>
        <img src={details.image_url} alt={details.name} width='100px' />
        <div>
        <h3>{details.name}</h3>
        <p>{details.tagline}</p>
        <p>{details.attenuation_level}</p>
        <p>{details.first_brewed}</p>
        <p>{details.description}</p>
        <p>{details.contributed_by}</p>
        </div>
      </div>
    </div>
  )
}

export default Details