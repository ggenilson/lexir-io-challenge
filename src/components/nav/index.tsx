import { FC, useState } from "react";
import { v4 as uuid } from "uuid";
import { navItems } from "./nav-items";

const Navbar: FC = () => {
  const [ulAdditionalStyles, setUlAdditionalStyles] = useState(
    "opacity-0 top-[-400px]"
  );
  const [menuResponsiveType, setMenuResponsiveType] = useState<
    "menu" | "close"
  >("menu");

  const onMenuResponsiveClick = () => {
    if (menuResponsiveType === "menu") {
      setUlAdditionalStyles("top-[80px] opacity-100");
      setMenuResponsiveType("close");

      return;
    }

    setUlAdditionalStyles("opacity-0 top-[-400px]");
    setMenuResponsiveType("menu");
  };

  return (
    <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between font-lato">
      <div className="flex justify-between items-center">
        <span className="text-charleston-green text-[30px] font-bold">
          LEXIR
        </span>

        <span
          className="text-3xl cursor-pointer mx-2 md:hidden block"
          onClick={() => onMenuResponsiveClick()}
        >
          {menuResponsiveType}
        </span>
      </div>

      <ul
        className={`md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 transition-all ease-in duration-200 ${ulAdditionalStyles}`}
      >
        {navItems.map((navItem) => (
          <li key={uuid()}>
            <a
              href={navItem.href}
              className="text-[14px] mx-4 text-charleston-green font-medium md:flex items-center gap-2"
            >
              {navItem.ExtraComponent && navItem.ExtraComponent}

              <span>{navItem.title.toLocaleUpperCase()}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
