import React from "react";
import ProductCard from "./ProductCard";

import ProductImage1 from "../images/products/1.png";
import ProductImage2 from "../images/products/2.png";
import ProductImage3 from "../images/products/3.png";
import ProductImage4 from "../images/products/4.png";

const productCardListData = [
  {
    productImage: ProductImage1,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
  {
    productImage: ProductImage2,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
  {
    productImage: ProductImage3,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
  {
    productImage: ProductImage4,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
  {
    productImage: ProductImage3,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
  {
    productImage: ProductImage2,
    title: "Modern Wall Decor Framed Painting",
    price: 199.99,
    rating: 5,
  },
];

function HorizontalList() {
  return (
    <div className="-z-10 mt-8">
      <div className="flex flex-row gap-[20px] flex-nowrap x-scrollable">
        {productCardListData.map(
          ({ productImage, title, price, rating }, idx) => (
            <ProductCard
              key={idx}
              productImage={productImage}
              title={title}
              price={price}
              rating={rating}
            />
          )
        )}
      </div>
    </div>
  );
}

export default HorizontalList;
