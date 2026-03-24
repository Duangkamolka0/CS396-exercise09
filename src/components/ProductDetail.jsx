import React from "react";
import "../App.css";
import backIcon from "../assets/back.png";
import shoe1 from "../assets/image1.png";
import shoe2 from "../assets/image2.png";

function ProductDetail({ goReview }) {
  return (
    <>
    <div className="back-arrow" >
      <img src={backIcon} alt="back" />
    </div>
    <div className="container th-text">
      <button className="category">รองเท้า</button>

      <div className="product-img">
        <img src={shoe1} alt="shoe" />
        <img src={shoe2} alt="shoe" />
      </div>

      <h2>Crocs Classic Clog Size M7/W9</h2>
      <p>ขายโดย ดี๊ด๊า ⭐⭐⭐⭐⭐ (138)</p>

      <p>รายละเอียด :</p>
      <p>
        รองเท้า ยี่ห้อ Crocs Classic Clog Size M7/W9 แถมจิบบลิลายทะเล สภาพดีมาก เหมือนใหม่ ซื้อจากฟิวเจอร์พาร์ครังสิต มีใบเสร็จ
      </p>

      <p>รายละเอียดการนัดรับ :</p>
      <p>ส่งฝั่งตรงข้ามม.ธรรมศาสตร์ฟรี / ฝั่งม.ธรรมศาสตร์ +10 บาท</p>

      <h3 className="price">ราคา 1,500 บาท/คู่</h3>

      <div className="btn-group">
        <button className="contact">
          ติดต่อ IG: didazaza04
        </button>
        <button className="favorite">
            <span className="heart">♡</span>
            รายการโปรด
        </button>
      </div>
    </div>
    </>
  );
}

export default ProductDetail;