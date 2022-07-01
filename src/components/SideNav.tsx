import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./side-nav.styles.css";

const SideNavLink = ({ to, title }) => (
  <li>
    <NavLink
      className={({ isActive }) =>
        isActive ? "nav__link nav__link--active" : "nav__link"
      }
      to={to}
      title={title}
    >
      {title}
    </NavLink>
  </li>
);

const SideNav = () => {
  const [open, setOpen] = useState<boolean>(true);

  const handleToggleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className={`nav ${open ? "open" : ""}`}>
      <div className="nav__toggle" onClick={handleToggleClick}>
        <svg
          className="toggle__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM358.6 278.6l-112 112c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L290.8 256L201.4 166.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l112 112C364.9 239.6 368 247.8 368 256S364.9 272.4 358.6 278.6z"
          />
        </svg>
      </div>
      <ul>
        <SideNavLink to={"/"} title={"Homepage"} />
        {/* <SideNavLink to={"/chapter/1"} title={"Chapter 1"} /> */}
        <SideNavLink to={"/chapter/lists"} title={"Lists"} />
        {/* <SideNavLink to={"/chapter/3"} title={"Chapter 3"} />
        <SideNavLink to={"/chapter/4"} title={"Chapter 4"} /> */}
      </ul>
    </nav>
  );
};

export default SideNav;
