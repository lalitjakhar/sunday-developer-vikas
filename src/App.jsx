import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import Portfolio from "./component/Secondpage/Portfolio";
import Footer from "./component/homepage/Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/secondpage" element={<Portfolio />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
