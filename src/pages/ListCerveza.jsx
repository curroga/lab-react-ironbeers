import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function ListCerveza() {

  //1. crear el estado que almacena la data de la API
  const [ list, setList ] = useState([])
  const [ isFetching, setIsFetching] = useState(true)

  //2. llamar a la API
  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    try {
      const cervezas = await axios.get("https://ih-beers-api2.herokuapp.com/beers")
      console.log(cervezas)
      //3. guardar la informacion en estado
      setList(cervezas.data)
      setIsFetching(false)
    } catch (error) {
      console.log(error)
    }
  }

  //4. clausula de guardia con el ...buscando
  if(isFetching === true){
    return <h3>...buscando</h3>
  }

  //5. renderizar la data
  return (
    <div>
        <Link to="/">
      <nav style={{background: "lightblue", margin:"5px 0px 0px 46%", width:"100px"}}>
        <img src={require("../assets/home.png")} alt="home" width="30px" />
      </nav>
        </Link>
        <h2>Lista de Cervezas</h2>
        
          {list.map((eachCerveza) => {
            return(
              <div className='container-card' key={eachCerveza._id}>
                <img src={eachCerveza.image_url} alt={eachCerveza.name} width="50px" />
                <div className='card-info'>
                
                <Link to={`/beers/${eachCerveza._id}`}><h3>{eachCerveza.name}</h3></Link>
                <p>{eachCerveza.tagline}</p>
                <p><b>Created by:</b> {eachCerveza.contributed_by}</p>
                </div> 
                              
                </div>
            )
          })}
        
    </div>
  )
}

export default ListCerveza