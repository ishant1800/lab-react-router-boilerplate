import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contacts from './components/Contacts'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header>
        <Link className="brand-link" to="/">
          <h1>Kalvium<span role="img" aria-label="heart">❤️</span></h1>
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link className="nav-item" to="/contacts">Get in Touch</Link>
            </li>
            <li>
              <Link className="nav-item" to="/about">Learn More</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
