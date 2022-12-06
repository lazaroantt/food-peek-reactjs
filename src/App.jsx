import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'


export default function App() {
  return (
    <div className='App'>
      <Router>
        <Home/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}
