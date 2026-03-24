import { useNavigate } from "react-router-dom";
import "../style.css";
import idIcon from '../assets/Identification Documents.png';
import replyArrow from '../assets/Reply Arrow.png';
import idIcon1 from '../assets/Identification Documents-1.png';

function VerifyPage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    const agree = document.getElementById("agree").checked;

    if (!agree) {
      alert("กรุณายอมรับเงื่อนไขก่อน");
      return;
    }

    navigate("/success");
  };

  return (
    <div>
      {/* Header */}
      <div className="header">
        <h1 className="en-title">TU MARKET PLACE</h1>
        <div className="back">กลับหน้าหลัก</div>
      </div>

      <div className="container">
        <h2 className="title">ยืนยันตัวตน</h2>
        <p className="subtitle">อัปโหลดเอกสารด้วยบัตรประชาชน</p>

        {/* Row */}
        <div className="row">
          <div className="col">
            <div className="label">ด้านหน้าบัตร</div>
            <label className="upload-box">
              <input type="file" hidden />
              <img src={idIcon} className="icon" />
              <span>คลิกเพื่ออัปโหลด</span>
            </label>
          </div>

          <div className="col">
            <div className="label">ด้านหลังบัตร</div>
            <label className="upload-box">
              <input type="file" hidden />
              <img src={replyArrow} className="icon" />
              <span>คลิกเพื่ออัปโหลด</span>
            </label>
          </div>
        </div>

        {/* Selfie */}
        <div className="selfie-section">
          <div className="label">เซลฟี่พร้อมบัตร</div>
          <label className="upload-box big">
            <input type="file" hidden />
            <img src={idIcon1} className="icon" />
            <span>คลิกเพื่ออัปโหลดเซลฟี่</span>
          </label>
        </div>

        {/* Consent */}
        <div className="consent-title">ข้อตกลงความยินยอม</div>

        <div className="consent-box">
          ข้าพเจ้ายินยอมให้ TU MARKET PLACE เก็บรวบรวม ใช้ และเปิดเผยข้อมูลส่วนบุคคล
          เพื่อวัตถุประสงค์ในการยืนยันตัวตน ป้องกันการทุจริต และปฏิบัติตามกฎหมาย
        </div>

        <div className="checkbox">
          <input type="checkbox" id="agree" />
          <label htmlFor="agree">
            ยอมรับเงื่อนไขการใช้งาน และข้อกำหนดของ TU MARKET PLACE
          </label>
        </div>

        {/* Buttons */}
        <div className="buttons">
          <button className="btn-outline">ย้อนกลับ</button>
          <button className="btn-primary" onClick={handleSubmit}>
            ส่งข้อมูลยืนยัน
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyPage;