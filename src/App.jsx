import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/homepage/HomePage'
import Navbar from './component/Navbar';





function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          
          <Routes>
             <Route path="/" element={<Homepage />} />
          </Routes>
        </main>
      </Router>
    </>
  )
}

export default App
