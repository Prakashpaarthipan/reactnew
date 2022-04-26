import { Home, Auth, Listing, About, Protected } from './cmp';
import './App.css';
import { BrowserRouter as Router, Routes, Link, Route } from 'react-router-dom'
const logout = () => {
  localStorage.clear()
}
function App() {
  return (

    <Router>
      <div className='App'>
        <div className='navigate'>
          <Link to="/" onClick={logout}>Logout</Link>
          <Link to="home">Home</Link>
          <Link to="list">List</Link>
          <Link to="about">About</Link>
          <Link to="/">Login</Link>
        </div>
        <div >
          <Routes>
            <Route path="/home" element={<Protected cmp={Home} />}> </Route>
            <Route path="/list" element={<Protected cmp={Listing} />}></Route>
            <Route path="/about" element={<Protected cmp={About} />}> </Route>
            <Route path="/" element={<Auth mode="null" />}> </Route>
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
