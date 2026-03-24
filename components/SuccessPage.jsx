import { useNavigate } from "react-router-dom";
import "../style.css";
import TickMark from '../assets/Tick Box.png';

function SuccessPage() {
  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="header">
        <h1 className="en-title">TU MARKET PLACE</h1>
      </div>

      <div className="success">
        <div className="success-circle">
          <img src={TickMark} alt="success" />
        </div>

        <h2 className="success-title">สมัครสมาชิกสำเร็จ</h2>

        <p className="success-text">
          ระบบได้รับข้อมูลของคุณเรียบร้อยแล้ว<br />
          กำลังดำเนินการตรวจสอบเอกสารยืนยันตัวตน
        </p>

        <button className="btn-primary" onClick={goHome}>
          กลับหน้าหลัก
        </button>
      </div>
    </div>
  );
}

export default SuccessPage;