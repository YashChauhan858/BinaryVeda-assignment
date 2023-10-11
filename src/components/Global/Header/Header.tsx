/** --------- @Images ----------- */
import marvelWhite from "@/assets/logo-white.svg";

/** --------- @Component -------- */
import { Button } from "@components";
import { useState } from "react";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const toggleMobileNav = () => setMobileNav((prevState) => !prevState);

  return (
    <header className="p-3 sm:p-8 flex justify-between items-center select-none sticky top-0 bg-backgroundColor">
      {/* Logo section */}
      <div className="flex gap-2 items-center">
        <img src={marvelWhite} className="h-7" alt="marvel-developers-logo" />
        <span className="h-4 w-[2px] bg-textColor rounded-lg"></span>
        <h4 className="text-textColor font-semibold">Developers</h4>
      </div>
      {/* Hamburger menu */}
      <div className="flex flex-col gap-1 sm:hidden" onClick={toggleMobileNav}>
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
      </div>
      {/* Nav options ( sm < ) */}
      <div
        className={`fixed left-0 top-0 w-full h-full z-0 bg-[rgba(0,0,0,0.7)] ${
          mobileNav ? "block" : "hidden"
        } sm:hidden`}
      ></div>
      <nav
        className={`sm:hidden p-5 h-[100vh] fixed z-10 top-0 right-0 bg-backgroundColor ${
          mobileNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-300`}
      >
        <ul className="list-none flex flex-col gap-8">
          <li className="text-textColor cursor-pointer">
            <p
              className="text-4xl rotate-45 w-fit ml-auto"
              onClick={toggleMobileNav}
            >
              +
            </p>
          </li>
          <li className="text-textColor cursor-pointer text-center">
            Why marvel
          </li>
          <li className="text-textColor cursor-pointer text-center">
            Enterprice
          </li>
          <li className="text-textColor cursor-pointer text-center">Pricing</li>
          <li className="text-textColor cursor-pointer text-center">Sign in</li>
          <li className="text-textColor cursor-pointer text-center">
            <Button title="Sign up free" mode="secondary" />
          </li>
        </ul>
      </nav>
      {/* Nav options ( sm > ) */}
      <nav className="hidden sm:block">
        <ul className="flex list-none gap-5">
          <li className="text-textColor cursor-pointer">Why marvel</li>
          <li className="text-textColor cursor-pointer">Enterprice</li>
          <li className="text-textColor cursor-pointer">Pricing</li>
          <li className="text-textColor cursor-pointer">Sign in</li>
          <li className="text-textColor cursor-pointer">
            <Button title="Sign up free" mode="secondary" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
