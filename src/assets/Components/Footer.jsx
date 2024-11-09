import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-indigo-900 overflow-y-scroll p-2 mb-4 p-4 text-white ">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="mx-5 text-white text-start font-bold text-xl italic">
            Louis<span className="text-yellow-400">DM</span>
          </h3>
        </div>
        <div>
          <h2>Want to save big?</h2>
          <h4>
            Join our newsletter community and get notified about Jumia's latest
            discounts.
          </h4>
          <form action="#" className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2"
            />
            <button type="submit" className="bg-orange-500 p-2 text-white">
              Subscribe
            </button>
          </form>
          <div class="flex items-center mb-4 mt-2">
            <input
              type="checkbox"
              id="agree-checkbox"
              required
              class="mr-2 h-4 w-4 text-blue-600 border-blue-600"
            />
            <label for="agree-checkbox" class="text-sm">
              I agree to the
              <a href="#" target="_blank" class=" underline">
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <div className="hidden md:block sm:block lg:block">
          <h2>Download LouisDm mobile app</h2>
          <h4>Get the latest deals and offers on your mobile device.</h4>
          <div className="flex mt-2">
            <a
              href="#"
              className="mr-2 flex items-center hover:text-orange-300"
            >
              <FaApple className="text-4xl" />{" "}
              <div className="flex flex-col items-center">
                <p className=" " style={{ fontSize: "8px" }}>
                  Download on the App Store
                </p>
                <p className="text-sm">App Store</p>
              </div>
            </a>
            <a
              href="#"
              className=" ml-2 flex items-center hover:text-orange-300"
            >
              <FaGooglePlay className="text-4xl" />{" "}
              <div className="flex flex-col ">
                <p className="" style={{ fontSize: "10px" }}>
                  Get it on
                </p>
                <p className="text-sm">Google playstore</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
