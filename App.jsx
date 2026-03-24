import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home      from './components/Home';
import HomeLogin from './components/Homelogin';
import Login     from './components/Login';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"           element={<Home />} />
        <Route path="/login"      element={<Login />} />
        <Route path="/home-login" element={<HomeLogin />} />
        <Route path="/register"   element={<div>Register (ยังไม่ได้สร้าง)</div>} />
        <Route path="/products"   element={<div>Products (ยังไม่ได้สร้าง)</div>} />
        <Route path="/sell"       element={<div>Sell (ยังไม่ได้สร้าง)</div>} />
      </Routes>
    </BrowserRouter>
  );
}