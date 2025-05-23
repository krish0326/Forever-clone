import { useParams } from "react-router-dom";
import React, { useContext, useState, useEffect } from "react";
import { Shopcontext } from "../context/Shopcontext";
import { assets } from "../assets/assets";
import Reletedproducts from "../components/Reletedproducts";

function Product() {
  const { productId } = useParams();
  const { products, currency ,addTocart, } = useContext(Shopcontext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId]);

  return productData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* product data  */}
      <div className="flex  gap-12 sm:gap-12 flex-col sm:flex-row">
        {/* product images */}
        <div className="flex-1  flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex flex-col  overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full">
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                alt="not found"
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%] ">
            <img src={image} alt="not lodded " className="w-full h-auto " />
          </div>
        </div>
        {/* product info */}
        <div className="flex-1 ">
          <h1 className="font-medium text-2xl mt-2 ">{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="not lodded" className="w-3 5 " />
            <img src={assets.star_icon} alt="not lodded" className="w-3 5 " />
            <img src={assets.star_icon} alt="not lodded" className="w-3 5 " />
            <img src={assets.star_icon} alt="not lodded" className="w-3 5 " />
            <img
              src={assets.star_dull_icon}
              alt="not lodded"
              className="w-3 5 "
            />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl  font-medium">
            {currency}
            {productData.price}
          </p>
          <p className="mt-5 text-gray-500 md:w-4/5 ">
            {productData.description}
          </p>
          <div className="flex flex-col  gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => {
                return (
                  <button
                    onClick={() => setSize(item)}
                    className={`border py-2 px-4 bg-gray-100 ${
                      item === size ? "border-orange-500" : ""
                    }`}
                    key={index}
                  >
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <button onClick={() => addTocart(productData._id , size)} className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5" />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days. </p>
          </div>
        </div>
      </div>
      {/* description & reviews section */}
      <div className="mt-20">
        <div className="flex">
          <b className=" border  px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm ">Reviews(122)</p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            An e-commerce website is an online store that allows consumers to
            buy products through the internet using a computer or mobile device.
            interact with the website and make purchases using a credit card or
            other payment method. and receive shipping and delivery information
            for the products. for example, a consumer can browse a website's
            catalog of products, add items to a shopping cart, and complete a
            purchase.
          </p>
          <p>
            E-commerce websites typically display a catalog of products for sale
            and allow users to browse, search, and purchase items.and receive
            shipping and delivery information for the products for example, a
            consumer can browse a website's catalog of products, add items to a
            shopping cart, and complete a purchase.
          </p>
        </div>
      </div>
      {/* display releted products */}
      <Reletedproducts category={productData.category} subCategory={productData.subCategory}/> 
    </div>
  ) : (
    <div className=" opacity-0 "></div>
  );
}

export default Product;
