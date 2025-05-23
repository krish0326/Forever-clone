import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from '../components/NewsletterBox'


function About() {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT "} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4  text-gray-600">
          <p>
            Forever was founded in 2022. We are a team of designers and
            developers who are passionate about creating unique and beautiful
            websites.and we are always looking for ways to improve our services.
            or we are always looking for ways to improve our services.
          </p>
          <p>
            We are dedicated to providing our customers with the best possible
            experience, and we are always looking for ways to improve our
            services. the best possible experience, and we are always looking
            for ways to improve our services. and we are always looking for ways
            to improve our services.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to provide our customers with the best possible
            experience and we are always looking for ways to improve our
            services and and we are always looking for ways to improve our
            services all over the world{" "}
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY "} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row  text-sm mb-20">
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Quantity Assurance:</b>
          <p className="text-gray-600">
            we meticulously inspect every product before shipping it to ensure
            it meets our high standards of quality and durability.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className="text-gray-600">
            we offer a user-friendly website that makes it easy for customers to
            browse and purchase our products.
          </p>
        </div>
        <div className="border px-10 md:px-16 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service: </b>
          <p className="text-gray-600">
            we provide exceptional customer service, ensuring that our customers
            have a positive shopping experience.
          </p>
        </div>
      </div>
      <NewsletterBox/>
    </div>
  );
}

export default About;
