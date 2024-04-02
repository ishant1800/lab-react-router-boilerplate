import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import BrowserRouter as Router
import Home from './components/Home';
import About from './components/About';
import Contacts from './components/Contacts';
import './App.css';

function App() {
  return (
    <Router> 
      <>
        <nav id="navBar">
          <Link className="links" to="/">
            <h1>Kalvium💖</h1>
          </Link>
          <div id="contactsAbout">
            <Link className="links" to="/Contacts">
              <h3>Contacts</h3>
            </Link>
            <Link className="links" to="/About">
              <h3>About</h3>
            </Link>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contacts" element={<Contacts />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
