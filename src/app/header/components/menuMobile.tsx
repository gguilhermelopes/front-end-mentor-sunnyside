"use client";

import Hamburger from "@/app/graphicElements/icon-hamburger";
import { useState } from "react";
import { navBarContent } from "./navbar";

const MenuMobile = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) setIsMenuOpen(false);
  };
  return (
    <div>
      <button onClick={handleClick}>
        <Hamburger />
      </button>
      {isMenuOpen && (
        <div
          onClick={handleOutsideClick}
          className="w-full animate-anima-in min-h-full absolute top-0 left-0 flex flex-col items-center z-10"
        >
          <nav className="w-[90%] relative bg-slate-100 mt-24 p-8 before:content[''] before:inline-block before:w-0 before:h-0 before:absolute before:top-[-25px] before:right-0 before:border-r-[25px] before:border-r-slate-100 before:border-t-[25px] before:border-t-transparent before:border-b-0 before:border-b-transparent ">
            <ul className="flex flex-col items-center gap-8">
              {navBarContent.map((item) => (
                <li key={item.label}>
                  <a
                    className={`py-2 px-4 ease-in-out duration-300 text-lg text-darkGrayishBlue ${
                      item.isButton
                        ? "font-serif text-veryDarkDesaturatedBlue bg-yellow uppercase rounded-full block mt-4 py-4 px-6 hover:bg-[#8cd6f5] hover:bg-opacity-50 hover:text-white"
                        : "hover:text-darkDesaturatedCyan"
                    } `}
                    href={item.href}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default MenuMobile;
