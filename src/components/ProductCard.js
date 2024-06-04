import React from "react";

import YellowStar from "../images/icons/star.svg"
import GrayStar from "../images/icons/outline-star.svg"

const generateRatingArr = (rating) => {
    let arr = new Array(5);
    arr = arr.fill(false);
    return arr.map((val,index) => {
        if(index <= (rating - 1)) {
            return true;
        }
        console.log(arr)
        return false;
    })
  
};

function ProductCard({ productImage, title, price, rating }) {
    const ratingArr = generateRatingArr(rating);
  return (
    <div className="rounded-[10px] flex flex-col gap-4 items-start">
      <img src={productImage} alt="" className="w-full min-h-[180px] min-w-[250px] max-h-[180px] rounded-[10px]" />

      <h4 className="font-semibold text-[13px] text-left">{title}</h4>

      <div className="w-full flex justify-between">
        <h5 className="text-2xl font-semibold price">${price}</h5>
        <div className="flex gap-1">
          {ratingArr.map((star,idx) => (<img src={star ? YellowStar : GrayStar} alt="" key={idx} className="w-[14px]"/>))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
