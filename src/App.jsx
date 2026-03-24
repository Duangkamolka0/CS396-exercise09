import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Marketplace from "./components/Marketplace";
import Favproduct from "./components/Favproduct";
import SubHeader from "./components/SubHeader";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* หน้า Marketplace (ไม่มี header ล่าง) */}
        <Route path="/" element={<Marketplace />} />

        {/* หน้า Favproduct (มี header แบบในรูป) */}
        <Route
          path="/fav"
          element={
            <>
              <SubHeader title="คลังของฉัน" />
              <Favproduct />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;