import { Routes, Route } from 'react-router-dom';
import './App.css';
import MyHeader from './Components/Header/MyHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import { routes } from './Routes/routes';
import HomePage from './Components/Pages/HomePage';
import FavoritePage from './Components/Pages/FavoritePage';
import { useState } from 'react';
import GamePage from './Components/Pages/GamePage';

function App() {

  const [filtredText, setFiltredText] = useState('');

  console.log(filtredText);


  return (
    <div className='app'>
      <MyHeader textVal={filtredText} setTextVal={setFiltredText}/>
      <Routes>
        <Route path={routes.home} element={<HomePage filter={filtredText}/>} />
        <Route path={routes.favorite} element={<FavoritePage/>}/>
        <Route path={'/game'} element={<GamePage {...{title: 'Dead Space', tags: ['Action', 'RPG', 'Horror'], imgRef: '/', price: '20'}}/>}/>
      </Routes>
    </div>
  );
}

export default App;
