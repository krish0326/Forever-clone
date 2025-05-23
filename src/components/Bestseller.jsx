import React, { useEffect, useState, useContext } from "react";
import { Shopcontext } from "../context/Shopcontext";
import Title from "./Title";
import Productitem from "./Productitem"; // Ensure this path is correct

function Bestseller() {
  const { products } = useContext(Shopcontext);
  const [bestsellerItems, setBestsellerItems] = useState([]);

  useEffect(() => {
    const filtered = products.filter((item) => item.bestseller);
    setBestsellerItems(filtered.slice(0, 5));
  }, [products]);

  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1="BEST" text2="SELLER" />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the standard dummy text.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {bestsellerItems.map((item) => (
          <Productitem
            key={item._id}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Bestseller;
