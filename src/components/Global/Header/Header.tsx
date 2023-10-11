/** --------- @Images ----------- */
import marvelWhite from "@/assets/logo-white.svg";

/** --------- @Component -------- */
import { Button } from "@components";

const Header = () => {
  return (
    <section className="p-3 sm:p-8 flex justify-between items-center select-none">
      {/* Logo section */}
      <div className="flex gap-2 items-center">
        <img src={marvelWhite} className="h-7" alt="marvel-developers-logo" />
        <span className="h-4 w-[2px] bg-textColor rounded-lg"></span>
        <h4 className="text-textColor font-semibold">Developers</h4>
      </div>
      {/* Hamburger menu */}
      <div className="flex flex-col gap-1 sm:hidden">
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
      </div>
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
    </section>
  );
};

export default Header;
