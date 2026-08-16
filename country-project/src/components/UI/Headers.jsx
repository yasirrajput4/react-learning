import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const navLinkClass = ({ isActive }) =>
  `block px-4 py-2 md:p-0 font-mono text-xs uppercase tracking-widest transition-colors duration-200 ${
    isActive ? "text-brass" : "text-muted hover:text-brass-light"
  }`;

const Headers = () => {
  const [show, setShow] = useState(false);

  const handleButtonToggle = () => {
    return setShow(!show);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-brass/30 bg-ink/95 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="Logo">
            <NavLink to="/">
              <h1 className="font-display text-2xl italic tracking-wide sm:text-3xl">
                World<span className="not-italic text-brass">Atlas</span>
              </h1>
            </NavLink>
          </div>

          <nav
            className={`${
              show ? "flex" : "hidden"
            } absolute inset-x-0 top-full flex-col border-t border-line bg-surface shadow-xl md:static md:flex md:flex-row md:border-0 md:bg-transparent md:shadow-none`}
          >
            <ul className="flex flex-col gap-1 p-4 md:flex-row md:items-center md:gap-8 md:p-0">
              <li>
                <NavLink to="/" className={navLinkClass}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className={navLinkClass}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/country" className={navLinkClass}>
                  Country
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={navLinkClass}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={handleButtonToggle}
              aria-label="Toggle menu"
              className="p-2 text-2xl text-parchment transition-colors duration-200 hover:text-brass"
            >
              <GiHamburgerMenu />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
