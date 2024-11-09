import React from "react";
import { useState } from "react";
import { FaTags } from "react-icons/fa";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FaTv } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";
import { FaTools } from "react-icons/fa";
const Sidebar = (props) => {
  const [phoneSection, setPhoneSection] = useState(false);
  const [computerSection, setComputerSection] = useState(false);
  const [homeSection, setHomeSection] = useState(false);
  const [flatScreenSection, setFlatScreenSection] = useState(false);

  return (
    <div
      className="side bg-white  h-[100vh] text-black relative w-[300px] overflow-y-scroll text-black "
      style={{
        fontFamily: "Arial",
        display: props.sideShow ? "block" : "none",
      }}
    >
      <button
        className="absolute top-0 right-[0px] z-10 text-white-700 font-bold text-2xl"
        onClick={() => props.setSideShow(false)}
      >
        <MdCancel />
      </button>
      <div>
        <h3 className="p-2 font-bold uppercase">Shop By Category</h3>
        <hr className="px-3" />
        <h3 className="flex items-center p-2 font-bold uppercase">
          <FaTags />
          Hot Deals
        </h3>
        <div className="p-2">
          <button
            className="flex items-center"
            onClick={() => setPhoneSection(!phoneSection)}
          >
            <MdOutlinePhoneAndroid /> &nbsp; Phone,Tablets & Gadgets
            <FaCaretDown
              style={{ display: phoneSection ? "none" : "block" }}
            />{" "}
            <FaCaretUp style={{ display: phoneSection ? "block" : "none" }} />
          </button>
          <ul
            className="drop  my-2 text-md transition duration-300 ease-in-out-300"
            style={{ display: phoneSection ? "block" : "none" }}
          >
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Mobile Phones</li>
            </a>
            <hr />
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Tablets</li>
            </a>{" "}
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Laptops</li>
            </a>
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Accessories</li>
            </a>
          </ul>
        </div>{" "}
        <div className="p-2">
          <button
            className="flex items-center"
            onClick={() => setComputerSection(!computerSection)}
          >
            <FaComputer /> &nbsp; Computers
            <FaCaretDown
              style={{ display: computerSection ? "none" : "block" }}
            />{" "}
            <FaCaretUp
              style={{ display: computerSection ? "block" : "none" }}
            />
          </button>
          <ul
            className="drop  my-2 text-md transition duration-300 ease-in-out-300"
            style={{ display: computerSection ? "block" : "none" }}
          >
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Mobile Phones</li>
            </a>
            <hr />
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Tablets</li>
            </a>{" "}
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Laptops</li>
            </a>
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Accessories</li>
            </a>
          </ul>
        </div>{" "}
        <div className="p-2">
          <button
            className="flex items-center"
            onClick={() => setHomeSection(!homeSection)}
          >
            <FaTools /> &nbsp; Household Items
            <FaCaretDown
              style={{ display: homeSection ? "none" : "block" }}
            />{" "}
            <FaCaretUp style={{ display: homeSection ? "block" : "none" }} />
          </button>
          <ul
            className="drop  my-2 text-md transition duration-300 ease-in-out-300"
            style={{ display: homeSection ? "block" : "none" }}
          >
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Mobile Phones</li>
            </a>
            <hr />
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Tablets</li>
            </a>{" "}
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Laptops</li>
            </a>
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Accessories</li>
            </a>
          </ul>
        </div>
        <div className="p-2">
          <button
            className="flex items-center"
            onClick={() => setFlatScreenSection(!flatScreenSection)}
          >
            <FaTv /> &nbsp; Flat Screens
            <FaCaretDown
              style={{ display: flatScreenSection ? "none" : "block" }}
            />{" "}
            <FaCaretUp
              style={{ display: flatScreenSection ? "block" : "none" }}
            />
          </button>
          <ul
            className="drop  my-2 text-md transition duration-300 ease-in-out-300"
            style={{ display: flatScreenSection ? "block" : "none" }}
          >
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Mobile Phones</li>
            </a>
            <hr />
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Tablets</li>
            </a>{" "}
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Laptops</li>
            </a>
            <hr />{" "}
            <a href="#" className="hover:bg-white">
              {" "}
              <li>Accessories</li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
