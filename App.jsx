import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyPage from "./components/VerifyPage";
import SuccessPage from "./components/SuccessPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerifyPage />} />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;