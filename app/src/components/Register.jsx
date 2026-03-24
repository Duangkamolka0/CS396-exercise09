import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../styles.module.css';

export default function Register({ onNext }) {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  
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
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.headerLeft}>
          <h1>TU MARKET PLACE</h1>
        </div>

        <div className={styles.headerRight}>
          <h2 id="home" className={styles.homeLink} onClick={() => navigate("/")}>
            กลับหน้าหลัก
          </h2>
        </div>
      </div>

      <div className={`${styles.contentWrapper} ${styles.registerForm}`}>
        <h2>สร้างบัญชีใหม่</h2>

        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label>ชื่อ</label>
            <input id="inputfirstname" name="firstname" placeholder="ชื่อจริง" onChange={handleChange} />
          </div>

          <div className={styles.formGroup}>
            <label>นามสกุล</label>
            <input id="inputlastname" name="lastname" placeholder="นามสกุล" onChange={handleChange} />
          </div>
        </div>

        <div className={styles.formGroup}>
          <label>ชื่อผู้ใช้งาน</label>
          <input id="inputusername" name="username" placeholder="@ yourname" onChange={handleChange} />
        </div>

        <div className={styles.formGroup}>
          <label>อีเมล</label>
          <input id="inputemail" name="email" placeholder="your@email" onChange={handleChange} />
        </div>

        <div className={styles.grid}>
          <div className={styles.formGroup}>
            <label>รหัสผ่าน</label>
            <input id="inputpassword" type="password" name="password" placeholder="รหัสผ่าน" onChange={handleChange} />
          </div>

          <div className={styles.formGroup}>
            <label>ยืนยันรหัสผ่าน</label>
            <input id="inputconfirmPassword" type="password" name="confirmPassword" placeholder="ยืนยันรหัสผ่าน" onChange={handleChange} />
          </div>
        </div>

        <div className={styles.buttonRow}>
          <button className={styles.nextBtn} onClick={handleSubmit}>
            ถัดไป
          </button>
        </div>
      </div>
    </div>
  );
}