import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './COMPONENTS/header/header';
import Home from './page/home/home.js'
import MovList from './COMPONENTS/movieList/movieList';
import Card from './COMPONENTS/crad/cards';
import MovData from './page/home/movieLink/moviedata';
import { useEffect, useState } from 'react';
import Login from './COMPONENTS/Login/login.js';
import { useNavigate } from 'react-router-dom';


function App() {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const stoUser = localStorage.getItem('user');
    console.log(stoUser);
    if (stoUser) {
      setUser(JSON.parse(stoUser));
    }

  }, []);

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/login' element={<Login user={user} setUser={setUser} />}></Route>
          <Route exact path='/' element={<Home user={user} />}></Route>
          <Route path="movie/:id" element={<MovData user={user} />}></Route>
          <Route path="movies/:type" element={<MovList user={user} />}></Route>
          <Route path="*" element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// we will create three paths using the router DOM and 