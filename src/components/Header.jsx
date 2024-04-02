// import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
const Header = () => {
  return (
    <>
      <header className="flexBetween max-padd-container py-3 bg-primary fixed top-0 w-full z-40">
        {/* {logo} */}
        <a href="/" className="bold-24">
          <span className="text-secondary bold-36">X</span>Step
        </a>
        <div className="flexBetween gap-x-4">
          {/*Search*/}
          <div className="hidden xs:flexBetween bg-white py-2 px-3 rounded-full z-50">
            <input type="search" placeholder="search.." className="border-none outline-none w-44 hover:w-52 transition-all duration-200" />
            <div className="bg-white">
              <a href="/" className="hover:text-secondary">
                <FaSearch />
              </a>
            </div>
          </div>
            {/* addtocart btn */}
            <div>
              <a href="/" className="flexBetween gap-x-1 text-white bg-secondary px-3 py-2 rounded-full w-10 hover:w-20 transition-all duration-200 z-50 group"> <span className="regular-16 hidden group-hover:flex ">Cart</span>
                <FaCartShopping />
              </a>
            </div>
        </div>
      </header>
    </>
  );
};

export default Header;
