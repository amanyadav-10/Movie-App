import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './COMPONENTS/header/header';
import Home from './page/home/home.js'
import MovList from './COMPONENTS/movieList/movieList';
import Card from './COMPONENTS/crad/cards';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
        <Routes>
          <Route index element = {<Home/>}></Route>
          <Route path="movie/:id" element={<h1>Movie Detail Page</h1>}></Route>
          <Route path="movies/:type" element={<MovList/>}></Route>
          <Route path="/*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// we will create three paths using the router DOM and 