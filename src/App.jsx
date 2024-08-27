import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import Portfolio from "./component/secondpage/Portfolio";
import Footer from "./component/homepage/Footer";
import OurServices from "./component/thirdpage/OurServices";
import ContactUs from "./component/fourthpage/ContactUs";



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/secondpage" element={<Portfolio />} />
            <Route path="/thirdpage" element={<OurServices />} />
            <Route path="/fourthpage" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
