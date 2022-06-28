import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import {Detail} from './Components/Detail';
import {CreateGame} from './Components/CreateGame';
import PageNotFound from './Components/PageNotFound';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path = '/' element = {<LandingPage/>} />
      <Route  path = '/home' element = {<Home/>}/>
      <Route  path='/home/:id' element = {<Detail/>}/>
     {/*  <Route  path='/videogame' element={<CreateGame/>}/> */}
      <Route path='*' element={<PageNotFound/>}/>
      
      
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
