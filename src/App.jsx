import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Secondpage/Portfolio";
import Footer from "./component/homepage/Footer";
import OurServices from "./component/Thirdpage/OurServices";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/secondpage" element={<Portfolio />} />
            <Route path="/Thirdpage" element={<OurServices />} />
            
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
