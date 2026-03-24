import { useState, useEffect } from "react";

export default function VerifyPhone({ onBack, onFinish }) {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [timer, setTimer] = useState(0);

  const sendOTP = () => {
    if (!phone) {
      alert("กรุณากรอกเบอร์โทร");
      return;
    }

    const randomOtp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(randomOtp);
    setTimer(60);

    alert("OTP: " + randomOtp);
  };

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((t) => t - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [timer]);

  const verifyOTP = () => {
    if (parseInt(otp) === generatedOtp) {
      onFinish();
    } else {
      alert("OTP ไม่ถูกต้อง");
    }
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

      <div className="container">
        <h2>ยืนยันเบอร์โทรศัพท์</h2>

        <input
          placeholder="09x-xxx-xxxx"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button id="sendOtpButton" onClick={sendOTP} disabled={timer > 0}>
          {timer > 0 ? `รอ ${timer}s` : "ส่ง OTP"}
        </button>

        <input
          placeholder="กรอก OTP"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />

        <div className="row">
          <button id="backButton" onClick={onBack}>ย้อนกลับ</button>
          <button id="verifyButton" onClick={verifyOTP}>ยืนยัน</button>
        </div>
      </div>
    </>
  );
}