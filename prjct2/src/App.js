import './App.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes,Route } from 'react-router-dom';
import HomePage from './pages/Home.Page';
import MoviePage from './pages/Movie.Page';
import PlayPage from './pages/Play.Page';
import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

function App() {
  return (
  <Routes>
    <Route path='/'element={<HomePage/>}/>
    <Route path='/movie/:id'element={<MoviePage/>}/>
    <Route path='/plays'element={<PlayPage/>}/>
  </Routes>
  );
}

export default App;
