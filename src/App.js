import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home'
import ListCerveza from './pages/ListCerveza'
import RandomCerveza from './pages/RandomCerveza'
import NewBeer from './pages/NewBeer'
import Details from './pages/Details'

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/beers' element={<ListCerveza />} />
        <Route path='/random-beer' element={<RandomCerveza />} />
        <Route path='/new-beer' element={<NewBeer />} />
        <Route path='/beers/:beerId' element={<Details />} />

      </Routes>
      
    </div>
  );
}

export default App;
