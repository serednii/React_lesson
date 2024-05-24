
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'

import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';
import { Homepage } from './pages/Homepage';
import { Aboutpage } from './pages/Aboutpage';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React-Router-Dom</h1>
        <Link to="/">Home</Link>
        <Link to="/posts">Blog</Link>
        <Link to="/about">About</Link>
      </header>

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/about" element={<Aboutpage />}></Route>
        <Route path="/posts" element={<Blogpage />}></Route>
        <Route path="*" element={<Notfoundpage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
