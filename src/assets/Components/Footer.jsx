import React from "react";
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      className="bg-indigo-900 overflow-y-scroll px-6 md:px-20 lg:px-24 xl:px-40 2xl:px-64   border-box py-6 mb-4  text-white "
      style={{ fontFamily: "arial" }}
    >
      <div className=" justify-between block  sm:block lg:flex">
        <div>
          <h3 className="mx-2 text-white text-start font-bold mb-4 text-xl italic">
            Louis<span className="text-yellow-400">DM</span>
          </h3>
        </div>
        <div>
          <h2 className="font-bold">Want to save big?</h2>
          <h4>
            Join our newsletter community and get notified about Jumia's latest
            discounts.
          </h4>
          <form action="#" className="mt-2 flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 text-indigo-900"
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
              I agree to the &nbsp;
              <a href="#" target="_blank" class=" underline">
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <div className="hidden md:block sm:text-sm sm:mt-8 sm:mb-4 sm:block lg:block font-bold text-orange-300">
          <h2>Download LouisDm mobile app</h2>
          <h4>Get the latest deals and offers on your mobile device.</h4>
          <div className="flex mt-2 text-white">
            <a
              href="#"
              className="mr-2 flex items-center hover:text-orange-300"
            >
              <FaApple className="text-4xl " />{" "}
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
      <div className="flex justify-between ">
        <div className="mt-8 ">
          <div>
            <h2 className="font-bold text-xl">NEED HELP?</h2>
            <ul className="text-sm leading-loose">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h2 className="font-bold text-xl">USEFUL LINKS</h2>
            <ul className="text-sm leading-loose">
              <li>
                <a href="#" className="hover:text-orange-300">
                  Getting Started
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Best Sales deals
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  First Time Discount
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Returns and Refunds
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Delivery Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-300">
                  Black Friday
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="font-bold text-xl">ABOUT LOUISDM</h2>
          <ul className="text-sm leading-loose">
            <li>
              <a href="#" className="hover:text-orange-300">
                Our Services
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Privacy Notice
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Official Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Official Store
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Terms and Condition
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 hidden md:block sm:block lg:block">
          <h2 className="font-bold text-xl">USEFUL LINKS</h2>
          <ul className="text-sm leading-loose">
            <li>
              <a href="#" className="hover:text-orange-300">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Best Sales deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                First Time Discount
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Returns and Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Black Friday
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-8 hidden md:block sm:block lg:block">
          <h2 className="font-bold text-xl">USEFUL LINKS</h2>
          <ul className="text-sm leading-loose">
            <li>
              <a href="#" className="hover:text-orange-300">
                Getting Started
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Best Sales deals
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                First Time Discount
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Returns and Refunds
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Delivery Information
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-orange-300">
                Black Friday
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
