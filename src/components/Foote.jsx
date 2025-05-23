import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="mt-40 text-sm">
      {/* Grid layout for main content */}
      <div className="grid grid-cols-1 sm:grid-cols-[3fr_1fr_1fr] gap-14 mb-10">
        {/* Column 1 - Logo & Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the standard dummy text for decades.
          </p>
        </div>

        {/* Column 2 - Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Column 3 - Contact Info */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-212-456-7890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>

      {/* Divider & Copyright */}
      <hr className="border-gray-300" />
      <p className="py-5 text-sm text-center text-gray-500">
        © 2024 Forever.com – All Rights Reserved
      </p>
    </div>
  );
}

export default Footer;
