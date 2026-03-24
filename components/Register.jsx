import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../styles.css';
export default function Register({ onNext }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (form.password !== form.confirmPassword) {
      alert("รหัสผ่านไม่ตรงกัน");
      return;
    }

    onNext(form);
  };

  return (
    <>
    <div className="header">
      <div className="header-left">
        <h1>TU MARKET PLACE</h1>
      </div>

      <div className="header-right">
        <h2 id="home">กลับหน้าหลัก</h2>
      </div>
    </div>

    <div className="container register-form">
    <h2>สร้างบัญชีใหม่</h2>

  <div className="grid">
    <div className="form-group">
      <label>ชื่อ</label>
      <input id="inputfirstname" name="firstname" placeholder="ชื่อจริง" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>นามสกุล</label>
      <input id="inputlastname" name="lastname" placeholder="นามสกุล" onChange={handleChange} />
    </div>
  </div>

  <div className="form-group">
    <label>ชื่อผู้ใช้งาน</label>
    <input id="inputusername" name="username" placeholder="@ yourname" onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>อีเมล</label>
    <input id="inputemail" name="email" placeholder="your@email" onChange={handleChange} />
  </div>

  <div className="grid">
    <div className="form-group">
      <label>รหัสผ่าน</label>
      <input id="inputpassword" type="password" name="password" placeholder="รหัสผ่าน" onChange={handleChange} />
    </div>

    <div className="form-group">
      <label>ยืนยันรหัสผ่าน</label>
      <input id="inputconfirmPassword" type="password" name="confirmPassword" placeholder="ยืนยันรหัสผ่าน" onChange={handleChange} />
    </div>
  </div>

      <div className="button-row">
      <button className="next-btn" onClick={handleSubmit}>
        ถัดไป
      </button>
    </div>
  </div>
    </>
  );
}