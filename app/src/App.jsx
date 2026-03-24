import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home        from './components/Home';
import HomeLogin   from './components/Homelogin';
import Login       from './components/Login';
import Register    from './components/Register';
import VerifyPhone from './components/VerifyPhone';
import VerifyPage from "./components/VerifyPage";
import SuccessPage from "./components/SuccessPage";
import ProductForm from './components/ProductForm'; 
import EditProduct from './components/EditProduct'; // 
import ImageUpload from './components/ImageUpload';
import ImageUploadEdit from './components/ImageUploadEdit';


function App() {
  const [step, setStep] = useState(1);
  const [userData, setUserData] = useState(null);

  return (
    <BrowserRouter>
      <div className="App">
        
        {/* ส่วน Content ที่จะเปลี่ยนไปตาม URL */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home-login" element={<HomeLogin />} />
          
          <Route path="/register" element={
            <>
              {step === 1 && <Register onNext={(data) => { setUserData(data); setStep(2); }} />}
              {step === 2 && <VerifyPhone userData={userData} onBack={() => setStep(1)} onFinish={() => alert("สมัครสำเร็จ!")} />}
            </>
          } />

          {/* หน้าลงประกาศขายสินค้า */}
          <Route path="/products" element={
            <>
              <Navbar />
            <div className="product-page">
              <PageHeader title="ลงประกาศ" />
              <main className="container">
                <ProductForm />
              </main>
            </div>
            </>
          } />

          {/* หน้าแก้ไขสินค้า */}
          <Route path="/edit" element={
            <div className="product-page">
              <PageHeader title="แก้ไขประกาศ" isEdit />
              <main className="container">
                <EditProduct />
              </main>
            </div>
          } />

          <Route path="/verify" element={<VerifyPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// --- Component ย่อยสำหรับจัดการ Header ในแต่ละหน้า ---
const PageHeader = ({ title, isEdit = false }) => (
  <div className="header-section">
    <div className="breadcrumb">
      หน้าหลัก &nbsp; &gt; &nbsp; สินค้าของฉัน &nbsp; &gt; &nbsp; <span>{title}</span>
    </div>
    <h1 className="page-title">
      {title}<span className="highlight">ขายสินค้า</span>
    </h1>
  </div>
);
export default App;
