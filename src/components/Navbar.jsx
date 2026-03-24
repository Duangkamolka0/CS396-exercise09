import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="en-title">TU MARKET PLACE</h1>
      </div>
      <ul className="nav-links">
        <li>หน้าหลัก</li>
        <li>เลือกซื้อสินค้า</li>
        <li className="active">ลงขายสินค้า</li>
        <li>คลังของฉัน</li>
      </ul>
      <div className="profile-icon">👤</div>
    </nav>
  );
}

export default Navbar;