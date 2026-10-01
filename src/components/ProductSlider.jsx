import React from "react";
import ProductCard from "./ProductCard";

function ProductSlider({ products }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-5 snap-x snap-mandatory scrollbar-hide">
      {products.map((product) => (
        <div
          key={product.id}
          className="min-w-[280px] sm:min-w-[320px] snap-start"
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductSlider;