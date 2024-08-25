import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './component/homepage/HomePage'





function App() {
  return (
    <>
      <Router>
        
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
