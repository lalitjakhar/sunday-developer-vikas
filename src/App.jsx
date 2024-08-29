import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./component/homepage/HomePage";
import Navbar from "./component/Navbar";
import Portfolio from "./component/secondpage/Portfolio";
import Footer from "./component/homepage/Footer";
import OurServices from "./component/thirdpage/OurServices";
import ContactUs from "./component/fourthpage/ContactUs";
import PricingCard from "./component/fivepage/PricingCard";

import Diolog from "./component/sixpage/Dialog";
import FruitDialog from "./component/sevenpage/FruitsDialog";
import TemporaryDrawer from "./component/eightpage/Drawer";
import BeckySilkBlazer from "./component/ninepage/BeckySilkBlazer";


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
            <Route path="/fivepage" element={<PricingCard />} />
            <Route path="/sixpage" element={<Diolog />} />
            <Route path="/sevenpage" element={<FruitDialog />} />
            <Route path="/eightpage" element={<TemporaryDrawer />} />
            <Route path="/ninepage" element={<BeckySilkBlazer />} />

          </Routes>
        </main>
        <Footer />
      </Router>
      
    </>
  );
}

export default App;
