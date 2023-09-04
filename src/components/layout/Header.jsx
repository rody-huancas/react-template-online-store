import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* Iconos */
import {
  BiPhone,
  BiMessageSquareDots,
  BiSearch,
  BiLogoFacebook,
  BiLogoInstagram,
} from "react-icons/bi";
import { CiShoppingCart, CiUser } from "react-icons/ci";
/* Logo */
import logo from "../../assets/images/logo.png";
import { Social } from "./Social";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className="w-full">
        <div className="top-color">
          <div className="w-[1200px] h-[45px] mx-auto flex justify-between items-center text-sm text-gray-700">
            <div className="flex gap-5">
              <p className="flex items-center gap-1">
                <BiPhone /> +51 975 597 994
              </p>
              <p className="flex items-center gap-1">
                <BiPhone /> +51 974 354 421
              </p>
            </div>
            <div className="flex items-center gap-2">
              <Social Red={BiLogoFacebook} color={"blue"} />
              <Social Red={BiLogoInstagram} color={"blue"} />
              <Social Red={BiMessageSquareDots} color={"blue"} />
            </div>
          </div>
        </div>

        <nav
          className={`w-full py-3 ${
            scrolled &&
            "bg-white fixed top-0 shadow-sm z-10 transition-all duration-500"
          }`}
        >
          <div className="w-[1200px] mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="w-24 p-2">
              <img src={logo} alt="logo" />
            </div>
            {/* Menú */}
            <div className="flex gap-4">
              <Link className="text-gray-700">Inicio</Link>
              <Link className="text-gray-700">Nosotros</Link>
              <Link className="text-gray-700">Tienda</Link>
            </div>
            {/* Buscar */}
            <div className="flex items-center gap-5 text-xl">
              <div className="pt-2 relative mx-auto text-gray-600">
                <input
                  className="border border-gray-300 bg-white h-10 px-5 pr-0 rounded-lg text-sm focus:outline-none"
                  type="search"
                  name="search"
                  placeholder="Buscar"
                />
                <button
                  type="submit"
                  className="absolute right-0 top-0 mt-5 mr-4"
                >
                  <BiSearch />
                </button>
              </div>
              <div className="pt-2 text-gray-800">
                <CiUser />
              </div>
              <button className="pt-2 text-gray-800">
                <CiShoppingCart />
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
