import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home        from './components/Home';
import HomeLogin   from './components/Homelogin';
import Login       from './components/Login';
import Register    from './components/Register';
import VerifyPhone from './components/VerifyPhone';


export default function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState({});

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/home-login" element={<HomeLogin />} />
        <Route path="/register"   element={
          <>
            {step === 1 && (
              <Register
                onNext={(data) => {
                  setUserData(data);
                  setStep(2);
                }}
              />
            )}
            {step === 2 && (
              <VerifyPhone
                userData={userData}
                onBack={() => setStep(1)}
                onFinish={() => alert("สมัครสำเร็จ!")}
              />
            )}
          </>
        } />
        <Route path="/products"   element={<div>Products (ยังไม่ได้สร้าง)</div>} />
        <Route path="/sell"       element={<div>Sell (ยังไม่ได้สร้าง)</div>} />
      </Routes>
    </BrowserRouter>
  );
}