import React, { useState } from 'react';
import ImageUpload from './ImageUpload';

function ProductForm() {
  const categories = ["เสื้อผ้า", "รองเท้า", "เครื่องประดับ", "ความงามและของใช้ส่วนตัว", "กระเป๋า", "นาฬิกาและแว่นตา", "อุปกรณ์อิเล็กทรอนิกส์", "เครื่องใช้ในบ้าน", "หนังสือ", "อื่นๆ"];

  // 1. เพิ่ม State สำหรับเก็บราคาทั้ง 3 ช่อง
  const [formData, setFormData] = useState({
    productName: "",
    price1: "", // ราคาที่ 1
    price2: "", // ราคาที่ 2
    price3: "", // ราคาที่ 3
    description: "",
    place: "",
    contact: ""
  });

  const [selectedCategory, setSelectedCategory] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  return (
    <form className="main-grid">
      <div className="column-left">
        <ImageUpload />

        {/* 2. ปรับส่วนราคาสินค้าให้มี 3 ช่องตามต้นฉบับ */}
        <section className="card">
          <h3>ราคาสินค้า</h3>
          <div className="line"></div>
          <div className="price-row">
            <div className="input-group">
              <label>ราคาขาย</label>
              <input type="number" id="price1" placeholder="0" value={formData.price1} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>ราคาขาย</label>
              <input type="number" id="price2" placeholder="0" value={formData.price2} onChange={handleInputChange} />
            </div>
            <div className="input-group">
              <label>ราคาขาย</label>
              <input type="number" id="price3" placeholder="0" value={formData.price3} onChange={handleInputChange} />
            </div>
          </div>
        </section>

        {/* ส่วนอื่นๆ ของ Column Left... */}
        <section className="card">
          <h3>วิธีการรับสินค้า</h3>
          <div className="line"></div>
          <div className="input-group">
            <label>รายละเอียดการนัดรับ</label>
            <input type="text" id="place" placeholder="เช่น ใต้ตึก SC3 หรือ Kave TU" value={formData.place} onChange={handleInputChange} />
          </div>
        </section>
      </div>

      {/* ฝั่งขวา: ข้อมูลสินค้า + ติดต่อ + ปุ่ม */}
      <div className="column-right">
        <section className="card">
          <h3>ข้อมูลสินค้า</h3>
          <div className="line"></div>
          
          <div className="input-group">
            <label>ชื่อสินค้า</label>
            <input type="text" id="productName" placeholder="ระบุชื่อสินค้าของคุณ" value={formData.productName} onChange={handleInputChange} />
          </div>

          <div className="category-section">
            <label style={{fontSize: '0.9rem', color: '#555'}}>หมวดหมู่สินค้า</label>
            <div className="category-tags">
              {categories.map((cat) => (
                <span key={cat} className={`tag ${selectedCategory === cat ? 'active' : ''}`} onClick={() => setSelectedCategory(cat)}>
                  {cat}
                </span>
              ))}
            </div>
          </div>

          <div className="input-group" style={{marginTop: '15px'}}>
            <label>รายละเอียดสินค้า</label>
            <textarea id="description" rows="5" placeholder="กรอกรายละเอียดสินค้าเพิ่มเต็ม" value={formData.description} onChange={handleInputChange}></textarea>
          </div>
        </section>

        <section className="card">
          <h3>ช่องทางติดต่อผู้ขาย</h3>
          <div className="line"></div>
          <input type="text" id="contact" placeholder="Line ID / เบอร์โทรศัพท์" value={formData.contact} onChange={handleInputChange} />
        </section>

        <div className="action-buttons">
          <button type="submit" className="btn-primary">เผยแพร่ประกาศ</button>
          <button type="button" className="btn-secondary">บันทึกแบบร่าง</button>
          <button type="button" className="btn-cancel">ยกเลิก</button>
        </div>
      </div>

    </form>
  );
}

export default ProductForm;