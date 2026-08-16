import footerContact from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { MdPlace } from "react-icons/md";
import { TbMailPlus } from "react-icons/tb";

import { NavLink } from "react-router-dom";

const Footers = () => {
  const footerIcon = {
    MdPlace: <MdPlace />,
    IoCallSharp: <IoCallSharp />,
    TbMailPlus: <TbMailPlus />,
  };

  return (
    <footer className="mt-24 border-t border-line bg-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
        {footerContact.map((curData) => {
          const { icon, title, details, id } = curData;
          return (
            <div className="flex items-center gap-4" key={id}>
              <div className="text-3xl text-brass">{footerIcon[icon]}</div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold text-parchment">{title}</p>
                <p className="text-sm text-muted">{details}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-line bg-ink">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <p className="font-mono text-xs text-muted">
                Copyright &copy; 2026, All Right Reserved{" "}
                <span className="text-brass">Yasir Rajput</span>
              </p>
            </div>

            <div className="footer-menu">
              <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
                <li>
                  <NavLink
                    to="/"
                    className="font-mono text-xs uppercase tracking-widest text-muted hover:text-brass-light"
                  >
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/about"
                    className="font-mono text-xs uppercase tracking-widest text-muted hover:text-brass-light"
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/country"
                    className="font-mono text-xs uppercase tracking-widest text-muted hover:text-brass-light"
                  >
                    Country
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    className="font-mono text-xs uppercase tracking-widest text-muted hover:text-brass-light"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footers;
