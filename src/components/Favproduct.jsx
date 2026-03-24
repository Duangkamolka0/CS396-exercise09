import React from "react";
import "../Favproduct.css";

const productsFavorite = [
  {
    id: 1,
    name: "Dior Perfume Blooming Bouquet",
    price: "4,500 บาท/ชิ้น",
    img: "/img/pf.png",
  },
  {
    id: 2,
    name: "Pandora Bracelet Rose Gold size 17",
    price: "1,790 บาท/ชิ้น",
    img: "/img/pdr.png",
  },
];

const myProducts = [
  {
    id: 3,
    name: "iPhone 14 Pro max 512 GB สี Space Black",
    price: "28,500 บาท/ชิ้น",
    img: "/img/phone.png",
  },
  {
    id: 4,
    name: "Crocs Classic Clog Size M7/W9",
    price: "1,500 บาท/คู่",
    img: "/img/crocs.png",
  },
];

const Card = ({ product, isOwner }) => {
  return (
    <div className="card">
      <img src={product.img} alt={product.name} className="card-img" />
      <h4>{product.name}</h4>
      <p className="price">{product.price}</p>

      <div className="button-group">
        <button className="primary-btn">
          {isOwner ? "แก้ไข" : "ดูเพิ่มเติม"}
        </button>
        {!isOwner && (
          <button className="secondary-btn">❤️ รายการโปรด</button>
        )}
      </div>
    </div>
  );
};

const Marketplace = () => {
  return (
    <div className="app">

      {/* Title */}
      <h2 className="title">คลังของฉัน</h2>

      <div className="grid">
        {/* Favorite */}
        <div className="box favorite">
          <h3>รายการโปรด</h3>
          {productsFavorite.map((item) => (
            <Card key={item.id} product={item} isOwner={false} />
          ))}
        </div>

        {/* My products */}
        <div className="box my-products">
          <h3>สินค้าของฉัน</h3>
          {myProducts.map((item) => (
            <Card key={item.id} product={item} isOwner={true} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;