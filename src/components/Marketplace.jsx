import React from "react";
import "../Marketplace.css";

const products = [
  {
    image: "img/phone.png",
    title: "iPhone 14 Pro max 512 GB สี Space Black",
    price: "28,500 บาท / ชิ้น",
  },
  {
    image: "img/duex.png",
    title: "เสื้อ Duex Studio สีขาว แขนยาว",
    price: "220 บาท / ชิ้น",
  },
  {
    image: "img/crocs.png",
    title: "Crocs Classic Clog",
    price: "1,500 บาท / ชิ้น",
  },
  {
    image: "img/pdr.png",
    title: "Pandora Bracelet Rose Gold",
    price: "1,790 บาท / ชิ้น",
  },
  {
    image: "img/pf.png",
    title: "Dior Perfume Blooming Bouquet",
    price: "4,500 บาท / ชิ้น",
  },
  {
    image: "img/plete.png",
    title: "กระโปรงพลีท นักศึกษา",
    price: "180 บาท / ชิ้น",
  },
];

const Marketplace = () => {
  return (
   <div className="app">

  <div className="main-layout">
    {/* Sidebar */}
    <aside className="sidebar">
      <h3>หมวดหมู่รายการสินค้า</h3>
      <button className="active">สินค้าทั้งหมด</button>
      <button>เสื้อผ้า</button>
      <button>รองเท้า</button>
      <button>เครื่องประดับ</button>
      <button>ความงามและของใช้ส่วนตัว</button>
      <button>กระเป๋า</button>
      <button>นาฬิกาและแว่นตา</button>
      <button>อุปกรณ์อิเล็กทรอนิกส์</button>
      <button>เครื่องใช้ในบ้าน</button>
      <button>หนังสือ</button>
      <button>อื่นๆ</button>
    </aside>

    {/* Products */}
    <main className="products">
      {products.map((item, i) => (
        <div className="card" key={i}>
          <img src={item.image} alt="" />
          <div className="card-body">
            <h4>{item.title}</h4>
            <p className="price">{item.price}</p>

            <div className="btn-group">
              <button className="buy">ดูเพิ่มเติม</button>
              <button className="fav">❤️ รายการโปรด</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  </div>
</div>
  );
};

export default Marketplace;