"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./header.css";
const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    console.log("Close");
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="container-fluid header bg-[#2D3745] px-4 py-2 shadow shadow-lg fixed top-0 w-full">
        <div className="container mx-auto">
          <header className="flex items-center justify-between relative">
            <div className="logo">
              <Link href={"/"}>
                <Image
                  src="/surobhi.png"
                  width="80"
                  height="80"
                  alt="A picture of Logo"
                  className="md:w-[80px] w-[50px]"
                />
              </Link>
            </div>
            <nav className="hidden md:block">
              <ul className="flex items-center">
                <li className="px-3 pl-0">
                  <Link
                    className={`relative navlink text-white font-semibold text-lg uppercase ${
                      pathname === "/" ? "active" : ""
                    }`}
                    href={"/"}
                  >
                    হোম
                  </Link>
                </li>
                <li className="px-3 pr-0">
                  <Link
                    className={`relative navlink text-white font-semibold text-lg uppercase ${
                      pathname === "/blogs" ? "active" : ""
                    }`}
                    href={"/blogs"}
                  >
                    ব্লগ
                  </Link>
                </li>
              </ul>
            </nav>
            <div
              className="md:hidden bars w-[35px] flex flex-col gap-2 cursor-pointer"
              onClick={toggleMobileMenu}
            >
              <span className="w-full h-[3px] bg-white"></span>
              <span className="w-full h-[3px] bg-white"></span>
              <span className="w-full h-[3px] bg-white"></span>
            </div>
            <div
              className={`mb-menu fixed ${
                isMobileMenuOpen ? "active" : "hide"
              } w-full top-[56px] bg-black-05 p-3 px-6 pt-4 h-full`}
            >
              <ul>
                <li className="pb-3">
                  <Link
                    onClick={closeMobileMenu}
                    className={`relative navlink text-white font-semibold text-lg uppercase ${
                      pathname === "/" ? "active" : ""
                    }`}
                    href={"/"}
                  >
                    home
                  </Link>
                </li>
                <li className="pb-3">
                  <Link
                    onClick={closeMobileMenu}
                    className={`relative navlink text-white font-semibold text-lg uppercase ${
                      pathname === "/blogs" ? "active" : ""
                    }`}
                    href={"/blogs"}
                  >
                    blogs
                  </Link>
                </li>
              </ul>
              <h2 className="text-lg text-slate-300">Contact Details</h2>
              <a
                className="text-slate-300"
                href={"mailto:ashiqulshouravdev@gmail.com"}
              >
                ashiqulshouravdev@gmail.com
              </a>
            </div>
          </header>
        </div>
      </div>
    </>
  );
};

export default Header;
