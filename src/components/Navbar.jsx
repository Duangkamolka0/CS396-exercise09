import { Link } from "react-router-dom";
import "../Marketplace.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"><h1>TU MARKET PLACE</h1></div>
      <ul className="nav-links">
        <li><Link to="/">หน้าหลัก</Link></li>
        <li><Link to="/shop">เลือกซื้อสินค้า</Link></li>
        <li><Link to="/sell">ลงขายสินค้า</Link></li>
        <li><Link to="/fav">คลังของฉัน</Link></li>
      </ul>
      <div className="profile-icon" style={{fontSize: '1.5rem', cursor: 'pointer'}}>👤</div>
    </nav>
  );
}

export default Navbar;