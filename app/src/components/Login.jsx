import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { showToast } from '../utils';
import parcelIcon from '../assets/logos_parcel-icon.png';
import '../login.css';

export default function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  useEffect(() => {
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/home-login', { replace: true });
    }
  }, [navigate]);

  const handleLogin = () => {
    if (!user.trim() || !pass.trim()) {
      showToast('กรุณากรอกข้อมูลให้ครบ');
      return;
    }

    // ── TODO: เชื่อม API จริงตรงนี้ ──
    localStorage.setItem('isLoggedIn', 'true');
    showToast('เข้าสู่ระบบสำเร็จ!');
    setTimeout(() => navigate('/home-login'), 1500);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleLogin();
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">TU Market Place</div>
      </nav>

      {/* LOGIN CARD */}
      <main className="login-page">
        <div className="login-card">

          {/* Left: Illustration */}
          <div className="login-illustration">
          <img src={parcelIcon} alt="box" className="box-img" />
          </div>

          {/* Right: Form */}
          <div className="login-form-side">
            <h2 className="login-title">เข้าสู่ระบบ</h2>

            <div className="form-group">
              <label>ชื่อผู้ใช้งาน / อีเมล</label>
              <input
                type="text"
                placeholder="ชื่อผู้ใช้หรืออีเมล"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <div className="form-group">
              <label>รหัสผ่าน</label>
              <input
                type="password"
                placeholder="รหัสผ่าน"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <button className="btn-login" onClick={handleLogin}>
              เข้าสู่ระบบ
            </button>
          </div>

        </div>
      </main>
    </>
  );
}