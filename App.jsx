import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProductForm from './components/ProductForm'; // หน้าลงประกาศ
import EditProduct from './components/EditProduct'; // หน้าแก้ไข

function App() {
  const [isEditMode, setIsEditMode] = useState(false); // ลองสลับ true/false ดูครับ

  return (
    <div className="App">
      <Navbar />
      <div className="header-section">
        {/* ปรับ Header ตาม Mode */}
        <div className="breadcrumb">
            หน้าหลัก &nbsp; &gt; &nbsp; สินค้าของฉัน &nbsp; &gt; &nbsp; <span>{isEditMode ? 'แก้ไขประกาศ' : 'ลงประกาศ'}</span>
        </div>
        <h1 className="page-title">
            {isEditMode ? 'แก้ไขประกาศ' : 'ลงประกาศ'}<span className="highlight">ขายสินค้า</span>
        </h1>
      </div>

      <main className="container">
        {isEditMode ? <EditProduct /> : <ProductForm />}
      </main>
    </div>
  );
}

export default App;