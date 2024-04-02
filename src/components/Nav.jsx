// import React from 'react'
import { Link } from "react-scroll"
import { LINKS } from "../constant/data"

const Nav = () => {
  return (
    <>
      <nav className="fixed top-16 xl:top-10 w-full mx-auto z-40">
        <div className="flexCenter bg-white w-full xl:w-[633px] mx-auto shadow-sm rounded-lg">
          <ul className="flex gap-x-4 sm:gap-x-14">
            {LINKS.map((link) => (
              <Link
              key={link.title}
              to={link.path}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              activeClass="active"
              className="capitalize py-3 medium-15 xs:medium-16 cursor-pointer"
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav
