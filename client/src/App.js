import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import {Detail} from './Components/Detail';
import { ComicDetail } from './Components/ComicDetail';
import { EventDetail } from './Components/EventDetail';
import { MovieDetail } from './Components/MovieDetail';
import PageNotFound from './Components/PageNotFound';
import Comics from './Components/Comics';
import Events from './Components/Events';
import Movies from './Components/Movies';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path = '/' element = {<LandingPage/>} />
      <Route  path = '/home' element = {<Home/>}/>
      <Route  path = '/home/comics' element = {<Comics/>}/>
      <Route  path = '/home/events' element = {<Events/>}/>
      <Route  path = '/home/movies' element = {<Movies/>}/>
      <Route  path='/home/:id' element = {<Detail/>}/>
      <Route  path='/home/comic/:id' element = {<ComicDetail/>}/>
      <Route  path='/home/event/:id' element = {<EventDetail/>}/>
      <Route  path='/home/movie/:id' element = {<MovieDetail/>}/>
      <Route path='*' element={<PageNotFound/>}/>
      
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
