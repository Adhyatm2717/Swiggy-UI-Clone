import { BsCaretDownFill as PiCaretDownBold } from "@react-icons/all-files/bs/BsCaretDownFill";
import { MdGpsFixed } from "@react-icons/all-files/md/MdGpsFixed";
import { IoClose } from "@react-icons/all-files/io5/IoClose";
import { WiTime8 } from "@react-icons/all-files/wi/WiTime8";
import React, { useState } from "react";
import logo from "../assets/logo.svg";

function Header() {
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="sidebar black-overlay w-full h-full fixed duration-500"
        onClick={() => setToggle(false)}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          className="w-[500px] bg-white h-full absolute duration-[600ms]"
          onClick={(e) => e.stopPropagation()}
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        >
          <div className="mt-[100px] ml-[100px]">
            <IoClose
              className="text-[30px] text-gray-500"
              onClick={() => setToggle(false)}
            />
            <form>
              <br />
              <input
                type="text"
                placeholder="Search for area, street name.."
                className="w-[300px] p-2 border-gray-500 border-2 shadow"
              />
              <div className="p-2 border-2  mt-4 flex w-[300px] border-gray-500 items-center">
                <MdGpsFixed className="text-[20px]  text-gray-700" />
                <div className="pl-2">
                  <p className="font-bold text-gray-800">
                    Get Current Location
                  </p>
                  <p className="text-gray-700 text-[12px]">Using GPS</p>
                </div>
              </div>
              <div className="mt-4 border-2 border-gray-500 p-2 w-[300px]">
                <p className= " font-bold text-gray-900 text-[13px]">Recent Searches</p>
                <hr className="bg-gray-500"/>
                <div className="flex items-center pt-2">
                    <WiTime8 className="text-[20px]  text-gray-700"/>
                    <div className="pl-2">
                      <p className="font-bold text-gray-800">Aalo Paratha</p>
                      <p className="text-gray-700 text-[12px]">Taj Lake, Ratanda, Jodhpur, Rajasthan</p>
                    </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="p-3 shadow-xl">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="Logo">
            <img className="h-[60px]" src={logo} alt="" />
          </div>
          <div className="Location p-[20px]">
            <span className="border-b-[3px] font-bold border-black hover:text-[#fc8019] hover:border-[#fc8019]">
              Ratanda
            </span>{" "}
            Jodhpur, Rajasthan, India{" "}
            <PiCaretDownBold
              onClick={() => {
                setToggle(true);
              }}
              className="inline text-[0.9rem] text-[#fc8019]"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
