import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style.css';

export default function HomeLogin() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
      navigate('/', { replace: true });
    }
  }, [navigate]);

  useEffect(() => {
    const handleClick = () => setDropdownOpen(false);
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/', { replace: true });
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TU Market Place</div>
        <div className="nav-actions">
          <div className="profile-wrapper" ref={dropdownRef}>
            <div
              className="profile-icon"
              onClick={(e) => {
                e.stopPropagation();
                setDropdownOpen(!dropdownOpen);
              }}
            >
              <svg viewBox="0 0 24 24">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>

            <div
              className={`dropdown ${dropdownOpen ? 'open' : ''}`}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="dropdown-item logout" onClick={handleLogout}>
                <svg viewBox="0 0 24 24"><path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5-5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"/></svg>
                ออกจากระบบ
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <h1 className="hero-title">
          ตลาดขายของมือสอง<br />
          สำหรับ<span className="white">นักศึกษา</span>
        </h1>
        <div className="hero-actions">
          <button className="btn-hero-gold"    onClick={() => navigate('/products')}>เลือกซื้อสินค้า</button>
          <button className="btn-hero-outline" onClick={() => navigate('/sell')}>ลงขายสินค้า</button>
        </div>
      </section>
    </>
  );
}