import React, { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import ReviewSeller from "./components/ReviewSeller.jsx";

function App() {
  const [page, setPage] = useState("review");

  return (
    <div>
      <Navbar />

      {page === "product" && (
        <ProductDetail goReview={() => setPage("review")} />
      )}

      {page === "review" && (
        <ReviewSeller goBack={() => setPage("product")} />
      )}
    </div>
  );
}

export default App;