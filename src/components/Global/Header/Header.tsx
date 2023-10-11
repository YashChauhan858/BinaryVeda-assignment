/** ----------- @Images ----------- */
import marvelWhite from "@/assets/logo-white.svg";

const Header = () => {
  return (
    <section className="p-3 flex justify-between items-center select-none">
      {/* Logo section */}
      <div className="flex gap-2 items-center">
        <img src={marvelWhite} className="h-7" alt="marvel-developers-logo" />
        <span className="h-4 w-[2px] bg-textColor rounded-lg"></span>
        <h4 className="text-textColor font-semibold">Developers</h4>
      </div>
      {/* Hamburger menu */}
      <div className="flex flex-col gap-1">
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
        <span className="w-6 h-1 bg-textColor rounded-lg"></span>
      </div>
    </section>
  );
};

export default Header;
